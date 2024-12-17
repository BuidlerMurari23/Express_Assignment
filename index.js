// Importing the express module
const express = require('express');

// Initializing the express app
const app = express();

// Route to generate a random number
app.get('/random', (req, res) => {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Send the random number in JSON format
  res.json({ random: randomNumber });
});

// Setting the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

