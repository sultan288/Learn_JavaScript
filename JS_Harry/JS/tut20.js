console.log("This is tut 20");

let impArray = ['alu', 'piaz', 'begun', 'kopi'];

// To set item in local storage
localStorage.setItem('Name', "Tipu");
localStorage.setItem("Name2", "Dipu");

// localStorage.setItem('Sabji', impArray);

// Convert to JSON Array
localStorage.setItem('Sabji', JSON.stringify(impArray));

// To clear all item from local storage
// localStorage.clear();

// To clear a particular item from local storage
localStorage.removeItem('Name');

// To get item from local storage
let name = localStorage.getItem("Name");
let name2 = localStorage.getItem("Name2");

let name3 = JSON.parse(localStorage.getItem('Sabji'));

// print in console
console.log(name);
console.log(name2);
console.log(name3);

