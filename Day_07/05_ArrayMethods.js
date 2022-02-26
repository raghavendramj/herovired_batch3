function mapFunctionDemo() {
  let squareNumber = (arr) => {
    let squares = new Array();
    for (let eachNum of arr) {
      squares.push(eachNum * eachNum);
    }
    console.log("Squares typical way : ", squares);

    let squareNumber = (a) => a * a;
    let resultArr = arr.map(squareNumber);
    console.log("Squares ES6 Map way : ", resultArr);

    let names = ["Raghava", "Keshava", "Madhava"];
    console.log(
      "uppercased using ES6 Map way : ",
      names.map((eachName) => eachName.toUpperCase())
    );
  };
  squareNumber([1, 2, 3, 4, 5, 6]);
}

// mapFunctionDemo();

function filterFunctionDemo() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let oddNums = new Array();
  let evenNums = new Array();

  for (let eachNum of numbers) {
    if (eachNum % 2 == 0) evenNums.push(eachNum);
    else oddNums.push(eachNum);
  }

  console.log("Even Numbers : ", evenNums);
  console.log("Odd Numbers : ", oddNums);

  let evenNumberPredicate = (eachNumber) => eachNumber % 2 == 0;
  let evenNumbersES6 = numbers.filter(evenNumberPredicate);
  console.log("ES6 : Even Numbers : ", evenNumbersES6);

  let oddNumberPredicate = (eachNumber) => eachNumber % 2 != 0;
  let oddNumbersES6 = numbers.filter(oddNumberPredicate);
  console.log("ES6 : Odd Numbers : ", oddNumbersES6);

  let strs = ["Tea", "Coffee", "Horlicks", "Badam Milk", "Bournvita"];
  console.log(
    "ES6 : > 6 Chars : ",
    strs.filter((str) => str.length > 6)
  );

  let names = [
    "Virat",
    "Apple",
    "Boat",
    "Lenskart",
    "BharatPe",
    "Amcure",
    "Sugar",
  ];
  console.log(
    "ES6 : Starting with letter A : ",
    names.filter((name) => name.charAt(0) === "A")
  );
  console.log(
    "ES6 : Starting with letter B : ",
    names.filter((name) => name.charAt(0) === "B")
  );
}

// filterFunctionDemo();

function reduceExample() {
  let numbers = [7, 8, 2, 3, 4, 9, 10, 1, 5, 6];
  let previousValue = 0;
  for (let currentValue of numbers) {
    previousValue = previousValue + currentValue;
  }
  console.log("Typical way of sum : ", previousValue);

  let reducedSum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  console.log("ES6 Reduced Sum  : ", reducedSum);

  let nums = [2, 4, 8];

  let squaredSum = nums.reduce((acc, eachNum) => acc + eachNum * eachNum);
  console.log("ES6 Reduced Sum  : ", squaredSum);

  let product = nums.reduce((a, b) => a * b, 50);
  console.log("ES6 Reduced product  : ", product);

  let numbers2 = [1, 2, 3, 4, 5];
  let reduceCallBack = (a, b) => a + b;
  console.log("ES6 Reduced result  : ", numbers2.reduce(reduceCallBack));
  console.log("ES6 Reduced result  : ", numbers2.reduce(reduceCallBack, 0));
  console.log("ES6 Reduced result  : ", numbers2.reduce(reduceCallBack, 25));
  console.log(
    "ES6 Reduced result  : ",
    numbers2.reduce((a, b) => a * b, 1)
  );
}

// reduceExample();

function reduceExplained() {
  let numbers = [1, 2, 3, 4];
  let sum1 = 0;
  for (let eachNum of numbers) {
    sum1 = sum1 + eachNum;
  }
  console.log("Initial Value : 0 Typical Way Result ", sum1);
  console.log("Initial Value : 0 => ES Result ",   numbers.reduce((a, b) => a + b, 0));

  let sum = 50;
  for (let eachNum of numbers) {
    sum = sum + eachNum;
  }
  console.log("Initial Value : 50 Typical Way Result ", sum);
  console.log("Initial Value : 50 => ES Result ", numbers.reduce((a, b) => a + b, 50)); 
}

reduceExplained();