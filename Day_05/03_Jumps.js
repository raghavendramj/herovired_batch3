function breakUsage() {
  var birds = ["Sparrow", "Piegon", "Eagle", "Peocock", "Swan"];

  var foundBird = false;
  for (var eachBird of birds) {
    console.log("Current Bird ", eachBird);
    if (eachBird === "Eagle") {
      foundBird = true;
      break;
    }
  }

  if (foundBird) {
    console.log("Bird is present in the array");
  } else {
    console.log("Eagle is not part of array");
  }
}

// breakUsage();

function continueExample() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var evenNumbers = [];
  for (var number of numbers) {
    if (number % 2 != 0) 
        continue;

    evenNumbers.push(number);
  }
  console.log("evenNumbers -> ", evenNumbers);
}

continueExample();