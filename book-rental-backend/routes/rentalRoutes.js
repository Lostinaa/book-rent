// routes/rentalRoutes.js
const express = require('express');
const { createRental, getRentals, getOwnerRentals } = require('../controllers/rentalController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createRental);
router.get('/', auth, getRentals);
router.get('/owner', auth, getOwnerRentals);

module.exports = router;
