
const express = require('express');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost:27017/myLogin', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});


const user = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});


const User = mongoose.model('User', user);


app.post('/SignUp.html', (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password
  });

  newUser.save((err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to sign up' });
    } else {
      console.log('User signed up successfully');
      res.redirect('/Login.html'); 
    }
  });
});


app.post('/Login.html', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username, password: password }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      console.log('User logged in successfully');
      res.redirect('/index.html'); 
    }
  });
});



