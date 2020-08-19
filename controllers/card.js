const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.status(200).send({ data: cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndRemove(cardId)
    .then((card) => {
      if (!card) {
        res.status(400).send({ message: 'Неверный id карточки' });
      } else {
        res.send({ data: card });
      }
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
