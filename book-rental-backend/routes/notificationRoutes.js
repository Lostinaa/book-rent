// routes/notificationRoutes.js
const express = require('express');
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, getNotifications);
router.put('/:id/read', auth, markAsRead);

module.exports = router;
