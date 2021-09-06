// const personMethods = {
//     eat() {
//         console.log(`person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`person is playing`);
//     },
// };

// function Person(name, age){
//     let person = {};

//     person.name = name;
//     person.age = age;

    // person.eat = function () {
    //     console.log(`person is eating`);
    // };

    // person.sleep = function () {
    //     console.log(`person is sleeping`);
    // };

//     person.eat = personMethods.eat;
//     person.sleep = personMethods.sleep;
//     person.play = personMethods.play;

//     return person;
// }

// const sakib = Person("sakib", 35);
// const tamim = Person("tamim", 40);

// console.log(sakib);
// console.log(tamim);


// const captain = {
//     name: "Mashrafi",
//     age: 36,
//     country: "Bangladesh",
// };

// const player = Object.create(captain);

// console.log(player.name);

// ======================================================

// const personMethods = {
//     eat() {
//         console.log(`person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`person is playing`);
//     },
// };

// function Person (name, age) {
//     let person = Object.create(personMethods);

//     person.name = name;
//     person.age = age;

//     return person;
// }

// const Mushfiq = Person("mushfik", 35);
// const Tamim = Person("Tamim", 35);
// Tamim.play();

//======================================================
// This is prototype example
// ----------------------------------------------------------------

// function Person (name, age) {
//     let person = Object.create(Person.prototype);

//     person.name = name;
//     person.age = age;

//     return person;
// }

// Person.prototype = {
//     eat() {
//         console.log(`person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`person is playing`);
//     },
// };

// const tamim = Person ("tamim", 36);
// tamim.play();

// Now the use of this keyword
// =======================================================

// function PersonWithNew (name, age) {
//     // let person = Object.create(PersonWithNew.prototype);

//     this.name = name;
//     this.age = age;
//     this.contact = "555";

//     return this;
// }

// PersonWithNew.prototype = {
//     eat() {
//         console.log(`person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`person is playing`);
//     },
// };

// const Miraj = new PersonWithNew ("Miraj", 26);
// Miraj.play();
// console.log(Miraj);
// Miraj.sleep();

// Now Conversion to JS Class of above Person function
// =========================================================

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         console.log(`person is eating`);
//     }
//     sleep() {
//         console.log(`Person is sleeping`);
//     }
//     play() {
//         console.log(`person is playing`);
//     }
// }

// const Miraj = new Person ("Miraj", 26);
// Miraj.play();
// console.log(Miraj);
// Miraj.sleep();


// Array().prototype example
// ==================================================

// let persons = [];  equivalent to let persons = new Array();

let persons = new Array();

console.log(Array.prototype);

// The persons get all the methods and property from Array.prototype.

