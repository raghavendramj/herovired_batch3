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

function insertAndRemoveElementsFromBeginning(){
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
insertAndRemoveElementsFromBeginning();