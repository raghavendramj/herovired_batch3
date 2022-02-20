function arraysExample() {
  //Syntax -> Using literals
  var numbers = [5, 1, 3, 8, 2, 7];

  //new keyword
  var myArray = new Array();
  myArray[0] = 10;
  myArray[1] = 20;
  myArray[2] = 30;
  myArray[3] = 40;
  myArray[4] = 50;

  console.log("Numbers : ", numbers);
  console.log("Array : ", myArray);
  
  console.log("Length is : ", myArray.length);
}
// arraysExample();

function deleteElementsFromArray(){
    var numbers = [5, 1, 3, 8, 2, 7];
    delete numbers[4];
    console.log("Numbers : ", numbers);
}
deleteElementsFromArray();