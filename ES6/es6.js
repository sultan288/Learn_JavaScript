const demo = document.getElementById("demo1");
// This is a function constructor
function myFunction(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;    
}

// This creates a new object
const myObj = new myFunction("Tipu", "Sultan");

// Call the function
demo.innerHTML = myObj.firstName;
demo.innerHTML = myObj.lastName;