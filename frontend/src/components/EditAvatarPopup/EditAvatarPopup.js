import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
    const avatarRef = React.useRef();
    const [link, setLink] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    function handleClose() {
        setLink('');
        onClose();
    }

    useEffect(() => {
        setLink('');
    }, [onClose]);

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" buttonText={isLoading ? "Сохранение..." : "Сохранить"} isOpen={isOpen} onClose={handleClose} onSubmit={(e) => handleSubmit(e)}>
            <label className="popup__input">
                <input value={link} onChange={(e) => setLink(e.target.value)} ref={avatarRef} type="url" className="popup__text popup__text_type_placelink" name="popup__text_type_placelink" placeholder="https://unsplash.com/example.jpg" required />
                <span className="popup__input-error">Введите адрес сайта.</span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;