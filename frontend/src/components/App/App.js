import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import * as auth from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Cards from '../Cards/Cards';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
    const [loggedIn, setLoggedIn] = useState({ loggedIn: false, email: '' });
    const [infoToolValues, setInfoToolValues] = useState({ active: false, name: '', text: '' });
    const [infoToolActive, setInfoToolActive] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            auth.getContent(jwt).then((res) => {
                if (res) {
                    setLoggedIn({ loggedIn: true, email: res.data.email });
                }
                else localStorage.removeItem('jwt');
            })
                .catch(() => {
                    console.log(`Пользователь не зарегистрирован в системе`);
                })
        }
    }, [])

    useEffect(() => {
        history.push('/cards');
    }, [loggedIn]);

    function handleRegister(user) {
        setInfoToolActive(true);
        auth.register(user.password, user.email)
            .then((data) => {
                if (data) {
                    setLoggedIn({ loggedIn: true, email: user.email });
                    setInfoToolValues({ active: true, name: 'success', text: 'Вы успешно зарегистрировались!' });
                }
                else {
                    setInfoToolValues({ active: true, name: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.' });
                }
            })
            .catch(err => {
                setInfoToolValues({ active: true, name: 'failure', text: 'Что-то пошло не так! Попробуйте ещё раз.' });
                console.log(err)
            });
    }

    function handleLogin(user) {
        auth.authorize(user.password, user.email)
            .then((data) => {
                if (data) {
                    localStorage.setItem('jwt', data.token);
                    setLoggedIn({ loggedIn: true, email: user.email });
                }
                if (!data) {
                    console.log('Произошла ошибка');
                }
                else return;
            })
            .catch(err => {
                console.log(err);
            });
    }

    function infoToolClose() {
        setInfoToolValues({ active: false, path: '', text: '' });
    }

    function handleExit() {
        localStorage.removeItem('jwt');
        history.push('/signup');
    }

    return (
        <div className="page">
            <main className="content">
                {infoToolActive && <InfoTooltip name={infoToolValues.name} text={infoToolValues.text} isOpen={infoToolValues.active} onClose={infoToolClose} />}
                <Switch>
                    <ProtectedRoute path="/cards" loggedIn={loggedIn.loggedIn} component={Cards} user={loggedIn.email} handleExit={handleExit} />
                    <Route path="/signin">
                        <Register onRegister={(user) => handleRegister(user)} />
                    </Route>
                    <Route path="/signup">
                        <Login onLogin={(user) => handleLogin(user)} />
                    </Route>
                    <Route exact path="/">
                        {loggedIn.loggedIn ? <Redirect to="/cards" /> : <Redirect to="/signin" />}
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
