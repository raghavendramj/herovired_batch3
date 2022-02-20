function insertAndRemoveElementsFromEnd() {
  var names = ["Balraj", "Ajay", "Ambika", "Rashmi", "Prashanth"];
  console.log("names ", names);

  names.push("Sachin");
  names.push("Suprabha");
  console.log("*********************After insertion ******************* ");
  console.log(names);

  names.pop();

  console.log("*********************After deletion ******************* ");
  console.log(names);
}
// insertAndRemoveElementsFromEnd();

function insertAndRemoveElementsFromBeginning() {
  var names = ["Balraj", "Ajay", "Ambika", "Rashmi", "Prashanth"];
  console.log("names ", names);

  names.unshift("Sachin");
  names.unshift("Thilak");
  console.log("*********************After insertion ******************* ");
  console.log(names);

  names.shift();

  console.log("*********************After deletion ******************* ");
  console.log(names);
}
// insertAndRemoveElementsFromBeginning();

function joinMethod() {
  var nums1 = ["Balraj", "Ajay", "Ambika"];
  console.log(nums1.join(", "));
}

// joinMethod();

function mergeTwoArrays() {
  var fruits = ["Apple", "Banana", "Grapes"];
  var veggies = ["Tomato", "Beetroot", "Beans"];
  var fruitsVeggies = fruits.concat(veggies);
  console.log("fruitsVeggies -> ", fruitsVeggies);
}

// mergeTwoArrays();

function spliceExample() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Kerala"];
  console.log("Before SPLICE ADD CASE :: Cities ", cities);

  //1 -> Positiion from where new elements needs to be added/removed
  //2 -> How many elements needs to removed from previously mentioned pos (1st Argument)
  //3 and.... -> These are the new elements that will added to the array from previously mentioned pos (1st Argument)

  //Adding new elements to the array.
  cities.splice(1, 0, "Delhi", "Goa");
  console.log("After SPLICE ADD CASE :: Cities ", cities);
 
  //Only removal
  var cities = ["Bangalore", "Mysore", "Chennai", "Kerala"];
  console.log("Before SPLICE DELETE CASE :: Cities ", cities);
  cities.splice(2, 2);
  console.log("After SPLICE DELETE CASE :: Cities ", cities);    

  var cities = ["Bangalore", "Mysore", "Chennai", "Kerala"];
  console.log("Before SPLICE ADD and REMOVE CASE :: Cities ", cities);

  //Remove and add /Replace case
  var cities = ["Bangalore", "Mysore", "Chennai", "Kerala"];
  console.log("Before SPLICE ADD and REMOVE CASE :: Cities ", cities);
  cities.splice(0, 1, "Gujurat", "MP");
  console.log("After SPLICE ADD and REMOVE :: Cities ", cities);  

  //Removes all the elements from the given index to end of the array
  var cities = ["Bangalore", "Mysore", "Chennai", "Kerala"];
  cities.splice(2);
}

function sliceMethod(){
  var cities = ["Bangalore", "Mysore", "Chennai", "Kerala"];
  var result = cities.slice(0, 3);
  console.log("ORIGINAL Cities is : ", cities);
  console.log("RESULT Cities is : ", result);
}


function otherMethods(){	
	var fruits = ["Apple", "oranges", "Bananas", "Mangoes", "oranges", "Bananas", "Mangoes"]; 
	
	console.log("indexOf of  Mangoes", fruits.indexOf("Mangoes");)
	console.log("lastIndexOf of  Mangoes", fruits.lastIndexOf("Mangoes");)
	var nums = [2, 10, 1, 20];
	nums.sort()
}