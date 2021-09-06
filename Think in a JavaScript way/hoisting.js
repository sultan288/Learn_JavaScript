var LANGUAGE = 'java';
var language = 'javascript';

function getlanguage() {
    if(!language){
        var language = LANGUAGE;
    }
    return language;
}
console.log(`I love ${getlanguage()}`);


// Function Hoisting

myFunc();

function myFunc() {
    console.log(`I love bd`);
}