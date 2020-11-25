import React from 'react';
import Card from '../Card/Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, handleCardLike, handleCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);


  return (
    <main className="content">
      <section className="cover">
        <div className="cover__profile">
          <button className="cover__image" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={onEditAvatar}></button>
          <div className="cover__heading-info">
            <h1 className="cover__heading">{currentUser.name}</h1>
            <button className="cover__edit" onClick={onEditProfile} aria-label="Редактировать" type="button"></button>
          </div>
          <p className="cover__subheading">{currentUser.about}</p>
        </div>
        <button className="cover__add" onClick={onAddPlace} aria-label="Добавить" type="button"></button>
      </section>
      <section className="places">
        {cards.map((item) => (<Card key={item._id} card={item} handleCard={onCardClick} handleCardLike={(card) => handleCardLike(card)} handleCardDelete={(card) => handleCardDelete(card)} />))}
      </section>
    </main>
  );
}

export default Main;