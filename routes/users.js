const users = require('express').Router();
const { getUsers, getUser, createUser } = require('../controllers/user');

users.get('/users', getUsers);

users.get('/users/:id', getUser);

users.post('/users', createUser);

module.exports = users;
