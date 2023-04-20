// 8. Adding a Method to a Prototype.
// Create a prototype object called Student with a property name. Add a method called printDetails to the
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the
// name "Mithun" and call the printDetails method.


// Prototype 
function Student(){
    this.name;
}

// Method
Student.prototype.printDetails = function(){
    console.log(`Hello, my name is ${this.name}`);
}

// Instantiation 
let mithun = new Student();
mithun.name = "Yaswant";

// Calling the Method
mithun.printDetails(); 