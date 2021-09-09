//Solution: 2

let secondInteger = parseInt('');
//let d = '';
let secondDecimal = parseFloat('');
//let s = '';
let secondString = toString('');
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    console.log(firstInteger+(+secondInteger)); 
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    console.log(firstDecimal+(+secondDecimal));
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    
}


// Day 1: Functions

Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer,
. It must return the value of (i.e.,

factorial).

Input Format

Locked stub code in the editor reads a single integer,

, from stdin and passes it to a function named factorial.

Constraints

Output Format

The function must return the value of

.

Sample Input 0

4

Sample Output 0

24

Explanation 0

We return the value of 4!= 4*3*2*1 = 24

// Solution

function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}
