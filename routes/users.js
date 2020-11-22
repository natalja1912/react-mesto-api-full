const router = require('express').Router();
const {
  getUsers, editProfile, editAvatar, getProfile, getUser,
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/me', getProfile);

router.get('/users/:userId', getUser);

router.patch('/users/me', editProfile);

router.patch('/users/me/avatar', editAvatar);

module.exports = router;
