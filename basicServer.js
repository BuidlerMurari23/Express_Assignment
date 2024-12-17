// Importing the express module
const express = require('express');

// Initializing the express app
const app = express();

// Route for the homepage
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

// Route for the about page
app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

// Route for the contact page
app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Setting the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});