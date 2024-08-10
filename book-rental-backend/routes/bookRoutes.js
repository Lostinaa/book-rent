// routes/bookRoutes.js
const express = require('express');
const { addBook, getPendingBooks, approveBook, getOwnerBooks, getAvailableBooks } = require('../controllers/bookController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, addBook);
router.get('/pending', auth, getPendingBooks);
router.put('/:id/approve', auth, approveBook);
router.get('/owner', auth, getOwnerBooks);
router.get('/available', auth, getAvailableBooks);

module.exports = router;
