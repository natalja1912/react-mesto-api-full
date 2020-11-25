export const BASE_URL = 'https://magic.students.nomoreparties.xyz/';

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "password": password, "email": email })
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 400) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Не передано одно из полей'
                    })
                }
                if (response.status === 401) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Пользователь с email не найден'
                    })
                }
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json();
        })
};

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "password": password, "email": email })
    })
        .then(response => {
            if (!response.ok) {
                if (response.status === 400) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Некорректно заполнено одно из полей'
                    })
                }
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json()
        })
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then((response) => {
            if (!response.ok) {
                if (response.status === 401) {
                    return Promise.reject({
                        status: response.status,
                        message: 'Токен не передан или передан не в том формате'
                    })
                }
                return Promise.reject({
                    status: response.status,
                    message: response.statusText
                })
            }
            return response.json();
        })
} 