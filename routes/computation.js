var express = require('express');
var router = express.Router();

let requestCount = 0; // To keep track of the request number

// Helper function to apply a Math function in rotation
function applyMathFunction(x) {
//   requestCount++;
//   switch (requestCount % 3) {
//     case 1:
//       return `log2 applied to ${x} is ${Math.log2(x)}`;
//     case 2:
//       return `cosh applied to ${x} is ${Math.cosh(x)}`;
//     case 0:
//       return `floor applied to ${x} is ${Math.floor(x)}`;
//     default:
//       return `Unexpected error `;
//   }
// }
requestCount++;
  const functions = [
    { name: 'log2', fn: Math.log2 },
    { name: 'cosh', fn: Math.cosh },
    { name: 'floor', fn: Math.floor }
  ];
  const selectedFunction = functions[(requestCount - 1) % functions.length];
  return `${selectedFunction.name} applied to ${x} is ${selectedFunction.fn(x)}`;
}

// Computation endpoint
router.get('/computation', (req, res) => {
  const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
  const result = applyMathFunction(x);
  res.send(result);
});
  
  module.exports = router;