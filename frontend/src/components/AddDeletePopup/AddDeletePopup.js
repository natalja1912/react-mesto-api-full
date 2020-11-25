import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function AddDeletePopup({ isOpen, onClose, onSubmit }) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
        onClose();
    }

    return (
        <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" isOpen={isOpen} onClose={onClose} onSubmit={(e) => handleSubmit(e)}>
        </PopupWithForm>
    );
}

export default AddDeletePopup;