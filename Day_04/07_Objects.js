function objectsDemo() {
  var person = {
    firstName: "James",
    lastName: "Patt",
    age: 35,
    email: "james@gmail.com",
    getFullName: function () {
      // console.log( this.firstName + " "+ this.lastName);
      return this.firstName + " " + this.lastName;
    },
  };
  console.log(person);
}

objectsDemo();
