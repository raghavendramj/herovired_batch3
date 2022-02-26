function varTest() {
  var num = 10;
  console.log("Outside 1 : ", num);
  {
    var num = 20;
    console.log("Inside : ", num);
  }
  console.log("Outside 2 : ", num);
}

// varTest();

function varTest2() {
  console.log("Outside 1 : ", num);
  {
    var num = 20;
    console.log("Inside : ", num);
  }
  console.log("Outside 2 : ", num);
}

// varTest2();

function letTest() {
  let num = 10;
  console.log("Outside 1 : ", num);
  {
    let num = 20;
    console.log("Inside : ", num);
  }
  console.log("Outside 2 : ", num);
}

// letTest();

function letTest2() {
  try {
    console.log("Outside 1 : ", num); //Undefined?? / Not defined?? => not defined
    {
      let num = 20;
      console.log("Inside : ", num);
    }
    console.log("Outside 2 : ", num);
  } catch (error) {
    console.log("Error thrown ", error.message);
  }
}

letTest2();
