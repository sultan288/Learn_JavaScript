const demo = document.getElementById("demo1");
// This is a function constructor
//=============================================
// class myFunction {
//     constructor(arg1, arg2) {
//         this.firstName = arg1;
//         this.lastName = arg2;
//     }
// }

// This creates a new object
// const myObj = new myFunction("Tipu", "Sultan");

// Call the function
// demo.innerHTML = myObj.firstName;
// demo.innerHTML = myObj.lastName;

// The call() method with arguments
//===============================================
// const person = {
//     fullName: function(city, country){
//     return this.firstName+ " " + this.lastName + " ," + city + " ," + country;
//     }
// }

// const person1 = {
//     firstName: "Tipu",
//     lastName: "Sultan"
// }
// const person2 = {
//     FirstName: "Dipu",
//     lastName: "Sultan"
// }

// // call the fullName method
// demo.innerHTML = person.fullName.call(person1, "Dhaka", "Bangladesh");

// Math.max
//================================================
// const farray = [1, 3, 6, 8, 10, 99, 76, 5, 102, 66, 798]
// demo.innerHTML = Math.max.apply(null, farray); 


// JS Promise
//==========================================================

// display = (some) => {
//     demo.innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject){

//     // Producing code
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', "demo.html");
//     xhr.onload = function(){
//         if(xhr.status == 200){
//             myResolve(xhr.response);
//         } else {
//             myReject("File not found");
//         }
//     };
//     xhr.send();
// });

// // Consuming code
// myPromise.then(
//     function(value){display(value);},
//     function(error){display(error);}
// );


// JS async/await function
//===================================================

// async function Display(){     // makes a function to return a promise
//     let myPromise = new Promise(function(resolve){
//         let req = new XMLHttpRequest();
//         req.open('GET', "demo.html");
//         req.onload(function(){
//             if(req.status == 200){
//                 resolve(req.response);
//             } else {
//                 resolve("File not found");
//             }
//         });
//         req.send();
//     });
//     demo.innerHTML = await myPromise;   // makes a function to wait for a promise
// }


// JS Fetch APi
//===================================================
getFile("demo.html")

async function getFile(file){
    let x = await fetch(file);
    let y = await x.text();
    demo.innerHTML = y;
}
