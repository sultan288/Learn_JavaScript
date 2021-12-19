let text1 = "HelloWorld";
const myArray = text1.split("");

let text2 = "";
for(let i = 0; i< myArray.length; i++){
    text2 = text2 + myArray[i] + "<br>"
}

console.log(text2);
document.write(text2);
