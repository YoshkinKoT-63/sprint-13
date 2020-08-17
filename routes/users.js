const users = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

users.get('/', (req, res) => {
  fs.readFile(filePath, { encoding: 'utf8' })
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).json({ message: 'запрашиваемый файл не найден' });
    });
});

users.get('/:id', (req, res) => {
  fs.readFile(filePath, { encoding: 'utf8' })
    .then((data) => {
      const userData = JSON.parse(data).find(({ _id: userId }) => userId === req.params.id);
      if (userData) {
        res.send(userData);
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'запрашиваемый файл не найден' });
    });
});

module.exports = users;
