let add = (a, b) => {
  return a + b;
};

let difference = (a, b) => {
  return a - b;
};

let product = (a, b) => {
  return a * b;
};

let caculate = (a, b, callBack) => {
    let result = callBack(a, b);
    console.log("result -> ", result);
};

caculate(10, 20, add);
caculate(10, 20, product);
caculate(50, 20, difference);
