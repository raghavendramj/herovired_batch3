function forLoop() {
  var nums = [2, 10, 1, 20, 30, 12, 4, 18, 25, 16];

  var largest = nums[0];
  var smallest = nums[0];
  //Initialization -> condition -> increment/decrement
  for (var index = 0; index < nums.length; index++) {
    var currentNumber = nums[index];
    if (currentNumber > largest) {
      largest = currentNumber;
    } else if (currentNumber < smallest) {
      smallest = currentNumber;
    }
  }
  console.log("Largest Number is : ", largest);
  console.log("Smallest Number is : ", smallest);
}

// forLoop();

function forInExample() {
  var nums = [2, 10, 1, 20, 30, 12, 4, 18, 25, 16];
  var numsEmpty = [];

  var length = nums.length;
  var sum = 0;
  for (var index in numsEmpty) {
    console.log("Current Index : ", index, " Value : ", nums[index]);
    console.log();
    sum = sum + nums[index];
  }
  console.log("Average is : ", sum / length);
}

// forInExample();

function forInExampleForObject() {
  var person = {
    firstName: "Raghav",
    lastName: "MJ",
    email: "raghav@gmail.com",
    address: "Bangalore",
  };

  //To iterate the keys of a object, we use for in loop
  for (var prop in person) {
    var value = person[prop];
    console.log("Key : ", prop, " Value : ", value);
  }
}

// forInExampleForObject();

function forOfLoop() {
  var nums = [2, 10, 1, 20, 30, 12, 4, 18, 25, 16];
  var numsEmpty = [];

  for (var eachValue of nums) {
    console.log("Value : ", eachValue);
  }
}

// forOfLoop();

function forEachLoop() {
  var nums = [2, 10, 1, 20];

  //First Way -> passing callback function as argument
  function myArrayFuction(value, index, array) {
    console.log("Index :- ", index, " Value :- ", value, " array :- ", array);
  }
  nums.forEach(myArrayFuction);

  //Second Way -> Inline callback function
  nums.forEach(function (value, index, array) {
    console.log("Index :- ", index, " Value :- ", value, " array :- ", array);
  });
}

forEachLoop();
