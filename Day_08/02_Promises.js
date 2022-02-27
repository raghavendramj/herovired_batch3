// let add = (a, b) => {
//   let sum = a + b;
//   console.log("Sum is : ", sum);
//   return sum;
// };

// let difference = (a, b) => {
//   let diff = a - b;
//   console.log("Difference is : ", diff);
//   return diff;
// };

// let product = (a, b) => {
//   let product = a * b;
//   console.log("Product is : ", product);
//   return product;
// };

let additionProm = (arr) => {
  return new Promise((resolve, reject) => {
    let a = arr[0];
    let b = arr[1];
    if (a < 0 || b < 0) {
      reject("Pass only non negative numbers");
    } else {
      let sum = a + b;
      console.log("Sum is ", sum);
      resolve(arr);
    }
  });
};

let subtractionProm = (arr) => {
  return new Promise((resolve, reject) => {
    let a = arr[0];
    let b = arr[1];
    if (a < 0 || b < 0) {
      reject("Pass only non negative numbers");
    } else {
      let differnce = a - b;
      console.log("differnce is ", differnce);
      resolve(arr);
    }
  });
};


additionProm([-50, 20])
.then(subtractionProm)
.then(result => console.log("final result : ", result))
.catch((error) => console.log("Error occurred", error));

// func1 -> func2 -> func3 -> catch