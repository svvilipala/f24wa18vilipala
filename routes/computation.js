var express = require('express');
var router = express.Router();

let requestCount = 0; // To keep track of the request number

// Helper function to apply a Math function in rotation
function applyMathFunction(x) {

  const log2Result = Math.log2(x);
  const coshResult = Math.cosh(x);
  const floorResult = Math.floor(x);

  const value1 = `${x} is applied to log2 and the result is ${log2Result}`;
  const value2 = `${x} is applied to cosh and the result is ${coshResult}`;
  const value3 = `${x} is applied to floor and the result is ${floorResult}`;

  return `${value1}<br>${value2}<br>${value3}`;
  

}

// Computation endpoint
router.get('/', (req, res) => {
  const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;

  if (isNaN(x)) {
    return res.status(400).send("Invalid value for x. Please provide a valid number.");
  }


  const result = applyMathFunction(x);
  res.send(result);
});
  
module.exports = router;