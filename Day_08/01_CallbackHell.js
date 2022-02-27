let add = (a, b) => {
  let sum = a + b;
  console.log("Sum is : ", sum);
  return sum;
};

let addition = (a, b, addCallBack) => {
  addCallBack(a, b);
};

let difference = (a, b) => {
  let diff = a - b;
  console.log("Difference is : ", diff);
  return diff;
};

let subtraction = (a, b, subtractCallBack) => {
  subtractCallBack(a, b);
};

// subtraction(50, 12, difference);

let product = (a, b) => {
  let product = a * b;
  console.log("Product is : ", product);
  return product;
};

let muiltplication = (a, b, productCallBack) => {
  productCallBack(a, b);
};
// muiltplication(10, 20, product);

//Callback Hell -> Callback -> callback -> callback
let performSeriesOfOperations = (a, b) => {
  addition(a, b, (a, b) => {
    let sum = a + b;
    console.log("Sum : ", sum);
    subtraction(a, b, (a, b) => {
      let diff = a - b;
      console.log("Difference : ", diff);
      muiltplication(a, b, (a, b) => {
        let product = a * b;
        console.log("Product : ", product);
      });
    });
  });
};

// performSeriesOfOperations -> addition -> add -> subtraction -> subtract -> muiltplication -> product

performSeriesOfOperations(50, 30);

//   caculate(10, 20, add);
//   caculate(10, 20, product);
//   caculate(50, 20, difference);
