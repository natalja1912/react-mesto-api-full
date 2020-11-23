const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

// eslint-disable-next-line consistent-return
module.exports.createCard = async (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  try {
    const card = await Card.create({ name, link, owner });
    if (!card) {
      throw new NotFoundError('Карточка не была создана, попробуйте еще раз');
    }
    return res.status(200).send({ data: card });
  } catch (err) {
    const ERROR_CODE = 400;
    if (err.name === 'ValidationError') {
      err.statusCode = ERROR_CODE;
      err.message = 'Введены некорректные данные';
    }
    next(err);
  }
};

// eslint-disable-next-line consistent-return
module.exports.deleteCard = async (req, res, next) => {
  const owner = req.user._id;
  const id = req.params.cardId;
  try {
    const card = await Card.findOne({ _id: id });
    if (!card) {
      throw new NotFoundError('Карточка не была найдена, попробуйте еще раз');
    }
    if (card.owner.toString() !== owner) {
      return res.status(409).send('Карточка была создана другим пользователем');
    }
    return Card.findByIdAndRemove(req.params.cardId)
      .then((cardData) => res.send({ data: cardData }))
      .catch(next);
  } catch (err) {
    next(err);
  }
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch(next);
};
