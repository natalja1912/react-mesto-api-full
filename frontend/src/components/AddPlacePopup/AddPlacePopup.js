import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function AddPlacePopup({ isOpen, onClose, onUpdateCard, isLoading }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const card = {
            name: name,
            link: link,
            owner: {
                _id: currentUser._id,
            },
            likes: [],
        }
        onUpdateCard(card);
    }

    function handleClose() {
        setName('');
        setLink('');
        onClose();
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [onClose]);


    return (
        <PopupWithForm name="place" title="Новое место" buttonText={isLoading ? "Сохранение..." : "Сохранить"} isOpen={isOpen} onClose={handleClose} onSubmit={(e) => handleSubmit(e)}>
            <label className="popup__input">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="popup__text popup__text_type_placename" name="popup__text_type_placename" placeholder="Горный Алтай" minLength="2" maxLength="30" required />
                <span className="popup__input-error">Вы пропустили это поле.</span>
            </label>
            <label className="popup__input">
                <input value={link} onChange={(e) => setLink(e.target.value)} type="url" className="popup__text popup__text_type_placelink" name="popup__text_type_placelink" placeholder="https://unsplash.com/example.jpg" required />
                <span className="popup__input-error">Введите адрес сайта.</span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;