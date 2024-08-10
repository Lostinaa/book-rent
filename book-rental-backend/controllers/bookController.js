// controllers/bookController.js
const Book = require('../models/Book');
const User = require('../models/User');

exports.addBook = async (req, res) => {
  try {
    const { title, author, category } = req.body;
    const book = await Book.create({ title, author, category, ownerId: req.user.userId });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPendingBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ where: { status: 'pending' }, include: [{ model: User, as: 'owner' }] });
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.approveBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update({ status: 'approved' });
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOwnerBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ where: { ownerId: req.user.userId } });
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAvailableBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ where: { status: 'approved' } });
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
