
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

//## Math Object
//==========================================================================

// var num1 = Number(prompt("Enter f n: "));
// var num2 = Number(prompt("Enter s n: "));
//@@MAXIMUM
// var maximum = Math.max(num1,num2);
// document.write(maximum);
// //
// var num1 = parseInt(prompt("Enter f n: "));
// var num2 = parseInt(prompt("Enter s n: "));
//@@MINIMUM
// var maximum = Math.max(num1,num2);
// document.write(maximum);
//
// var minimun = Math.min(num1,num2);
// document.write(minimun);
//---------------------------------------------------------------------
//@@SQRT

// var num = Number(prompt("Enter a number: "));
// var num2 = Number(prompt("Enter a number2: "));
//
// var power = Math.pow(num, num2);       //2pow4 =16
// document.write(power+" pow <br/>");
//--------------------------------------------------------
// var num = Number(prompt("Enter a number: "));
//
// var squareRoot = Math.sqrt(num);    //25=5
// document.write(squareRoot+" sqrt <br/>");
//
// var absolute = Math.abs(num);       //-5=5 ; take the absolute value
// document.write(absolute+" abs <br/>");
//
// var sinValue = Math.sin(num);        //2= 0.90929...........
// document.write(sinValue +" sin <br/>");
//
// var floor = Math.floor(num);            //2.4 = 2, 2.8 =4; take the lower integer
// document.write(floor+" floor <br/>");
//
// var ceil = Math.ceil(num);              // 2.1= 3; 2.8 = 3; take the higher integer
// document.write(ceil+" ceil <br/>");
//
// var round = Math.round(num);            // 3.4 = 3; 3.5= 4; 3.8= 4;  take the round integer
// document.write(round+" round <br/>");
//
// var random = Math.random(num);          //take random number from 0-1, but not 1, less than 1;
// document.write(random+" random <br/>");
//-----------------------------------------------------------------

//## More random method usage
//>> random number Math.random() * 6 always generate 0 to max 5;
// var random = (Math.floor(Math.random() * 6 ));               //for random value from 0-5;
// document.write("random 1-5: " +random +"<br/>");
//
// var random2  = Math.floor(Math.random()*11 + 10);      //for random value from 10-20, so Math.random()*11= 0 to 10; +10 =max 20
// document.write("random 10-20: " +random2 +"<br/>");
//---------------------------------------------------------------------------

//## Making a Guess game using random method
//==================================================================
//Guessing game
//Guess a number from 1 to 5
//Generate a random number between 1 to 5
//If the guess number matches random number, then show message won else lost
//Run the game for 5 times
//show the number of wons and losts

// var numOfWon = 0;
// var numOfLost = 0;
//
// for(var i=1; i<=5; i++) {
//
//     var guessNum = parseInt(prompt("Enter a number from 1 to 5:  "));
//
//     var randomNum = Math.floor(Math.random() * 5);
//
//     if (guessNum == randomNum) {
//         document.write("You have won");
//         numOfWon++;
//     } else {
//         document.write("You have lost");
//         numOfLost++;                                   document.write("<br/>");
//     }
// }
// document.write("Num of won = "+ numOfWon+ "<br/>");
// document.write("Num of lost = "+ numOfLost+ "<br/>");

// ## Date Object
//===================================================================

// var date = new Date();
// document.write(date);
//
// var year = date.getFullYear();
// document.write(year);              document.write("<br/>")

// var month = date.getMonth();
// document.write(month);                  document.write("<br/>")
//
// var currentDate = date.getDate();
// document.write(currentDate);            document.write("<br/>")
//
// var currentDay = date.getDay();
// document.write(currentDay);                 document.write("<br/>")
//
// var currentMinutes = date.getMinutes();
// document.write(currentMinutes);           document.write("<br/>")

//## Introduction to DOM- select html elements
//==================================================================================

//getElementById
//---------------------------------------------------------------

// var myHeading = document.getElementById("heading1");
// myHeading.innerHTML = "Hello";
//
// document.getElementById("heading2").innerHTML = "GoodBye";
//
// var myPara = document.getElementById("para");
// myPara.innerHTML = "Bye";

//getElementsByTagName
//------------------------------------------------------------------------

// document.getElementsByTagName("h1")[0].innerHTML = "Replaced by tag name1";    //must include the index number [0] [1]
// document.getElementsByTagName("h1")[1].innerHTML = "Replaced by tag name2";

//getElementsByClassName
//--------------------------------------------------------------------------

// document.getElementsByClassName("heading1")[0].innerHTML = "Replace by class name .heading"; //must include the index number [0] [1]
// document.getElementsByClassName("heading1")[1].innerHTML = "Replace by class name .heading2";
//
// document.getElementsByClassName("para1")[0].innerHTML = "Replaced by class name .para";

// querySelector
//===========================================================================

//document.getElementById("para1").innerHTML = "Hello";    //this is getElementById

// @@ for id must include #id and for class include .class
// document.querySelector("#para1").innerHTML = "This is query by id";
// document.querySelector(".para2").innerHTML = "This is query2 by cls";

// TagName replaced by querySelector
//--------------------------------------
// document.querySelector("p").innerHTML = " Tag name replaced by queryselector";

// parent and child tag select by querySelector(a)
//-------------------------------------------------

// document.querySelector("a").innerHTML = "query";    //parent element
// document.querySelector("li a").innerHTML = "li a query";   //parent and child select by query
// document.querySelector(".my-div a").innerHTML = "class a"    //class then child tag a

//## query selectorall method
//-------------------------------------------------
// document.querySelectorAll("p")[0].innerHTML = "This is text 1 by qsAll";
// document.querySelectorAll("p")[1].innerHTML = "This is text 2 by qsAll";

//@ Onclick Event
//=====================================================================

// function myMessage() {
//     alert("Button 1");
// }
//  function myMessage2() {
//     alert("Button 2");
//  }
//  function myPara() {
//     alert("paragraph");
//  }
 //---------------------------------------------------------
// Show message in paragraph
//----------------------------------------------------------
// function myParagraph() {
//     var myVarP = document.querySelector("#para");
//     myVarP.innerHTML = "Clicked button 1";
// }
//
// var myVarP2 = document.querySelector("#para");
// function myPara2() {
//     myVarP2.innerHTML = "Clicked button 2";
// }
//------------------------------------------------------
// Click and show image
//------------------------------------------------------
// myVar = document.querySelector("#myImgId");
// function myImg1() {
//     myVar.src = "images/1.jpg";
// }
// function myImg2() {
//     myVar.src = "images/2.jpg";
// }

// DOM- document object model with css
//--------------------------------------------------------------
// var link = document.getElementsByTagName("a")[0];
// link.innerHTML = "This is sultan";
// link.style.textDecoration = "none";
// link.style.color = "red";
// link.style.fontSize = "2rem";
//
// var head1 = document.getElementsByTagName("h1")[0];
// head1.innerHTML = "heading 1 changed";

//How to create html element by JavaScript
//==================================================================
//Creat html element
//Inpu text into the element

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("This is heading 3");
// heading3.appendChild(text);
//
// var myDiv1 = document.getElementById("myDiv");
// myDiv1.appendChild(heading3);

//How to remove a html element
//======================================================

// var heading2 = document.getElementsByTagName("h1")[1];
// var myDiv1 = document.getElementById("myDiv");
// myDiv1.removeChild(heading2);

//Create a html element on the top
//--------------------------------------------------------

// var heading0 = document.createElement("h1");
// var text0 = document.createTextNode("This is heading 0");
// heading0.appendChild(text0);
//
// var myDiv1 = document.getElementById("myDiv");
// var heading1 = document.getElementsByTagName("h1")[0];       //get the heading1 by tagName
//
// myDiv1.insertBefore(heading0, heading1);              // insertBefore(before,after)=(created heading, bottom of the created heading(specific heading position
//                                                         //this will create element in the bottom->> myDiv1.appendChild(heading0);

//@add or remove or show a class
//==================================================================
// var showclass = document.getElementById("myDiv").classList;
// document.write(showclass+"<br/>");
//
// var addclass = document.getElementById("myDiv").classList.add("my-class2");    //add a class
// document.write(showclass+"<br/>");
//
// var remclass = document.getElementById("myDiv").classList.remove("my-class");     //remove a class
// document.write(showclass);

//@ Image slider(next/prev)
//====================================================================
// var photos = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
// var imgTag = document.querySelector("img");
//
// count = 0;
// function next() {
//     count++;
//     if(count>=photos.length){
//         count = 0;
//         imgTag.src = photos[count];
//
//     } else {
//         imgTag.src = photos[count];
//     }
//
// }
// function prev() {
//     count--;
//     if(count < 0){
//         count = photos.length - 1;
//         imgTag.src = photos[count];
//     } else {
//         imgTag.src = photos[count];
//     }
// }

//@Changing_CSS_style_dynamically(add or remove css class)
//================================================================

// var myVar = document.querySelector("#paraId");
// function addStyle() {
//     myVar.classList.add("para-style");                              //add css class
//
//     // myVar.style.color = "red";
//     // myVar.style.fontSize = "3rem";
//     // myVar.style.fontWeight = "bold";
//     // myVar.style.fontStyle = "italic";
//     // document.querySelector("#paraId").style.color = "red";
// }
// function remStyle() {
//
//     myVar.classList.remove("para-style");                       //remove css class
// }

//@Event_Listener
//============================================================

// document.querySelector("button").addEventListener("click", function(){
//     alert("Hello");
// });
//
// function myFunction() {
//     alert("Hello");
// }
//-------------------------------------------------------------------------
// var myVar = document.querySelector("h1");
// // myVar.addEventListener("click", function () {
// //     alert("hi");
//
// myVar.addEventListener("mouseover", function (){
//     myVar.classList.add("my-style");
// });
// myVar.addEventListener("mouseout", function (){
//     myVar.classList.remove("my-style");
// })

//@Event_listener_with_multiple_elements
//=======================================================================
// var but1 = document.querySelectorAll(".myButton")[0];
// but1.addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });
// var but2 = document.querySelectorAll(".myButton")[1];
// but2.addEventListener("click", function (){
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text+ " is clicked";
// });
// var but3 = document.querySelectorAll(".myButton")[2];
// but3.addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text+ " is clicked";
// });

//@Shortcut of the above function(multiple listener with multiple element)
//---------------------------------------------------------------------------
// var len = document.querySelectorAll(".myButton").length;
// for(var i=0; i<len; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function (){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text+ " is clicked";
//     });
// }

//@Audio play using JS button
//=================================================================

// for(var i=0; i<3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         console.log(text);
//         audioPlay(text);
//         playAnimation(text);
//
//     });
// }
// //This program has a problem that is the music is playing all at a time;
// function audioPlay(text){
//     switch (text){
//         case "a":
//             var audio = new Audio("files/a.mp3");
//             audio.play();
//             break;
//         case "b":
//             var audio = new Audio("files/b.mp3");
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio("files/c.mp3");
//             audio.play();
//             break;
//     }
// }

//#Animation adding to javascript
//----------------------------------------------------------------------

// function playAnimation(text){
//     var selectedButton = document.querySelector("."+text);
//     selectedButton.classList.add("anim");
//
//     setTimeout(function (){
//         selectedButton.classList.remove("anim");
//     }, 1000);
// }

//#Add listener with keyboard-keypress
//--------------------------------------------------------------------------
// document.addEventListener("keypress",function (event){
//     var text = event.key;
//     audioPlay(text);
//     playAnimation(text);
// })

//#keypress another program
//--------------------------------------------------

// document.addEventListener("keypress",function (event){
//     var text = event.key;
//     document.querySelector("p").innerHTML = "You have pressed " +text;
// });

//@Count character in textarea
//--------------------------------------------------------------
// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function (event){
//     count++;
//     var text = event.key;
//     document.querySelector("p").innerHTML = ("You have pressed "+ count);
//
// });

//#Error_Handling
//================================================================
//Error may cause
//Fault in program
//Error input of user
//Server response problem or slow
//--------------------------------------------------------------
//Error handling-> try, catch, finally, throw
//try...catch handle run time errors(program which is
//Error object
//The finally statement ->execute code, after try and catch

//sample error
// alert("Hi Everyone");
// alert(x);
// alert("Hi");

// try{
//     //code test
//    alert("Hi everyone");
//    alert(x);
// }catch(err){
//     //handle error
//     // alert("Inside catch block");
//     // console.log("Inside catch block");
//         console.log(err);
//     // console.log(err.name);
//     // console.log(err.message);
//     // document.write(err);
//
// }finally {
//     alert("Bye everyone");
// }

//#Error_handling_throw_keyword(using to create custom error)
//==================================================

// document.querySelector("#checkButton").addEventListener("click",function (){
//     var num = document.querySelector("#textField").value;
//     document.getElementById("para").innerHTML = num;
//
//     try{
//         if(num<5)
//         {
//             throw "input is less than 5"
//         }else if(num>10)
//         {
//             throw "input is greater than 10"
//         }
//
//     }catch (err){
//         console.log(err);
//     }
// });

//@Canvas(bd flag)
//=============================================================

// var c = document.getElementById("myCanvas");
//
// var ctx = c.getContext("2d");
//
// ctx.fillRect(10,10, 220,250);
// ctx.fillStyle = "red";
// ctx.backgroundColor = "green";
// ctx.color = "green";
//
// ctx.strokeRect(10,10,220,250);    //for border
// ctx.strokeStyle = "black";
// ctx.lineWidth = 3;
//
// var centerX = c.width / 2;     //for center x
// var centerY = c.height /2;      //for center y
//
// ctx.beginPath();                    //for circle starting point
// ctx.arc(centerX, centerY, 50,0, 2*Math.PI,false);         //for circle drawing
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.stroke();

//@ES6-ECMAScript6
//===============================================
//in ES5-variable declaration

// var x = 6;
// if(true){
//     var x = 5;
// }
// console.log(x);      //this will print x=5;

//But in ES6 variable will declare in -> let

// let x = 6;
// if(true) {
//     let x = 5;
// }
// console.log(x);        // Now the value of x is 6; Because in ES6  x variable will work under block;

//@let in loop
//------------------------------------------------------
// let x = 15;
// for(let x=1; x<=10; x++){
//     console.log(x);
// }
// console.log(x);

//@const in es6; const value is always fixed
//--------------------------------------------------------
// const x = 11;
// if(true) {
//     x = 10;
//     console.log(x);            //error! because the value will never changed
// }

//@string_concatenation
//------------------------------------------------
// var x = 25;
// var y = 30;
// var sum = x + y;
// console.log("sum is " + sum + " the end");

// In ES6 string concatenation
//------------------------------------------------
// let x = 25;
// let y = 30;
//
// let sum = x + y;
// console.log(`sum is ${sum} the end`);

//Another example
//------------------------------------------------
// let name = "Tipu SUltan";
//
// let message = `I am ${name}. I am learning JavaScript`;
// console.log(message);

//@Function in ES6
//===============================================
// function add(x,y){
//     var sum = x + y;
//     console.log(sum);
// }
// add(20,30);
//----------------------------------------------
//Now in ES6
//-------------------------------------------------
// const add = (x,y) => {
//     let sum = x + y;
//     console.log(sum);
// }
// add(22,30);

//@Hoisting_and_strict_mode
//@ES6_features
//1. ES6 Syntax
//  1.1 ES6 Variables ->var ,let, const (scope, redeclaration, value assigning)
//  1.2 Template literals(loop)
//  1.3 Hoisting and strict mode
//  1.4 Default and Rest parameter
//  1.5 spread operator
//  1.6 for...of
//2. Arrow functions
//3. Destructuring
//    3.1 Array and object Destructuring
//------------------------------------------------------------
//@Hoisting and strict mode(use a variable before declaration, it is possible in JS but only for var, not let in es6

// x = 20;
// console.log(x);
// var x;                          //if we use let or const this will not work

//Template literal(for var keyword, if you declare last this will pass the scope in top: like the below program
// x = 20;
// if(true) {
//     y = 10;
//     console.log(`y = ${y}`);
//     var y;
// }
// console.log(`x = ${x}`)
// var x;     //use terminal for output
//------------------------------------------------------------------------------
//in js it is possible to show value in o/p but in terminal/node.js
// x=20;
// console.log(`x = ${x}`)
//--------------------------------------------------------------------
//But using "strict mode", the JS code will be more secure and clean for this use "use strict" top of the program
//=================================================================================
// "use strict"
// x = 20;
// console.log(`x = ${x}`)

//@default_and_rest_parameter
//==============================================================================
//"use strict"
//@default_parameter
//============================================================================
// function message(text = "Hello this is default parameter"){
//     console.log(`${text}`)
// }
// message();                           //in this sphere the default parameter will print
// message("i love bd");           //but in this sphere the given message will print
//------------------------------------------------------------------------
//@rest_parameter
//====================================================================
// "use strict"

// function sum(x,y,...z) {                     //in this sphere x = first value, y = second value, and the next all input will show as z value;
//     console.log(`x = ${x},y = ${y},z = ${z}`)
// }
// sum(10,20,30,40,50);            //o/p will, x = 10, y = 20, z = 30,40,50

//@Spread_operator
//========================================================================
//sample method
// function addNumbers(x,y,z){
//     return x+y+z;
// }
// let numbers = [1,2,3]
// console.log(addNumbers(numbers[0], numbers[1], numbers[2]))

//using spread operator the above program will
//-----------------------------------------------------------------------
// function addNumbers(x,y,z) {
//     return x + y + z;
// }
// let numbers = [1,2,3]
// console.log(addNumbers(...numbers))                //using spread operator
//-------------------------------------------------------------------------------
//sent the numbers array to the newNum array
// function addNumbers(x,y,z) {
//     return x + y + z;
// }
// let numbers = [1,2,3]
// console.log(addNumbers(...numbers))
//
// let newNum = [5,6,...numbers];                    //I want to add the numbers array with this array
// console.log(newNum);
//spread operator can use first position, middle position and last position but rest parameter can use only last position
//spread operator unpack the element but rest parameter pack the element as a array
//----------------------------------------------------------------------------------------------------------------
// How to concatenate two array using spread operator
//sample method
// let numbers1 = [1,2,3]
// let numbers2 = [4,5,6]
// let numbers = numbers1.concat(numbers2)
// console.log(numbers);

//concat using spread operator
//-----------------------------------------------------------------------------
// let numbers1 = [1,2,3]
// let numbers2 = [4,5,6]
// let numbers = [...numbers1,...numbers2];
// console.log(numbers);
//----------------------------------------------------------------------------------

//@concat two object using spread operator
//===================================================================
// let p1 = {
//     name: "Tipu Sultan",
//     age: 30,
// }
// let p2 = {
//     nationality: 'Bangladesh',
//     occupation: 'teacher',
// }
// let p = {...p1,...p2};
// console.log(p);

//@object literals
//======================================================================
//short hand method of object property initializer

// function studentInfo1 (name, age){
//     return{
//         name: name,         //in ES6 this duplication(name: name;) will eliminate
//         age: age,
//     }
// }
// console.log(studentInfo1("TIpu", 29));

//In ES6 the above program will
//-----------------------------------------------------------
// function studentInfo1 (name, age){
//     return{
//         name,        //in ES6 this duplication(name: name;) will eliminate
//         age
//      }
//  }
// console.log(studentInfo1("TIpu", 29));

//@concise_method-syntax
//================================================================================
//function declaration in object(sample method)
// let message = {
//     body: function (){
//         return`Hi, I am object function`
//     }
// }
// console.log(message.body())

//But in concise method the above program will be
//---------------------------------------------------------------
// let message = {
//     body(){                                         //in ES6 the colon and function keyword will remove
//         return`Hi, I am object function with concise method`
//     }
// }
// console.log(message.body())

//In ES6 space in function allowed but within single quotation
// let message = {
//     'body name'(){                                         //in ES6 the colon and function keyword will remove
//         return`Hi, I am object function with space`
//     }
// }
// console.log(message['body name']())

//@for...of and for...in
//===================================================================
//for...of
//----------------------------------------------------------
// const names = ["s1", "s2", "s3"]
// for(let name of names){
//     console.log(name)
// }
//for..in
//--------------------------------------------------------------
// let students = {
//     ID: 101,
//     name : "Tipu Sultan",
//     cgpa: 3.22
// }
// for(let x in students){
//     console.log(students[x])            //for key console.log(x)/ for value console.log(students[x])
// }

//for print x value
// for(let x in students){
//     console.log(`${x} : ${students[x]}`)        // x = id,name,cgpa; students[x]= value of id, name, cgpa
// }

//@for vs foreach
//======================================================
//for==>
// var numbers = [10,20,30,40];
//
// for(var x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }

//foreach==>it holds nested function, it can holds anonymous function
//---------------------------------------------------------
// var numbers = [10,20,30,40,50];
// numbers.forEach(myFunction)                     //forEach take the numbers array element one by one and pass to the myFunction
//
// function myFunction(x)
// {
//      console.log(x)
// }
//alternative==> anonymous function
// numbers.forEach(function (x){
//     console.log(x)
// })

//forEach function has no need for initialization,condition,increment

//Square of a numbers==>

// var numbers = [10,20,30,40];
// var squareNumbers = [];
// numbers.forEach(function (x){               // x is a parameter
//     squareNumbers.push(x*x);
// })
// console.log(squareNumbers)

//Another program==>numbers array element will add 5 in every time
// var numbers = [10.,20,30,40];
// console.log(numbers)
// numbers.forEach(function (x, index, arr){              //x = index number, index= main array, arr= full array
//     arr[index] = x + 5;                                                        //x = item access, index = index number access, arr = full array
// })
// console.log(numbers)

//@map_filter_function
//=======================================================================

//forEach==>
// var numbers = [2,3,4,5];
// var squareNumbers = []
//
// numbers.forEach(function (x){
//     squareNumbers.push(x*x);                  //x*x ke push korci squareNumbers
// })

//@map==>no need to push value in array
//-------------------------------------------------------------------------
// var numbers = [2,3,4,5]
// var squareNumbers = numbers.map(function (x){
//     return x*x;                          //this will return array value in squareNumbers
// })
// console.log(squareNumbers);

//@filter_function==>it will filter specific (condition) value from array
//----------------------------------------------------------------------------------------

// var numbers = [22,31,3,5,35,26,78];
// var selectedNumbers = numbers.filter(function (x){
//     return x>10;
// })
// console.log(selectedNumbers);

//@Arrow_function
//=======================================================================
//traditional function==>>
// function display1(){
//     console.log("I am display 1")
// }

//Arrow function==>>
// const display2 = () => {            //()= parameter pass
//     console.log("I am display 2")
// }
// display1();
// display2();

//Arrow function need not use curly for one statement
// const display3 = () => console.log("I am display 3 without curly");
//
// display3();

//traditional function return method==>
// function message1(){
//     return "I am message 1";
// }
// console.log(message1());
//---------------------------------------------------------------------
//Arrow function return method==>
// const message2 = () => "I am message 2";          //in arrow function no need to write return and curly{}; but value will return;
//
// console.log(message2());

//@parameter pass in arrow function
//----------------------------------------------------------------------------
//traditional function
// function add(num1,num2){
//     return num1 + num2;
// }
// console.log(add(10,20));

//arrow function-
// const add2 = (num1,num2) => {       //this method {} and return is must
//    return num1 +num2;
// }
//OR alternative
// const add2 = (num1,num2) => num1 +num2;  //this method {} and return word is removed
//
// console.log(add2(10,20));
//----------------------------------------------------------------------
//Arrow function(map,filter) in Object selection
//===========================================================================================
// var students = [
//     {
//         id: 101,
//         name: 'Tipu',
//         gpa: 2.65
//     },
//     {
//         id: 102,
//         name: 'Tanvir',
//         gpa: 4.56
//     },
//     {
//         id: 103,
//         name: 'Bijoy',
//         gpa: 3.65
//     }
// ]
// console.log(students);

//find students who's gpa is greater than 3.00
//traditional function
//-----------------------------------------------------------------------------------
// function studentNames () {
//     return students.filter(function (x){
//        return x.gpa > 3
//     }).map(function (y){
//         return y.name;
//     })
// }
// console.log(studentNames());

//Now do the above program using Arrow function
//---------------------------------------------------------------------
// const studentNames2 = () => students.filter((x) => x.gpa > 3).map((y) => y.name);
//
// console.log(studentNames2())

//Destructuring array and objects
//=============================================================================
//Array Destructure
// let numbers = [10,20,30,40,50];
// let [num1, num2, num3, num4, num5] = numbers        //numbers array value will assign value in the array
// // console.log(numbers[0]);
// // console.log(numbers[1]);
// console.log(num1)
// console.log(num2)

//Now using spread operator
// let numbers = [10,20,30,40,50];
// let [num1, num2,...z] = numbers
// console.log(z);
//--------------------------------------------------------
//Swap variables using destructure method==>>
// let a = 10, b = 20;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

//object destructure
//=====================================================================
//simple object define
// const studentInfo = {
//     id: 101,
//     fullName: "Tipu",
//     gpa: 3.22
// }
// console.log(studentInfo.id);
// console.log(studentInfo.fullName);
// console.log(studentInfo.gpa);

//object define using object destructure==>>
// const studentInfo = {
//     id: 101,
//     fullName: "Tipu",
//     gpa: 3.22,
// }
// const {id,fullName} = studentInfo;    //studentInfo er data id,fullname e dea hoyece
//
// console.log(id);
// console.log(fullName);
// console.log(studentInfo.gpa);          //but for gpa we will not destructure

//nested object destructure==>>
//-----------------------------------------------------------------------------
// const studentInfo = {
//     id: 101,
//     fullName: "Tipu",
//     gpa: 3.22,
//     language: {                                     //nested object
//         native: 'bangla',
//         bilingual: 'english'
//     }
// }
// const {fullName,language} = studentInfo;    //studentInfo er data id,fullname e dea hoyece
//
// console.log(fullName);
// console.log(language);
// console.log(language.native);
// console.log(language.bilingual);

//@Destructuring function parameter
//-----------------------------------------------------------------------------------------
//sample method==>
// const studentInfo = (student) => {
//     console.log(`${student.id}, ${student.fullName}`)
// }
// const student = {        //this object info will pass to the studentInfo function
//     id: 101,
//     fullName: "Tipu"
// }
// studentInfo(student)

//Using destructure==> When Object destructure use curly{}, but when Array destructure use square[] bracket
//-----------------------------------------------------------------------------------------------------------------------
// const studentInfo = ({id,fullName}) => {            //object destructure kora hoyece: id,fullName
//     console.log(`${id}, ${fullName}`)
// }
// const student = {        //this object info will pass to the studentInfo function
//     id: 101,
//     fullName: "Tipu"
// }
// studentInfo(student)

//@array.find()_and_array.findIndex()
//===================================================================================
//find(callback, value) return the value of the first element that pass certain condition

// let numbers = [5,55,14,5,78];
// let firstEvenNumber = numbers.find(x => x%2==0);
// console.log(firstEvenNumber);

//DO the same task using function call==>>
// let numbers = [5,55,16,5,78];
// const evenNumber = (value, index, array) => {
//     if(value%2===0)
//     return value;
// }
// let firstEvenNumber = numbers.find(evenNumber);
// console.log(firstEvenNumber);

//findIndex(callback, value) return the index number of the first element that pass certain condition

// let numbers = [5,55,16,5,78];
// const evenNumber = (value, index, array) => {     //index, array not needed for this program
//     if(value%2===0)
//     return value;
// }
// let firstEvenNumber = numbers.find(evenNumber);
// let firstEvenNUmberIndex = numbers.findIndex(evenNumber);
// console.log(firstEvenNumber);
// console.log(firstEvenNUmberIndex);

//find() and findIndex() in object(find element and element value under certain condition)
//=================================================================================
// const students = [
//     {
//         id: 101,
//         gpa: 2.5
//     },
//     {
//         id: 102,
//         gpa: 4.65
//     },
//     {
//         id: 104,
//         gpa: 5
//     }
// ]
// console.log(students.find(x => x.gpa>4))

 //startsWith(searchString, position) => check a string starts with another string
//endsWith(searchString, length) => check a string ends with another string
//includes(searchString, position) => check if a string contains another string
// all these methods are case sensitive

//@startsWith==>

// const message = "Today is friday";
// console.log(message.startsWith('Today', 0))   //today not work

//@endsWith==>

// const message = "Today is friday";
// console.log(message.endsWith('friday'))         //Friday not work

//@includes==>

// const message = "Today is friday";
// console.log(message.includes('friday'))   //Friday not work

//@ES6 Modules => export and import [first create a js file name:myModula]
//==============================================================================

// import {setText, text} from './myModule'
//
// console.log(text);
// setText("goodbye from es6")
// console.log(text)

//@ES6_class
//============================================================

// class Student {
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
//     set studentName(name){       //set the new name
//         this.name = "Anis";
//     }
//     get studentInfo(){
//         return this.id + " " + this.name;
//     }
//
// }
// let s1 = new Student(101, "tipu");
// console.log(s1)
// console.log(s1.id)
// console.log(s1.name)
//
// //access the setName
//
// s1.studentName = "setname";
// console.log(s1.name);
//
// //access the getName
// console.log(s1.studentInfo);

//@asynchronous_and_synchronous_programming
//===================================================================================
//synchronous_programming==>>1. Until a task completed then another task will start, 2. One behaviour, blocking code behaviour, 3. called, single threaded program
//this four task will complete one by one or que
// console.log("taskOne");
// console.log("taskTwo");
// console.log("taskThree");
// console.log("taskFour");
//----------------------------------------------------------------------
//asynchronous_programming==>>1. If one task is in error than another task will start automatically i.e; the system won't stop.

// const taskOne = () => {
//     console.log("Task1");

//after completing callstack task, taskTwo will complete
// const dataLoading = () => {
//     console.log("Task2. Data Loading");
// }
// const taskTwo = () => {
//     setTimeout(dataLoading, 1000);
// }
// const taskThree = () => {
//     console.log("Task3");
// }
// const taskFour = () => {
//     console.log("Task4");
// }
// taskOne();
// taskTwo();
// taskThree();
// taskFour();
//------------------------------------------------------------------------
//asynchronous_programming
// const taskOne = () => {
//     console.log("Task1");
// }
//
// const taskTwo = () => {
//     setTimeout(() => {
//         console.log("Task2. Data Loading");
//     }, 1000);
// }
//
// const taskThree = () => {
//     console.log("Task3");
// }
// const taskFour = () => {
//     console.log("Task4");
// }
// taskOne();
// taskTwo();
// taskThree();
// taskFour();

//@callback_and _higher_order_function==>
//====================================================================
// function square(x) {
//     console.log(`square of ${x}: ${x * x}`);
// }
// //square(5);
//
// //const y = square;             //now y will work as square function
// //y(6);
//
// function higherOrderFunction(num, callback) {     //callback is received square() function as argument, this is called callback function
//       callback(5)                                              //which function received callback function is called higherOrderFunction.
// }
// higherOrderFunction(6, square)                 //square function can use as a parameter

//Application of callback and higher order function in asynchronous
//=====================================================================
//asynchronous_programming

// const taskOne = (callback) => {
//     console.log("Task1");
//     callback();
// }
//
// const taskTwo = (callback) => {
//     setTimeout(() => {
//         console.log("Task2. Data Loading");
//         callback();
//     }, 2000);
// }
//
// const taskThree = (callback) => {
//     console.log("Task3");
//     callback();
// }
// const taskFour = () => {           //last one need not to add callback function
//     console.log("Task4");
// }
//
//
// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree(function f3(){
//             taskFour();
//         });
//     });
// });

//all event handler is asynchronous programming
// console.log('hi')
// document.querySelector("button").addEventListener('click', ()=>{
//     console.log("button is clicked");
// })
// console.log('bi');

//@promise==> asynchronous function
//==========================================================

// console.log("welcome");

//how to create a promise==> pending(not done but promised), resolved(completed so successful), rejected(fail to complete)

// const promise1 = new Promise((resolve, reject)=>{
//     let completedPromise = false;
//     if(completedPromise){
//         resolve("completed promise 1");
//     }else{
//         //reject("not completed promise 1")
//         //or reject(new Error("not completed promise 1"));
//     }
// })
// //console.log(promise1);
// promise1.then(res => {
//     console.log(res);
// })
//     .catch(err => {
//         console.log(err);
//     })

// console.log("end");

// //another program
// const promis2 = new Promise((resolve, reject) => {
//     resolve("completed pr 2");
// })
// promis2.then((res)=> console.log(res));

//call all promise at a time
//promise.all([promise1, promis2]).then(res) => console.log(res);

//promise resolve Timeout set

// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         resolve("completed promise 1");
//     },2000)
// })
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         resolve("completed promise 2");
//     },1000)
// })

//promise 1 resolve after 2sec, promise 2 resolve after 1sec


console.log(firstInteger + (+secondInteger));
console.log(firstDecimal + (+secondDecimal));
console.log(firstString + secondString);