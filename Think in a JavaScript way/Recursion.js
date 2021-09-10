// Recursiom on JS
// =======================================
// Which function call himself inside his function

// f(n-1) + n = f(n)

// 1+2+3+.....+n
// using for loop

total = 0;
var n = 3;

for(var i = 1; i<=n; i++) {
    total += i;
}
console.log(total); 

// using Recursion function

// function sum(n) {
//     if(n===0) {
//         return 0;
//     } else {
//         return sum(n-1) + n;
//     }
// }

// console.log(sum(3));

// using mathematical term
// =========================================================

var n = 10000;

console.log((n * (n+1)) / 2);