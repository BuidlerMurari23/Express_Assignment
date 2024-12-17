// Importing the express module
const express = require('express');

// Initializing an express app
const app = express();

// Counter starting value
let counter = 0;

// Route to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter: counter });
});

// Route to increment the counter
app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter: counter });
});

// Route to decrement the counter
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter: counter });
});

// Setting the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
