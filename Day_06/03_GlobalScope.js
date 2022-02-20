//Global Scope -> attached to window object
var a = 10;
var b = 20;
function addNumbers(x, y){
    //Local Scope
    var c = 20;
    var d = 30;

    console.log("C ", c);
    console.log("D ", d);

    var result = x + y;
    console.log("Result : ", result);   
    console.log()
}