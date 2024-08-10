// controllers/rentalController.js
const Rental = require('../models/Rental');
const Book = require('../models/Book');
const User = require('../models/User');

exports.createRental = async (req, res) => {
  try {
    const { bookId } = req.body;
    const rental = await Rental.create({ bookId, renterId: req.user.userId, startDate: new Date() });
    res.status(201).json(rental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRentals = async (req, res) => {
  try {
    const rentals = await Rental.findAll({ where: { renterId: req.user.userId }, include: [{ model: Book }] });
    res.json(rentals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOwnerRentals = async (req, res) => {
  try {
    const rentals = await Rental.findAll({
      include: [{
        model: Book,
        where: { ownerId: req.user.userId }
      }, {
        model: User,
        as: 'renter'
      }]
    });
    res.json(rentals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
