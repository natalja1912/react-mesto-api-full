import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Card({ card, handleCard, handleCardLike, handleCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = currentUser._id === card.owner._id;

    const cardDeleteButtonClassName = (
        `place__delete-button ${isOwn ? 'place__delete-button_visible' : 'place__delete-button_hidden'}`
    );

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = `place__like-button ${isLiked && 'place__like-button_active'}`;

    function handleClick() {
        handleCard(card);
    }

    return (
        <div className="place">
            <button className="place__image-button" onClick={handleClick}><img className="place__image" src={card.link} alt={card.name} /></button>
            <div className="place__info">
                <p className="place__heading">{card.name}</p>
                <div className="place__buttons">
                    <button className={cardLikeButtonClassName} onClick={() => handleCardLike(card)} aria-label="Мне нравится" type="button"></button>
                    <button className="place__sumoflikes-button" aria-label="Количество лайков" type="button">{card.likes ? card.likes.length : 0}</button>
                </div>
            </div>
            <button className={cardDeleteButtonClassName} onClick={() => handleCardDelete(card)} aria-label="Удалить картинку" type="button"></button>
        </div>
    );
}

export default Card;