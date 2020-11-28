const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, editProfile, editAvatar, getProfile, getUser,
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/me', getProfile);

router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
}), getUser);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(20),
    about: Joi.string().required().min(2).max(30),
  }),
}), editProfile);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().min(2),
  }),
}), editAvatar);

module.exports = router;
