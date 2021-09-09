// // example 1: without higher order function

// var numbers = [1, 2, 3];

// var result = [];

// for (let i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2);
// }

// console.log(result);

// // With higher order function

// var numbers = [1, 2, 3, 4];

// var result = numbers.map(function(item){
//     return item * 2;
// });

// console.log(result);

// Converted to arrow function
// =======================================================

// var numbers = [1, 2, 3, 4];

// var result = numbers.map(item => item * 2 );

// console.log(result);

//Example 2: without higher order function
// ===================================================

// var players = [
//     {
//         name: 'Sakib',
//         avg: 38.23
//     },
//     {
//         name: 'Tamim',
//         avg: 36.74
//     },
//     {
//         name: 'Mushfiq',
//         avg: 36.78
//     },
//     {
//         name: 'Miraj',
//         avg: 37.12
//     }
// ];

// var playerWithAvg37 = [];

// for(let i = 0; i<players.length; i++){
//     if(players[i].avg >= 37) {
//         playerWithAvg37.push(players[i]);
//     }
// }
// console.log(playerWithAvg37);

// Conversion to HOC
// =====================================================

// var playerWithAvg37 = players.filter((player) => player.avg >= 37);

// console.log(playerWithAvg37);

// Example 3: array.map() build in by me
// ================================================

// const language = ["JavaScript", "Python", "PHP", "C"];

// function mapTipu(arr, fn) {
//     const newArray = [];

//     for(let i = 0; i < arr.length; i++) {
//         newArray.push(fn(arr[i]));
//     }
//     return newArray
// }

// const myArray = mapTipu(language, function(language) {
//     return language.length;
// });

// console.log(myArray);

// var s = "javascriptloops";
// console.log(s);

function vowelsAndConsonants(s) {
    var s = ""
    console.log(s);
    var vowel = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    result1 = "";
    result2 = "";
    console.log(vowel.length);
        for (let i = 0; i < s.length; i++) {
        if(vowel.includes(s[i])){
            result1 = result1 + "\n"+ s[i];
            console.log(result1);
        }
        if(!vowel.includes(s[i])){
            result2 = result2 + "\n" + s[i];
        }
    }
    console.log(result1.concat(result2));
}

vowelsAndConsonants(javascriptloops);
