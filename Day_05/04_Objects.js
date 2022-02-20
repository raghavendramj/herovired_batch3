function objectDemo() {
  //Property -> name : value => named values
  //value -> primitive types, object, functions
  //Property -> name : function(){} => named functions
  var obj = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isEmployed: true,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  console.log(obj);
}

// objectDemo();

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("This is draw function with radius : ", radius);
  };
}

function waysToCreateObject() {
  //1. -> Object Literal
  var firstObj = {
    color: "blue",
  };

  //2. -> Using new keyword
  var secondObj = new Object();
  secondObj.name = "Using Object";

  //3. -> Using new keyword + Constructor function
  var circle = new Circle(10);

  console.log("First Object ", firstObj);
  console.log("Second Object ", secondObj);
  console.log("Third Object ", circle);
}

// waysToCreateObject();

function accessObjectProps() {
  var car = {
    company: "Toyota",
    model: "Innova",
    make: 2015,
    getCarInfo: function () {
      return this.company + " " + this.model + " " + this.make;
    },
  };
  console.log("Company Name : ", car.company);
  console.log("Company model : ", car["model"]);
  var registeredYear = "make";
  console.log("Company make : ", car[registeredYear]);
}

// accessObjectProps();

function modifyObjectProps() {
  var car = {
    company: "Toyota",
    model: "Innova",
    make: 2015,
    getCarInfo: function () {
      return this.company + " " + this.model + " " + this.make;
    },
  };

  car.engineCapaity = "2.5L";
  console.log("After adding engineCapaity prop", car);

  delete car.company;
  console.log("After deleting company prop", car);
}

// modifyObjectProps();

function getProps() {
  var shape = {
    name: "rectangle",
    length: 10,
    breadth: 8,
    get area() {
      return this.length * this.breadth;
    },
  };
  console.log("Shape object is : ", shape);
  console.log("Shape's Area is : ", shape.area);
}

function getAndSetProps() {
  var shape = {
    name: "rectangle",
    length: "",
    breadth: 10,

    set _length(customLength) {
      if (customLength <= 0) {
        console.log("Pass only positive integers");
        return;
      }
      this.length = customLength;
    },

    get area() {
      return this.length * this.breadth;
    },
  };

  //Setter for the length
  shape._length = 12;
  console.log("Shape object is : ", shape);

  //Getter for the area
  console.log("Shape's Area is : ", shape.area);
}

getAndSetProps();
