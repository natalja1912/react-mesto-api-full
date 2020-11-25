import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_type_photo ${card && 'popup_opened'}`} >
      <div className="popup__image-group popup__item">
        <img className="popup__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
        <p className="popup__text popup__text_type_photo">{card ? card.name : ''}</p>
        <button className="popup__close-button popup__close-button_type_photo" onClick={onClose} type="button"></button>
      </div>
    </section>
  );
}

export default ImagePopup;