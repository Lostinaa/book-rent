// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
sequelize.authenticate()
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.error('PostgreSQL connection error:', err));

// Models
require('./models/User');
require('./models/Book');
require('./models/Rental');
require('./models/Notification');

sequelize.sync();

// Routes
app.use('/api/users', require('./routes/userRoutes.js/index.js'));
app.use('/api/books', require('./routes/bookRoutes.js'));
app.use('/api/rentals', require('./routes/rentalRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
