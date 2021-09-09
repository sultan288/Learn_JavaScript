// Implicit Binding in JS
// ==================================================

// var printPlayerNameFunction = function (obj) {
//     obj.printPlayerName = function () {
//         console.log(this.name);
//     }
// }

// var sakib = {
//     name: "sakib",
//     age: 35,
// };

// var tamim = {
//     name: "tamim",
//     age: 35,
// };

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();

// ============================================================
// ANother Example

// var Person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function() {
//             console.log(this.name);
//         },
//         father: {
//             name: "Mr x",
//             printfName: function() {
//                 console.log(this.name);
//             },
//         },
//     };
// };

// var sakib = Person("Sakib", 35);
// sakib.printName();

// sakib.father.printfName();

// Explicit binding
// =============================================================
// call()

// var printName = function(v1, v2, v3) {   // method in global scope
//     console.log(`${this.name} is ${v1}, ${v3} & ${v3}`);
// };

// var sakib = {           // this is an object
//     name: "sakib",
//     age: 35
// };

// var v1 = "handsome";
// var v2 = "All rounder";
// var v3 = "Best Player";

// printName.call(sakib, v1, v2, v3);         // obj call
    // call method will receive one by one

// Explicit binding
// =============================================================
// apply()

// var printName = function(v1, v2, v3) {   // method in global scope
//     console.log(`${this.name} is ${v1}, ${v3} & ${v3}`);
// };

// var sakib = {           // this is an object
//     name: "sakib",
//     age: 35
// };

// var v1 = "handsome";
// var v2 = "All rounder";
// var v3 = "Best Player";

// var v = [v1, v2, v3];

// printName.apply(sakib, v);         // obj call
//         // apply can receive all var as an array


// Explicit binding
// =============================================================
// bind()

// var printName = function(v1, v2, v3) {   // method in global scope
//     console.log(`${this.name} is ${v1}, ${v3} & ${v3}`);
// };

// var sakib = {           // this is an object
//     name: "sakib",
//     age: 35
// };

// var v1 = "handsome";
// var v2 = "All rounder";
// var v3 = "Best Player";

// var newFunc = printName.bind(sakib, v1, v2, v3);       // obj call        
// newFunc();

// new binding
// =====================================================

// function Person (name, age) {   // constructor fn
//     // let this = Object.create(null);
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name} is ${this.age} years old`)
//     // return this;
// }

// var sakib = new Person("sakib", 35);

// Window binding
// ==================================================

// var PrintName = function() {
//     console.log(this.name);    //undefined
//     console.log(this);
//     console.log(window === this);
// };

// var sakib = {
//     name: "sakib",
// };

// PrintName();


