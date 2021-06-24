
//## JAVASCRIPT PROGRAM PRACTICE
//==============================================================


//##Data Type Exchange
//---------------------------------------------------------
// var num = 20;
// document.write(typeof(num));
// document.write("<br/>");

// num1 = toString(num);
// document.write(typeof(num1));
// document.write("<br/>");

// num2 = parseInt(num1);
// document.write(typeof(num2));
// document.write("<br/>");

// num3 = parseFloat(num1);
// document.write(typeof(num3));


//## String Concatenation
//---------------------------------------------------------
//document.write("Tipu" + " Sultan");

// var firstName = "Tipu";
// var lastName = " Sultan";

// var fullName = firstName + lastName;
// document.write("My Name is " + fullName);

// var fullName = "Tipu Sultan";
// document.write("my name is " + fullName + " Tanvir");

// var num1 = 20;
// var num2 = 30;
// document.write("Num1 = " +num1+ " and Num2 = " +num2 );

// var text1 = "Bangladesh";
// var text2 = " is a Country good";
//document.write(text1.concat(text2));


//## Length of a String
//----------------------------------------------------------
//  var text = "bangladesh";
//  var len = text.length;
//   document.write("number of char " + text.length);


//## Fixed and Precision function
//-----------------------------------------------------------
// var num = 2.56789;
// document.write(num.toPrecision(2));
// document.write("<br/>");
// document.write(num.toFixed(3));


//## Taka Input from User
//-----------------------------------------------------------
// var text = prompt("Enter your name: ");

// document.write("Number of Character " + text.length);


//## Index Number, LowerCase and UpperCase
//--------------------------------------------------------------
// var text = "Bangladesh";
// document.write(text.charAt(2));

// var text = "BanglaDESH";
// uc = text.toLowerCase(text);
// document.write(uc);
// var text = "Bangladesh";
// uc = text.toUpperCase(text);
// document.write(uc);

// ## Slice and Concat Function
//----------------------------------------------
// text = text1.concat(text2);
// document.write(text);

// var text1 = "Bangladesh";
// var text = text1.slice(3,5);
// document.write(text);

// var text = "Tipu";
// document.write(text);


//## Arithmetic Operator
//-------------------------------------------

// var x = 5;
// var y = 2;

// document.write(x+y);  //7
// document.write(x-y);  //3
// document.write(x*y);  //10
// document.write(x/y);  //2.5
// document.write(x%y);  //1
// document.write(x**y);  //25
// document.write("<br/>");

// var x =6;

// document.write(x++)  //6
// document.write(x);   //7

// document.write(++x);  //8
// document.write(x);    //8

// document.write("<br/>");

// document.write(x--);  //8
// document.write(x);    //7

// document.write(--x);   //6
// document.write(x);     //6

//## ASSIGNMENT OPERATOR
//---------------------------------------------

// var x = 2;
// var y = 3;
// var z = 4;
// var m = 5;
// var n = 6;
// var p = 7;

// document.write(x+=6);  //x=x+y //8
// document.write("<br/>");
// document.write(y-=1);  //1
// document.write("<br/>");
// document.write(z*=5);  //25
// document.write("<br/>");
// document.write(m/=2);  //2.5
// document.write("<br/>");
// document.write(n%=4);  //2
// document.write("<br/>");
// document.write(p**=2);  //25
// document.write("<br/>");

//## Making Calculator using Arithmetic Operator
//===============================================================

// var number1 = prompt("Enter first Number: ");
// var number2 = prompt("Enter second Number: ");

// var num1 = parseInt(number1, 10);
// var num2 = parseInt(number2, 10);

// // var num1 = 5
// // var num2 = 2;

// var add, sub, mul, div, mod, exp;

// add = num1 + num2;
// document.write( "Addition: " + num1+ " + " + num2 + " = " + add);
// document.write("<br/>");

// sub = num1 - num2;
// document.write("Subtraction = "+ num1+ " - " + num2 + " = " +sub);
// document.write("<br/>");

// mul = num1 * num2;
// document.write("Multiplication = "+ num1+ " * " + num2 + " = " +mul);
// document.write("<br/>");

// div = num1 / num2;
// document.write("Division = "+ num1+ " / " + num2 + " = " +div);
// document.write("<br/>");

// mod = num1 % num2;
// document.write("Modulus = "+ num1+ " % " + num2 + " = " +mod);
// document.write("<br/>");

// exp = num1 ** num2;
// document.write("Exponentiation = "+ num1+ " ** " + num2 + " = " +exp);
// document.write("<br/>");

//## Area if Different Shape
//------------------------------------------

// var base = parseFloat(prompt("Enter Base = "));
// var height = parseFloat(prompt("Enter Height = "));

// var area = base * height;
// document.write("Area = " +area);

//## Convert Farenheit to Celcius
//-------------------------------------------------------------

// var far = parseFloat(prompt("Enter Farenheit = "));

// var cel = (far -32) * 5/9;
// document.write("Celcius is = " +cel);

// var cel = parseFloat(prompt("Enter Celcius = "));

// var far = (cel*(9/5)) + 32;
// document.write("Farenheit = " + far);

//## Relational Operator
//---------------------------------------------------

// var num1 = 10;
// var num2 = "10";

// document.write(num1 > num2+ "<br/>");   //false
// document.write("<br/>");
// document.write(num1 >= num2);    //true
// document.write("<br/>");
// document.write(num1 < num2);    //false
// document.write("<br/>");
// document.write(num1 <= num2);   //
// document.write("<br/>");
// document.write(num1 == num2);  //check the value of both side
// document.write("<br/>");
// document.write(num1 === num2);   // check the value and data type of both side
//    document.write(num1 != num2);
//    document.write("<br/>");
//    document.write(num1 !== num2);

//## Logical Operator
//-------------------------------------------------------

// var num1 = 50;
// var num2 = 40;
// var num3 = 30;

// document.write(num1 > num2 && num1 > num3 );    //true
// document.write( num1 > num2 && num3 > num1);    //false

// document.write(num1 > num2 || num3 > num1 );    //true
// document.write(num2 > num1 || num3 > num1 );    //false

// document.write(!true);
// document.write(!(num1>num2));
// document.write(!(num3>num1));

//## CONTROL STATEMENT
//============================================================

// # Conditional Control Statement
//-------------------------------------------------------

//## Finding positive/negative (if)
//---------------------------------------------
// var num = 0;

// if(num>0){
//     document.write("Positive");
// }
// if(num<0) {
//     document.write("Negative");
// }
// if(num==0) {
//     document.write("Zero");
// }

//Even Odd Program (if else)
//----------------------------------------------

// var num1 = 6;

// if(num1%2==0) {
//     document.write("Numeber is Even");
// } else {                                 //or if(num1%!=0)
//     document.write("Number is Odd");
// }

//## Largest Number Finding(else if)
//---------------------------------------------

// var num1 = 9;
// var num2 = 6;
// var num3 = 5;

// if(num1>num2 && num1>num3) {
//     document.write("num1 is Largest " +num1);
// }
// else if(num2>num1 && num2 > num3) {
//     document.write("num2 is Largest " +num2);
// }
// else {
//     document.write("num3 is Largest "+ num3);
// }

//## Find letter grade(marks) (if)
//--------------------------------------

// var marks = prompt("Enter your number");

// if(marks > 100 || marks <0)
//     document.write("Invalid Marks");
// else if(marks>=80)                // or (marks >=80 && marks <=100)
//     document.write("A+");
// else if(marks>=70)
//     document.write("A");
// else if(marks>=60)
//     document.write("B");
// else if(marks>=50)
//     document.write("C");
// else if(marks>=40)
//     document.write("D");
// else if(marks>=33)
//     document.write("E")
// else
//     document.write("Fail");

//## Find vowel or consonant
//------------------------------------------

// var lett = prompt("Enter letter: ");

// letter = lett.toLowerCase();

// if(letter =="a" || letter =="e" || letter == "i" || letter == "o" || letter == "u")
//     document.write("Vowel");
// else
//     document.write("Consonant");

//## SWITCH
//-------------------------------------------------

//Digit Spelling

// var digit = prompt("Enter any digit");

// if(digit == 0)
//     document.write("Zero");
// else if(digit == 1)
//     document.write("One");
// else if(digit == 2)
//     document.write("two");
// else if(digit == 3)
//     document.write("three");
// else if(digit == 4)
//     document.write("fo");
// else if(digit == 5)
//     document.write("fi");
// else if(digit == 6)
//     document.write("s");
// else
//     document.write("more than 6");

//## Digit spelling(Switch,case,break,dafault)
//---------------------------------------------------------

// var digit = "3";

// switch(digit) {
//     case "0":
//         document.write("Zero");
//         break;
//     case "1":
//         document.write("one");
//         break;
//     case "2":
//         document.write("two");
//         break;
//     case "3":
//         document.write("three");
//         break;
//     case "4":
//         document.write("four");
//         break;
//     case "5":
//         document.write("five");
//         break;
//     default:
//         document.write("more than 5")
//         break;
// }

//## Find vowel or consonant using switch

// var letter = "r";
//   letter = letter.tolowerCase();

// switch(letter) {
//     case "a":
//         document.write("vowel");
//         break;
//     case "e":
//         document.write("vowel");
//         break;
//     case "i":
//         document.write("vowel");
//         break;
//     case "o":
//         document.write("vowel");
//         break;
//     case "u":
//         document.write("vowel");
//         break;
//     default:
//         document.write("Consonant");
// }

//## Shortcut Switch case

// var letter = "F";
// var let = letter.toLowerCase();

// switch(let) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         document.write("vowel");
//         break;
//     default:
//         document.write("consonant");
// }

//## CONDITIONAL CONTROL STATEMENT
//=============================================================

//## for loop (it works anti-clockwise)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// for(var x=10; x>9; x--) {
//     document.write(" " +x);
// }
// document.write("End");

// 1+2+3+4+5 =
//----------------------------------------------------

// var sum = 0;

// for (var x = 1; x <=5; x++) {
//     sum = sum + x;
// }
// document.write("sum is "+sum);
// document.write(" end");
//-----------------------------------------------------
// var m = parseInt(prompt("Enter first num "));
// var n = parseInt(prompt("Enter last num "));

// var sum = 0;
// for(var x = m; x<=n; x++){
//     sum+=x;
// }
// document.write(" Sum " +sum);
//------------------------------------------------------

// for(var x = 1; x<=5; x++) {

//     var num1 = parseInt(prompt("Enter first num "));
//     var num2 = parseInt(prompt("Enter sec num "));
//     var  sum = num1 + num2;
//     document.write("sum" +sum);
// }

// ## While loop
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var i = 1;
// while (i <=10) {
//     document.write(" "+i);
//     i++;
// }
// document.write(" end");
//-------------------------------------------

// var i = 1;
// var sum = 0;
// while( i <= 10) {
//     sum+=i;
//     i+=2;
// }
// document.write("sum "+sum);
// document.write(" end");
//--------------------------------------------

// sum of all the numbers that are divisible by 3 and 5 from 1-100

// var i = 1;
// var sum = 0;
// while(i<=100){
//     if(i%3 == 0 && i%5 == 0){
//         document.write(" "+i);
//         sum = sum +i;
//     }
//     i++;
// }
// document.write(" Sum is " +sum);
// document.write(" end");
//--------------------------------------------

//## Do while loop
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Difference between do-while and while loop and for loop
//------------------------------------------------------------
// var i = 11;
// do{                                //do-while loop first print body element then check condition
//     document.write(" " +i);
//     i++;
// } while (i<=10)

// document.write("<br/>");

// var m = 11;
// while(m<=10) {                      //while loop first check condition and then print body element and increment
//     document.write("" +m);
//     m++
// }

// document.write("<br/>");

// for(var n = 11; n<=10; n++){       //for loop first check condition then print body element then do increment
//     document.write("" +n);
// }

//## break and continue statement
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// for (var i =1; i<=100; i++){
//     if(i==10){
//         break;
//     }
//     document.write("" +i);
// }
// document.write("end")
//---------------------------------------------

// for (var i =1; i<=100; i++){
//     if(i==10){
//         continue;
//     }
//     document.write(""+i);
// }
// document.write("end");
//----------------------------------------------
//print odd number
// for(var i=1; i<=100; i++) {
//     if(i % 2==0){
//         continue;
//     }
//     document.write(" "+i);
// }

//print even number
// for(var i=1; i<=100; i++) {
//     if(i%2!=0){
//         continue;
//     }
//     document.write(""+i);
// }

//## Ternary Condition
//=============================================================
//TWO CONDITION
//----------------------------------------------
// var num = Number(prompt("Enter a number "));
// if(num>0){
//     document.write("Positive")
// } else {
//     document.write("Negative");
// }

// Ternary condition do the sam task(ABOVE) in one line
//------------------------------------------------
// var num = Number(prompt("Enter a number "));

// // var result = num >0 ? "positive" : "negative"
// // document.write("result" + result);
// or
// num >0 ? document.write("positive") : document.write("Negative");

//THREE CONDITION
//---------------------------------------------

// var num = Number(prompt("Enter a num "));
// var result = num>0 ? "positive" : num<0 ? "negative": "zero";
// document.write("result " +result);

//One line in three condition
// num>0 ? document.write("positive") : num<0 ? document.write("negative") : document.write("zero");

//## FUNCTION
//=====================================================================

// var num = 5;
// var result = num + num;
// document.while("Result =" +result + "<br/>");

//creating a function
// function square() {
//     var num = 5;
//     var result = num * num;
//     document.write("Result =" +result + "<br/>");
// }
// //function call
// square();
// square();
// square();

//Parameter Pass in function
//-----------------------------------------------
// function square(num) {
//     var result = num * num;
//     document.write("Result =" +result + "<br/>");
// }
// square(7);
//-------------------------------------------------
// function square(num1,num2) {
//     var result = num1 * num2;
//     document.write("Result =" +result + "<br/>");
// }
// square(5,6);
//--------------------------------------------------

// Value Return in function
//-----------------------------------------
// function square(num1,num2){
//     var result = num1 * num2;
//     return result;
// }
// document.write(square(5,8));
//-----------------------------------------
// function square(num1,num2){
//     var result = num1 * num2;
//     return result;
// }
// var x = square(3,4);
// document.write(x);
//----------------------------------------------

//Calculator function
//==================================================================
// function sum(x,y) {
//     var sum = x + y;
//     return sum;
// }
//
// function sub(x,y) {
//     var sub = x - y;
//     return sub;
// }
//
// function mul(x,y){
//     var mul = x*y;
//     return mul;
// }
//
// function div(x,y) {
//     var div = x/y;
//     return div;
// }
//
// function mod(x,y) {
//     var mod = x%y;
//     return mod;
// }
//
// function exp(x,y) {
//     var exp = x**y;
//     return exp;
// }
//
// var num = prompt("Enter a number from below: 1 = add, 2 = sub, 3 = mul, 4 = div, 5 = mod, 6 = exp")
// var x = Number(prompt("Enter first number"));
// var y = Number(prompt("Enter second number"));
// switch (num) {
//     case "1":
//         document.write("ADD = "+sum(x,y));
//         break;
//     case "2":
//         document.write("SUB = "+sub(x,y));
//         break;
//     case "3":
//         document.write("MUL = "+mul(x,y));
//         break;
//     case "4":
//         document.write("DIV = "+div(x,y));
//         break;
//     case "5":
//         document.write("MOD = "+mod(x,y));
//         break;
//     case "6":
//         document.write("EXP = "+exp(x,y));
//         break;
//     default:
//         document.write("Invalid Input");
// }

//## ARRAY- collection of variables
//sample task
// var name1, name2, name3, name4, name5;
// name1 = "anis";
// name2 = "abul";
// name3 = "hafi";
// name4 = "mofiz";
// name5 = "sofi";

//Array declaration

// var names = new Array(5);
// names[0] = "anis";
// names[1] = "abul";
// names[2] = "hafi";
// names[3] = "mofiz";
// names[4] = "sofi";
// // document.write(names[1]);
// // document.write(names[3]);
// // document.write(names[7]);
//
// //At a time all print and length
// document.write(names);
// console.log(names);
//------------------------------------------
// var names = new Array();
// names[0] = "anis";
// names[1] = "abul";
// names[2] = "hafi";
// names[3] = "mofiz";
// document.write(names);
// document.write(names.length);
// //----------------------------------------------

//## Another array declaration(that we used in task)

// var names = ["anis", "lima", "rani", "raju", "moni"]
// document.write(names);
// document.write(names.length);
//
// document.write("<br/>");
// //Push function- for adding value in array
// names.push("Tipu");
// names.push("Dipu");
// document.write(names);
// document.write(names.length);
//
// ///Pop function - for remove a value in array
// document.write("<br/>");
//
// names.pop();
// document.write(names);
// names.pop();
// document.write(names);
// names.pop();
// document.write(names);

//## Concatenation function in array
//---------------------------------------------------------
// var country1 = ["Bangladesh", "India"];
// var country2 = ["Pakistan", "Nepal"];
//
// var country = country1.concat(country2);
// document.write(country);
// document.write(country.length);

//## Loop in array
//-------------------------------------------
//previous method
// var num = [10, 20, 30, 40, 50];
// document.write(num[0]);
// document.write(num[1]);
// document.write(num[2]);
// document.write(num[3]);
// document.write(num[4]);

// Using loop in array
//---------------------------------------
// var num = [10, 20, 30, 40, 50, 60];
// var sum = 0;
//
// for(var i =0; i<6; i++) {
//     document.write(num[i]);
//     document.write("<br/>");
//     sum = sum + num[i];
// }
// document.write("sum= "+sum);

// document.write(num[0]);
// document.write(num[1]);
// document.write(num[2]);
// document.write(num[3]);
// document.write(num[4]);
// document.write(num[5]);

//## From user input and sum the array
//-----------------------------------------------------------
// var num = new Array();
// for(var i=0; i<5; i++){
//     num[i] = Number(prompt("Enter array number = "));
// }
// var sum = 0;
// for( var i=0; i<5; i++){
//     document.write(num[i]);
//     sum = sum + num[i];
// }
// document.write("sum ="+sum);
//---------------------------------------------------
//## Array Related methods
// Shift and unshift method

// var names = ["anis", "roni", "raju"];
// document.write(names);
// //shift is opposite of pop(pop remove from first)
// document.write("<br/>");
// names.shift();
// document.write(names);
// //unshift is opposite of push(push add in first array)
// document.write("<br/>");
// names.unshift("sagor");
// document.write(names)
//----------------------------------------------------------------
//##Splice method in array(add or remove data in specific position in array, 1 or more)

// var names = ["anis", "roni", "raju","jony"];
// document.write(names);
// document.write("<br/>");
//
// //add rahim and mahim, from 2nd position
// names.splice(2,0,"Karim","Mahim");
// document.write(names);
//
// document.write("<br/>");
// names.splice(0,1,"Kasu","Morol");
// document.write(names);
//
// document.write("<br/>");
// names.splice(2,2,"kusal","Hasib");
// document.write(names);
// // first postition, index indicator and 2nd position, index remove counter;
// document.write("<br/>");
// names.splice(4,2);
// document.write(names);    //original array
//
// document.write("<br/>");
// //slice(1)-remove element from first index
// var newArray = names.slice(2);
// document.write(newArray);
//
// //slice create new array but does not change original array
// document.write("<br/>");
// document.write(names); //original array

//## Sort method in Array(Arrange array in alphabet)
//----------------------------------------------------
//forward sorted in array
// var names = ["anis", "roni", "baju","jony","hasu"];
// var sortNames = names.sort();
// document.write(sortNames+"<br/>");
//------------------------------------------------------
// //Reverse sorted in array
// var names = ["anis", "roni", "baju","jony","hasu"];
// var sortNames = names.sort();
// names.reverse();
// document.write(sortNames);
//---------------------------------------------------------
//## Sort in number(number does not support sort method
// var num = [7, 4, 9, 8];
// num.sort();
// document.write(num);
//------------------------------------------------------------------
//## number sorted using function
// var num = [5,8,9,3,24,12];
// num.sort(function (a,b){
//     return a-b;
// });
// document.write(num);
// //Reverse sorting of number
// var num = [5,8,9,3,24,12];
// num.sort(function (a,b){
//     return b-a;
// });
// document.write(num);

//## Object in JavaScript
//=============================================================

//student details
// var name = "Tipu Sultan";
// var age = 27;
// var cgpa = 3.22;
// var lang = ["bangla", "hindi", "english"]
// document.write(name);
//----------------------------------------------------
//Object creation and print the object value(single object)
// var student1 = {
//      name: "Tipu Sultan",
//      age: 27,
//      cgpa: 3.22,
//      lang: ["bangla", "hindi", "english"]
// }
// document.write(student1.name);
//-----------------------------------------------------------------
// var student2 = {
//     name: "Dipu SUltan",
//     age: 18,
//     cgpa: 3.4,
//     lang: ["bangla", "hindi", "english"]
// }
//---------------------------------------------------------------------
// var student3 = {
//     name: "Opu SUltan",
//     age: 34,
//     cgpa: 3.1,
//     lang: ["bangla", "hindi", "english"]
// }
//##For doing this task many times we create a property template and for this we need constructor
//===================================================================================
// Constructor- a special type of function used to create template (for creating multiple object)
//constructor starts with capital letter after function

// function Student(name, age, cgpa, lang) {   //this constructor can receive this four element
//     this.name = name;                       //
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
// }
// var student1 = new Student("Tipu Sultan",27,3.22,["bengali", "hindi", "english"]);
// var student2 = new Student("Dipu Sultan", 18, 3.4, ["bengali", "hindi", "english"])
// var student3 = new Student("Opu Sultan", 28, 3.1, ["bengali", "hindi", "english"])
//
// document.write(student1.name);
// document.write(student1.age);
// document.write(student1.cgpa);
// document.write(student1.lang);
// document.write("<br/>");
//
//
// document.write(student2.name);
// document.write(student2.age);
// document.write(student2.cgpa);
// document.write(student2.lang);
// document.write("<br/>");
//
// document.write(student3.name);
// document.write(student3.age);
// document.write(student3.cgpa);
// document.write(student3.lang);
// document.write("<br/>");


//## Adding Function inside a constructor
//----------------------------------------------------------------

// function Student(name, age, cgpa, lang) {   //this constructor can receive this four element
//     this.name = name;                       //
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
//
//     this.display = function (){
//         document.write(this.name);
//         document.write(this.age);
//         document.write(this.cgpa);
//         document.write(this.lang);
//     }
// }
// var student1 = new Student("Tipu Sultan",27,3.22,["bengali", "hindi", "english"]);
// var student2 = new Student("Dipu Sultan", 18, 3.4, ["bengali", "hindi", "english"])
// var student3 = new Student("Opu Sultan", 28, 3.1, ["bengali", "hindi", "english"])
//
// student1.display();             document.write("<br/>");
// student2.display();             document.write("<br/>");
// student3.display();             document.write("<br/>");

///$$$ We learnt
// How to create an object
// how to print the value of an object
// adding a constructor function
// adding a function inside a constructor