//Normal Function
function addNumbers(a, b) {
  return a + b;
}

//Function Expression
let addNumbersFE = function (a, b) {
  return a + b;
};

//Arrow Function
let addNumbersArrow = (a, b) => {
  return a + b;
};

//Simplified Arrow Function
let addNumbersArrowSimplified = (a, b) => a + b;

console.log("addNumbers is ", addNumbers(10, 20));
console.log("addNumbersFE is ", addNumbersFE(10, 20));
console.log("addNumbersArrow is ", addNumbersArrow(10, 20));
console.log("addNumbersArrowSimplified is ", addNumbersArrowSimplified(10, 20));
