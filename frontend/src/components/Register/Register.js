import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
    const [inputValues, setInputValues] = useState({ email: '', password: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValues(
            {
                ...inputValues,
                [name]: value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!inputValues.email || !inputValues.password) {
            console.log("Заполните все поля формы");
            return;
        }
        props.onRegister({password: inputValues.password, email: inputValues.email});
    }

    return (
        <>
            <Header>
                <Link to="/signin" className="header__item header__link">Войти</Link>
            </Header>
            <div className="register">
                <PopupWithForm name="dark" isOpen={true} title="Регистрация" buttonText="Зарегистрироваться" onSubmit={(e) => handleSubmit(e)}>
                    <input className="popup__input popup__input_dark" name="email" placeholder="Email" required id="email" type="email" value={inputValues.email} onChange={(e) => handleChange(e)} />
                    <input className="popup__input popup__input_dark" name="password" placeholder="Пароль" required id="password" type="password" value={inputValues.password} onChange={(e) => handleChange(e)} />
                </PopupWithForm>
                <div className="register__signup">
                    <Link to="/signin" className="register__link">Уже зарегистрированы? Войти</Link>
                </div>
            </div>
        </>
    );
}

export default Register;