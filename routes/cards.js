const cards = require('express').Router();
const fs = require('fs').promises;

const path = require('path');

const filePath = path.join(__dirname, '../data/cards.json');

cards.get('/', (req, res) => {
  fs.readFile(filePath, { encoding: 'utf8' })
    .then((data) => {
      res.send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).json({ message: 'запрашиваемый файл не найден' });
    });
});

module.exports = cards;
