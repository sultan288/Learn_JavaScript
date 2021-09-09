// function Person(name, age) {
//     this.name = name;
//     this.age = age;
    
//     this.eat = function () {
//         console.log(`${this.name} is eating`);
//     }
// }

// const sakib = new Person ("Sakib", 36);
// console.log(sakib);
// const Miraj = new Person ("Miraj", 26);
// console.log(Miraj);
// Miraj.eat();

// ==========================================================================

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype = {
//     eat: function () {
//         console.log(`${this.name} is eating`);
//     },
// };

// const sakib = new Person ("Sakib", 36);
// console.log(sakib);
// const Miraj = new Person ("Miraj", 26);
// console.log(Miraj);
// Miraj.eat();

// ======================================================

// var f = function Person () {}

// console.dir(f);  // this is for describing master object

//====================================================

// Now create a object of my name in the master object
// It is also the example of prototype chain

// var f = function Person() {}

//     Object.prototype.tipu = function() {
//         console.log("I am Tipu Sultan");
//     };

// var p = {};

// p.tipu();

// =====================================================

// function Person(name, age) {  //Parent class
//     this.name = name;
//     this.age = age;
//     // this.type = type;
// }

// function Cricketer(name, age, type, country) {  // Parent er subClass
//     Person.call(this);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }

// Person.prototype = {
//     eat: function () {
//         console.log(`${this.name} is eating`)
//     }
// }

// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;

// Cricketer.prototype.play = function() {
//     console.log(`${this.name} is playing`)
// }

// let Miraj = new Person("MIraj", 34);
// console.log(Miraj.age);
// // console.log(Miraj.type);

// let sakib = new Cricketer("sakib", 36, "All rounder", "Bangladesh");

// console.log(sakib.type);
// console.log(sakib.country);
// sakib.eat();
// sakib.play();

// Now conversion of above prototype inheritance to Class
// =========================================================

// class Person {          // parent class
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// class Cricketer extends Person {        // sub class
//     constructor(name, age, type, country) {
//         super(name, age);
//         this.name = name;      // property
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }

//     play() {       //method of class
//         console.log(`${this.name} is playing`);
//     }
// }

// const Miraj = new Person("Miraj", 26);
// console.log(Miraj.age);
// Miraj.eat();

// const Sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh");
// console.log(Sakib.type);
// Sakib.play();

// console.log(Miraj.type);   // this is undefined because Miraj is created by parent class

// Getter and Setter in JS Class
// ==========================================

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get setName() {     // getter
//         return "Tipu";
//     }

//     set setName(name) {     // setter
//         this.name = name;
//     }

//     static isEqualAge(player1, player2) {
//         return player1.age === player2.age;
//         // return this.name;   => here this means Person 
//     }
//     // static method does not know this(obj) because it refer this as Person so this.name means Person 
// }

// let Sakib = new Person("Sakib", 35);
// let Mush = new Person("Mush", 36);
// // console.log(Sakib.setName);    // getter call
// // console.log(Sakib.setName);

// Sakib.setName = "Tamim";      // setter set the name as Tamim

// // console.log(Sakib.name);      // setter call

// console.log(Person.isEqualAge(Sakib, Mush));

// Polymorphism Class Concept
// ======================================================

class Person {          // parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}

class Cricketer extends Person {        // sub class
    constructor(name, age, type, country) {
        super(name, age);
        this.name = name;      // property
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play() {       //method of class
        super.play();
        console.log(`${this.name} is playing cricket`);
    }
}

const Miraj = new Person("Miraj", 26);
console.log(Miraj.play);
Miraj.play();

const Sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh");
console.log(Sakib.play);
Sakib.play();
