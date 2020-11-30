import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
    const [inputValues, setInputValues] = useState({ email: '', password: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValues(
            {
                ...inputValues,
                [name]: value,
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValues.email || !inputValues.password) {
            console.log("Заполните все поля формы");
            return;
        }
        props.onLogin({password: inputValues.password, email: inputValues.email});
        setInputValues({ email: '', password: '' });
    }

    return (
        <>
            <Header>
                <Link to="/signup" className="header__item header__link">Регистрация</Link>
            </Header>
            <div className="register register_type_login">
                <PopupWithForm name="dark" title="Вход" buttonText="Войти" isOpen={true} onSubmit={(e) => handleSubmit(e)}>
                    <input className="popup__input popup__input_dark" name="email" placeholder="Email" required id="email" type="email" value={inputValues.email} onChange={(e) => handleChange(e)} />
                    <input className="popup__input popup__input_dark" name="password" placeholder="Пароль" required id="password" type="password" value={inputValues.password} onChange={(e) => handleChange(e)} />
                </PopupWithForm>
            </div>
        </>
    );
}

export default Login;
