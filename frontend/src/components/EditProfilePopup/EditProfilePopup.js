import React, { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
            avatar: currentUser.avatar,
        });
    }

    function handleClose(){
        setName('');
        setDescription('');
        onClose();
    }

    useEffect(() => {
        setName('');
        setDescription('');
    }, [onClose]);

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" buttonText={isLoading ? "Сохранение..." : "Сохранить"} isOpen={isOpen} onClose={handleClose} onSubmit={(e) => handleSubmit(e)}>
            <label className="popup__input">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="popup__text popup__text_type_name" name="popup__text_type_name" placeholder="Имя исследователя" minLength="2" maxLength="40" required />
                <span className="popup__input-error">Вы пропустили это поле.</span>
            </label>
            <label className="popup__input">
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="popup__text popup__text_type_job" name="popup__text_type_job" placeholder="Профессия исследователя" minLength="2" maxLength="200" required />
                <span className="popup__input-error">Вы пропустили это поле.</span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;