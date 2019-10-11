const mongoose = require('mongoose');

const connectUrl = [
  'mongodb://',
  process.env.DB_USER ? `${process.env.DB_USER}:${process.env.DB_PASSWORD}@` : '',
  `${process.env.DB_HOST}:27017/${process.env.DB_NAME}`
].join('');

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection
    .on('connected', () => resolve())
    .on('error', (err) => {
      console.log('There is an issue with your MongoDB connection.  Please make sure MongoDB is running.');
      reject(err);
    });
});

module.exports = { connect };
