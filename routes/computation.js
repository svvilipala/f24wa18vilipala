// index.js
const express = require('express');
const app = express();
const port = 3000;

let requestCount = 0; // To keep track of the request number

// Helper function to apply a Math function in rotation
function applyMathFunction(x) {
  requestCount++;
  switch (requestCount % 3) {
    case 1:
      return `log2 applied to ${x} is ${Math.log2(x)}`;
    case 2:
      return `cosh applied to ${x} is ${Math.cosh(x)}`;
    case 0:
      return `floor applied to ${x} is ${Math.floor(x)}`;
    default:
      return `Unexpected error `;
  }
}

// Computation endpoint
app.get('/computation', (req, res) => {
  const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
  const result = applyMathFunction(x);
  res.send(result);
});


