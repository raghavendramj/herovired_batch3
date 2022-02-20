//Variable Hoisting
function variableHoisting() {
  debugger;
  console.log("1.A : ", a);
  var a;
  console.log("2.A : ", a);
  a = 10;
  console.log("3.A : ", a);
}
variableHoisting();

function subtract() {
  for (var eachArg of arguments) {
    console.log("Each Arg", eachArg);
  }
}

//Function Hoisting
var x = 10;
var y = 20;
console.log("Sum ", myCustomAddSecond(x, y));
function myCustomAddSecond(x, y) {
  return x + y;
}
