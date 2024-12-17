// Importing the 'http' module
const http = require('http');

// Dummy data for men and women products
const menProducts = [
  { id: 1, name: "Men's T-Shirt", price: 20 },
  { id: 2, name: "Men's Jeans", price: 40 },
  { id: 3, name: "Men's Jacket", price: 60 },
  { id: 4, name: "Men's Shoes", price: 50 },
  { id: 5, name: "Men's Watch", price: 120 },
  { id: 6, name: "Men's Hat", price: 15 },
  { id: 7, name: "Men's Hoodie", price: 55 },
  { id: 8, name: "Men's Sweater", price: 45 },
  { id: 9, name: "Men's Sunglasses", price: 25 },
  { id: 10, name: "Men's Backpack", price: 35 }
];

const womenProducts = [
  { id: 1, name: "Women's Dress", price: 30 },
  { id: 2, name: "Women's Skirt", price: 25 },
  { id: 3, name: "Women's Blouse", price: 40 },
  { id: 4, name: "Women's Shoes", price: 50 },
  { id: 5, name: "Women's Necklace", price: 80 },
  { id: 6, name: "Women's Handbag", price: 100 },
  { id: 7, name: "Women's Sunglasses", price: 30 },
  { id: 8, name: "Women's Sweater", price: 45 },
  { id: 9, name: "Women's Boots", price: 65 },
  { id: 10, name: "Women's Scarf", price: 20 }
];

// Creating the HTTP server
const server = http.createServer((req, res) => {
  // Setting the response header for JSON data
  res.setHeader('Content-Type', 'application/json');

  // Handling the different routes
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url === '/men') {
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } else if (req.url === '/other') {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Page not found" }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Invalid endpoint" }));
  }
});

// Setting the server to listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});