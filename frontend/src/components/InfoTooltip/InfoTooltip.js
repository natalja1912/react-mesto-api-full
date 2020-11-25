import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import successImage from '../../images/login-success.svg';
import failureImage from '../../images/login-failure.svg';

function InfoTooltip(props) {
    return (
        <div className="modal-window">
            <PopupWithForm name="infotool" isOpen={props.isOpen} onClose={props.onClose}>
                <img className="modal-window__image" alt={props.text} src={(props.name === 'success') ? successImage : failureImage} />
                <p className="modal-window__text">{props.text}</p>
            </PopupWithForm>
        </div>
    );
}

export default InfoTooltip;