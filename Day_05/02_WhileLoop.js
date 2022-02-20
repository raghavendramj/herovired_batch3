function whileLoop() {
  var nums = [2, 10, 1, 20, 30, 12, 4, 18, 25, 16];

  var largest = nums[0];
  var smallest = nums[0];
  //Initialization -> condition -> increment/decrement
  // for (var index = 0; index < nums.length; index++)

  //Initialization
  var index = 0;

  //Comparision
  while (index < nums.length) {
    var currentNumber = nums[index];
    if (currentNumber > largest) {
      largest = currentNumber;
    } else if (currentNumber < smallest) {
      smallest = currentNumber;
    }
    //increment/decrement
    index++;
  }
  console.log("Largest Number is : ", largest);
  console.log("Smallest Number is : ", smallest);
}

// whileLoop();

function doWhileLoop() {
  var fruits = ["Apple", "Banana", "Grapes"];

  var idx = 0;
  do {
    console.log("Fruit is : ", fruits[idx]);
    idx++;
  } while (idx < fruits.length);
}

doWhileLoop();

