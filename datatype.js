/* console.log("Hello, World!");

console.log(isNaN("2"));
   
var m = 15;
var n = 3;
var product = m*n;
console.log(product);

console.log(5=="5");


console.log(15 < 10 || 12 > 10);

var x = 5;
var y = --x;
console.log

var score = 99;
var result = score >= 60 ? "pass" : "fail";
console.log(result);

var marks = 100;

if (marks <= 40) {
    console.log("Fail");
} else if (marks > 40 && marks <= 60) {
    console.log("Pass, Grade B");
} else if (marks > 60 && marks <= 70) {  
    console.log("Grade A");
} else {
    console.log("Grade A+"); 
}
 */
/*const a=12;
let b= prompt("enter your age:")

let c= prompt("enter")
d= Number(b) + Number(c)
console.log(d)*/

/* let a = -12
console.log(typeof(a))
 */
/* let a = "suman"
console.log('hello my name is ${a}') */

/* let a = null;
console.log(typeof(a)) */

/* let a = Symbol('hello')
let b = Symbol('hello')
console.log(typeof(a))
console.log(a==b) */

/* let a = 12n
console.log(typeof(a)) */


/* let book ={
    'title': 'harry pitter',
    'author': 'jk rowling',
    'price': 1000

}
console.log(typeof(book))
console.log(typeof(['author'])) */

/* //fun definition
function myFunction(){
    console.log('hello')
};
//function call
myFunction() */

/* function myFunction(a,b,c){
    console.log(a+b+c)
};
myFunction(1,"2",3) */


/* let a = +promp("Enter first number: ")
let b = +promp("Enter second number: ")

document.write(a+b) */

/* let a = '3'
console.log(a*'3')
console.log(a/3) */

/* console.log('5' % '3') */

/* console.log('2'**'3')
console.log(2**3) */

/* let a = 1
b= a++
console.log(b)
console.log(a) */

/* let a = 1
a -= 2
console.log(a) */

/* let a = '3'
let b = 3

console.log(a === b) */

/* console.log(true && true) */

/* let a= 1
let b = 2
console.log(a==1 || b==2)
console.log(a==1 || b==2)
console.log(!true)
 */
/* //condition? value1: value2
let a = 5
let b = (a==3)?"the value is 3":"the value is not 3"
console.log(b) */

/* ??? */
/* let a = {
    'apple':1,
    'banana':2,
}
for (i in a){
    console.log(a[i]);

} */

/* function something(){
    alert ("thanks for visiting")

}

function changingText (){
    let world = document.getElementById('world')
    world.innerText('Hello')

} */
/* //Counting from 1 to 20: Write a loop to print numbers from 1 to 20. 
for (let i = 0; i<=19; i++){
    console.log(i)
} */

/* let name = prompt("enter your name: ")
function sayhello(userName){
    console.log('hello ${userName}')
}
sayhello(name) */

/* let someVariable = (a,b) => console.log(a,b);

someVariable(1,2) */

/* let oddPrint = () => {
    for (let i=0; i<=10; i++){
        if (i%2==1){
            console.log('${i} is odd')
        }
    }
}
oddPrint() */

//funtion to print multiple of 10
/* function multiple(a){
    for(i=1; i<=10; i++){
        console.log(i*a)
    }
        
}
multiple(100)
 */
/* let a = (prompt("Enter a number:"));
let b = Number(a)
let multiplicationFunction = (num) => {
    for (let i = 0; i <= 10; i++) {
        console.log('${num} * ${i}' = ${num*i}')
    }        

}
multiplicationFunction(b) */

/* function mulsqr(){
    let a = (prompt('enter first number'));
    let b = (prompt('enter second number'));
    a = Number(a)
    b = Number(b)
    console.log((a**2) + (b**2));
}
mulsqr() */

/* let totalSum = 0;
let totalSquareSum = () => {
    for (let i=0; i<5; i++){
        let num = prompt("enter a number: ")
        totalSum += num**2
    }
    console.log(totalSum)
}
totalSquareSum() */


/* function isleapyear(year) {
    if (year%4 === 0){
        if(year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}
const year = (prompt("ENter a year:"), 10);
console.log(year % 4 === 0 && (year % 100 !==0 || year % 400 === 0));

 */
/* (function (){
    console.log('this is immediately invoked function ')
})(); */

//callback function
/* function callbackfunction(a){
    a()

}
function hello(){
    console.log('this is call back function')
}
callbackfunction(hello) */
/* //return statement/keyword
//return should be the last line of function
//return also works like break statement for function
//return should always return the main output of the function
//return value should be stred during function call
function returnSomething(){
    return('something')
    console.log('hello')
}
let a= returnSomething()
console.log(a) */


/* //calculator
function add(a,b){
    console.log (a + b)
}
function sub(a,b){
    return a - b
}
function mul(a,b){
    return a * b
}
let num1 = (prompt("enter first num"));
let num2 = (prompt("enter second num"));
let operator = (prompt("enter operator(+,-,*)"));

function result(){
    let result;

    if (operator === "+"){
        result = add(num1, num2);
    }
    if (operator === "-"){
        result = num1 - num2;
    
    }
    
    console.log('theresult is: ${result}');
    

}
result(); */

//recursive function:
//function that call itself repetedly

//syntax:
//function functionName(){
//functionName()
//}

/* function fact(n){
    if(n==1 || n==0){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
console.log(fact(10)) */

/* function fib(n){
    if (n === 0) return  0;
    if (n === 1) return 1;

    return fib(n-1) + fib(n-2);
}
const Input = prompt("enter a num");
const n = (Input);
console.log(fib(n));
 */


//strings:

//property:-
//length
/* let myName = 'pranjal'

console.log(myName.length) */


//Method
//syntax
//data.methodName()


/* let myName = '    my name is pranjal    '
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
console.log(myName.split("m"))
console.log(myName.trim())
console.log(myName.trimEnd())
console.log(myName.trimStart())
console.log(myName.replace('my name is pranjal', 'im pranjal '))
console.log(myName.indexOf('m'))
console.log(myName.lastIndexOf('m'))
console.log(myName[8])
console.log(myName.concat('neupane'))
//slice
//syntax:
//stirng.slice(startIndex,endIndex)
let newString = 'hello how are you'
console.log(newString.slice(0,4))
console.log(newString.slice(-1))
console.log(newString.includes('how')) */


/* let a = 'hello worlllld'
/* for(let i=0; i<a.length; i++){
    console.log(a[i])
} */
/*for (let i in a ){
    console.log(a[i])

}

for (let i of a){
    console.log(i)
} */


/* let a = document.getElementById('hello')
console.log(a)
a.style.color ='blue'
console.log(a.innerText.toLowerCase) */

/* function inputButton(button){
    let value = button.innerText
    let a = document.getElementById('display')
    a.value += value
}
function resultButton(){
    let a = document.getElementById('display')
    a.value = eval(a.value)
}
function clearButton(){
    let a = document.getElementById('display')
    a.value = ''
} */


/* const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
    
    
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
    
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        
        output = output.toString().slice(0, -1);
    } else {

        
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
    };
    
    buttons.forEach((button) => {
      
        button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    });

 */

// console.log("dnjsndsnd")
//prompt()
//alert(a)
//a=prompt('Enter your value)
//console.log(a)
//alert(a)
//variable
//a=9

//a, 23,_,$


/* const x = 10
let y = 20
var z = 30
console.log(x, y, z) */

/* function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
varExample(); */

// data type
// primitive data type>> Number, string, boolean, symbol, bigInteger, null, undefined
//number
/* let data=213
console.log(typeof data)
let name= 'total number is ${data}'
console.log(name)
//boolean
let isBool=true
console.log(typeof isBool) */


// non-primitive data type>> object, array



// const person={
//     name:'xyx',
//     age:25,
//     phone:98000000

// }

// console.log(person.age)


//array
/* const arr=[1, 'ram', true, undefined]
console.log(arr[2]) */

//f(x)=x+1
/* function sun(a){
    // console.log('hello world')
    // console.log(1+3)

    return a+5

}
let x=sun(100)
console.log(x)
 */


/* let x=5
x++
console.log(x++) */

// console.log(155%2)
// console.log(false+5+true)

// assingement operator
// =, +=, -=, /=, %=, **=, *=

/* let x=5
x+=5//x=x+5
x-=5//x=x-5
x**=2//x=x^2
console.log(x)
 */

//comparision operator
//==, ===, >, <, >=, <=, !=, !==,

/* let a=5
let b=10
// console.log(a===b)
console.log(a>=b)
console.log(a!=b)
console.log(a!==b) */

//logical Operators (and >> && , or >> ||)

//cond1 && cond2
//true and true >> true
//true and false >> false
//else >> false 

//cond1 || cond2
//true || true >> true
//false || false >> false 
//else >> true

//!
//(!) not operator
//!true>> false
//!false>> true

//ternary operators
// true? console.log(true):console.log(false)

// let x=5;
// let y='10';

// console.log(x>y && x<y)
// console.log(x>y || x<y)
// console.log(x===y && x===y)

// let t=true
// console.log(!t)

//true? console.log('true'): console.log('false')

//conditional statement >>> if, else
 
/* if(true){
    

}else if(true){


}
else{

} */

/* let x=9
if(x==9){
    console.log("hello if")
}
else{
    console.log("hello else")
}
 */




/* assignment 1................*/



/* 1. Age Check: Write an `if-else` statement to check if a person is 18 years old or older. Print "Adult" if 
true, otherwise "Not an adult."  */
// let age = 18
// if(age>=18){
//     console.log("adult")
// }
// else{
//     console.log('not adult')
// }

// /* 2. Number Sign: Write an `if-else` statement to check if a number is positive. Print "Positive" if true, 
// otherwise "Not positive."  */
// let userInput= prompt("enter any number")
// if(userInput>=0){
//     console.log("positive")
// }else{
//     console.log("negative")
// }


// /* 3. Even or Odd: Write an `if-else` statement to check if a number is even. Print "Even" if true, otherwise 
// "Odd."  */
// let a= Number(prompt("enter any number"));
// if(a % 2 === 0){
//     console.log('even')

// }else if(a % 2 != 0) {
//     console.log('odd')

// }else {
//     console.log('zero')
// }


// /* 4 Vowel or Consonant: Write an `if-else` statement to check if a given character is a vowel. Print "Vowel" 
// if true, otherwise "Consonant." */

// let a= prompt("enter any string");
// if(a=='a' || a=='e' || a=='i' || a=='o' || a=='u'){
//     console.log("vowel")
// }else{
//     console.log("consonant")
// }

// /*5. Check Zero: Write an `if-else` statement to check if a number is zero. Print "Zero" if true, otherwise 
// "Non-zero." */
// let num = Number(prompt("Enter a number:"));
// if(num === 0){
//     console.log('zero')

// }else{
//     console.log("non-zero");
// }

// /* 6. Multiple of Five: Write an `if-else` statement to check if a number is a multiple of 5. Print "Multiple of 
// 5" if true, otherwise "Not a multiple of 5." */
// let num = Number(prompt("Enter a number:"));
// if (num % 5 === 0) {
//     console.log('multiple of 5')

// }else{
//     console.log('not a multiple of 5')
// }

// /* 7. Greater Than Ten: Write an `if-else` statement to check if a number is greater than 10. Print "Greater 
// than 10" if true, otherwise "10 or less."  */
// let num = Number(prompt('enter a number'))
// if (num > 10){
//     console.log('greater than 10');
// }else {
//     console.log('10 or less');
// }
 
// /*8. Check Equality: Write an `if-else` statement to check if two numbers are equal. Print "Equal" if true, 
// otherwise "Not equal."  */
// let num1 = Number(prompt('enter first number:'));
// let num2 = Number(prompt('enter second number'));
// if (num1 === num2) {
//     console.log('equal');
// }else{
//     console.log('not equal');
// }

// /* 9. String Length Check: Write an `if-else` statement to check if the length of a string is greater than 5. 
// Print "Long string" if true, otherwise "Short string." */ 
// let str = prompt("Enter a string:");
// if (str.length > 5) {
//     console.log("Long string");
// } else {
//     console.log("Short string");
// }

// /* 10. Check Uppercase: Write an `if-else` statement to check if a character is uppercase. Print "Uppercase" 
// if true, otherwise "Lowercase." */ 
// let char = prompt('enter a character:');
// if (char === char.toUpperCase() && isNaN(char)) {
//     console.log('uppercase');
// }else {
//     console.log('lowercase');
// }

// /* 11. Check Weekend: Write an `if-else` statement to check if a day of the week is Saturday. Print 
// "Weekend" if true, otherwise "Not weekend."  */
// let day = prompt('enter a day');
// if(day.toLowerCase() === 'saturday') {
//     console.log('weekend');

// }else{
//     console.log('not weekend')
// }

// /* 12. Age Category: Write an `if-else` statement to check if a person is a child (under 12). Print "Child" if 
// true, otherwise "Not a child." */ 
// let age = Number(prompt('enter your age:'));
// if (age < 12) {
//     console.log('child');
// }else{
//     console.log('not a child');
// }

// /* 13. Temperature Check: Write an `if-else` statement to check if the temperature is above 30 degrees. Print 
// "Hot" if true, otherwise "Cold."  */
// let temp = number(prompt('enter temperature in c'));
// if (temp > 30) {
//     console.log('hot');

// }else {
//     console.log('cold');
// }

// /* 14. Number Range: Write an `if-else` statement to check if a number is between 1 and 100. Print "In 
// range" if true, otherwise "Out of range."  */
// let num = Number(prompt('enter a number'));
// if (num >=1 && num <= 100){
//     console.log('in range');
// }else{
//     console.log('out of range');
// }

// /* 15. Grade Check: Write an `if-else` statement to check if a student’s score is greater than or equal to 50. 
// Print "Pass" if true, otherwise "Fail."  */
// let score = Number(prompt('enter score'));
// if (score >= 50){
//     console.log("pass");
// }else {
//     console.log("fail");
// }

// /* 16. Divisibility Check: Write an `if-else` statement to check if a number is divisible by 3. Print "Divisible 
// by 3" if true, otherwise "Not divisible by 3."  */
// let num = Number(prompt("Enter a number:"));
// if (num % 3 === 0) {
//     console.log("Divisible by 3");
// } else {
//     console.log("Not divisible by 3");
// }

// /* 17. Morning or Afternoon: Write an `if-else` statement to check if the time is before 12 PM. Print 
// "Morning" if true, otherwise "Afternoon." 
//  */
// let time = Number(prompt("enter time in 24-hour format:"));
// if (time < 12){
//     console.log('morning');
// }else {
//     console.log('afternoon');
// }

// /* 18. Teenager Check: Write an `if-else` statement to check if a person’s age is between 13 and 19. Print 
// "Teenager" if true, otherwise "Not a teenager."  */
// let age = Number(prompt('enter age'));
// if (age >= 13 && age <= 19) {
//     console.log('teenager');

// }else {
//     console.log('not a teenager');
// }

// /* 19. String Content Check: Write an `if-else` statement to check if a string contains the letter "a". Print 
// "Contains 'a'" if true, otherwise "Does not contain 'a'."  */
// let str = prompt("Enter a string:");
// if (str.includes("a")) {
//     console.log("Contains 'a'");
// } else {
//     console.log("Does not contain 'a'");
// }

// /* 20. Leap Year Check: Write an `if-else` statement to check if a given year is a leap year. Print "Leap year" 
// if true, otherwise "Not a leap year."  */
// let year = Number(prompt('enter a year'));
// if ((year % 4 === 0 && year % 100 !=0) || year % 400 === 0){
//     console.log('leap year');
// }else {
//     console.log('not aleap year');
// }

// /* 21. Check Negative: Write an `if-else` statement to check if a number is negative. Print "Negative" if true, 
// otherwise "Positive or zero." */ 
// let num = Number(prompt("Enter a number:"));
// if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Positive or zero");
// }

// /* 22. Password Match: Write an `if-else` statement to check if a user’s input matches the password "1234". 
// Print "Access granted" if true, otherwise "Access denied." */
// let password = prompt("Enter password:");
// if (password === "1234") {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }

// /* 23. Greater Number: Write an `if-else` statement to check if the first of two numbers is greater. Print 
// "First is greater" if true, otherwise "Second is greater or equal." */ 
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// if (num1 > num2) {
//     console.log("First is greater");
// } else {
//     console.log("Second is greater or equal");
// }

// /* 24. Prime Check: Write an `if-else` statement to check if a number is greater than 1 and divisible only by 
// 1 and itself. Print "Prime" if true, otherwise "Not prime."  */
// let num = Number(prompt("enter a number:"));
// let isPrime = num > 1;





// /* 25. Eligible for Discount: Write an `if-else` statement to check if a customer’s age is 65 or older. Print 
// "Eligible for senior discount" if true, otherwise "Not eligible."  */
// let age = Number(propmt('enter your age:'));
// if (age >= 65){
//     console.log('eligible for senior discount');
// }else{
//     console.log('not eligible');
// }

// /* 26. String Comparison: Write an `if-else` statement to check if two strings are exactly the same. Print 
// "Match" if true, otherwise "Do not match."  */
// let str1 = prompt("Enter first string:");
// let str2 = prompt("Enter second string:");
// if (str1 === str2) {
//     console.log("Match");
// } else {
//     console.log("Do not match");
// }

// /* 27. Multiples of Two: Write an `if-else` statement to check if a number is a multiple of 2. Print "Multiple 
// of 2" if true, otherwise "Not a multiple of 2."  */
// let num = Number(prompt("Enter a number:"));
// if (num % 2 === 0) {
//     console.log("Multiple of 2");
// } else {
//     console.log("Not a multiple of 2");
// }

// /* 28. Driving License Check: Write an `if-else` statement to check if a person is old enough to get a driving 
// license (age 18 or older). Print "Eligible" if true, otherwise "Not eligible."  */
// let age = Number(prompt("Enter your age:"));
// if (age >= 18) {
//     console.log("Eligible");
// } else {
//     console.log("Not eligible");
// }

// /* 29. Letter Case Check: Write an `if-else` statement to check if a character is lowercase. Print "Lowercase" 
// if true, otherwise "Uppercase."  */
// let char = prompt('enter a character:');
// if (char === char.toLowerCase() && isNaN(char)){
//     console.log('lowercase');
// }else {
//     console.log('upper case');
// }

// /* 30. Number Check: Write an `if-else` statement to check if a number is a single-digit number. Print 
// "Single-digit" if true, otherwise "More than one digit." */
// let num = Number(prompt('enter a number:'));
// if (num >= 0 && num <= 9) {
//     console.log('single-digit');
// }else {
//     console.log('more han one digit');
// }

// /* 31. Divisibility by 10: Write an `if-else` statement to check if a number is divisible by 10. Print "Divisible 
// by 10" if true, otherwise "Not divisible by 10."  */
// let num = Number(prompt("Enter a number:"));
// if (num % 10 === 0) {
//     console.log("Divisible by 10");
// } else {
//     console.log("Not divisible by 10");
// }

// /* 32. Check Month: Write an `if-else` statement to check if a month number corresponds to a month with 
// 31 days. Print "31 days" if true, otherwise "Not 31 days." */ 
// let month = Number(prompt("Enter month number (1-12):"));
// if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
//     console.log("31 days");
// } else {
//     console.log("Not 31 days");
// }

// /* 33. Password Length Check: Write an `if-else` statement to check if a password is at least 8 characters 
// long. Print "Valid password" if true, otherwise "Password too short." */ 
// let password = prompt("Enter a password:");
// if (password.length >= 8) {
//     console.log("Valid password");
// } else {
//     console.log("Password too short");
// }

// /* 34. Check for Zero: Write an `if-else` statement to check if a number is zero. Print "Zero" if true, 
// otherwise "Not zero." */ 
// let num = Number(prompt("Enter a number:"));
// if (num === 0) {
//     console.log("Zero");
// } else {
//     console.log("Not zero");
// }

// /* 35. Grade A Check: Write an `if-else` statement to check if a student’s score is 90 or above. Print "Grade 
// A" if true, otherwise "Less than Grade A."  */
// let score = Number(prompt("Enter student score:"));
// if (score >= 90) {
//     console.log("Grade A");
// } else {
//     console.log("Less than Grade A");
// }

// /* 36. Empty String Check: Write an `if-else` statement to check if a string is empty. Print "Empty" if true, 
// otherwise "Not empty."  */
// let str = prompt("Enter a string:");
// if (str === "") {
//     console.log("Empty");
// } else {
//     console.log("Not empty");
// }

// /* 37. Multiple of 4: Write an `if-else` statement to check if a number is a multiple of 4. Print "Multiple of 4" 
// if true, otherwise "Not a multiple of 4." */ 
// let num = Number(prompt("Enter a number:"));
// if (num % 4 === 0) {
//     console.log("Multiple of 4");
// } else {
//     console.log("Not a multiple of 4");
// }

// /* 38. Day of the Week: Write an `if-else` statement to check if a given day is Sunday. Print "Sunday" if true, 
// otherwise "Not Sunday."  */
// let day = prompt("Enter a day:");
// if (day.toLowerCase() === "sunday") {
//     console.log("Sunday");
// } else {
//     console.log("Not Sunday");
// }


// /* 39. String Starts with A: Write an `if-else` statement to check if a string starts with the letter "A". Print 
// "Starts with A" if true, otherwise "Does not start with A." */ 
// let str = prompt("Enter a string:");
// if (str.charAt(0).toUpperCase() === "A") {
//     console.log("Starts with A");
// } else {
//     console.log("Does not start with A");
// }

// /* 40. Check for Space: Write an `if-else` statement to check if a string contains a space. Print "Contains 
// space" if true, otherwise "No space."  */
// let str = prompt('enter a string')
// if (str.includes(" ")){
//     console.log('contains space');
// }else {
//     console.log('not space');
// }

// /* 41. String Length Even: Write an `if-else` statement to check if the length of a string is an even number. 
// Print "Even length" if true, otherwise "Odd length." */ 
// let str = prompt("Enter a string:");
// if (str.length % 2 === 0) {
//     console.log("Even length");
// } else {
//     console.log("Odd length");
// }

// /* 42. Temperature Conversion: Write an `if-else` statement to check if a temperature in Celsius is above 100 
// degrees. Print "Above boiling point" if true, otherwise "Below boiling point."  */
// let temp = Number(prompt("Enter temperature in °C:"));
// if (temp > 100) {
//     console.log("Above boiling point");
// } else {
//     console.log("Below boiling point");
// }

// /* 43. Work Hours Check: Write an `if-else` statement to check if the current time is during work hours (9 
// AM to 5 PM). Print "Working hours" if true, otherwise "Off hours."  */
// let temp = Number(prompt("Enter temperature in °C:"));
// if (temp > 100) {
//     console.log("Above boiling point");
// } else {
//     console.log("Below boiling point");
// }

// /* 44. BMI Check: Write an `if-else` statement to check if a person’s Body Mass Index (BMI) is in the 
// healthy range (18.5 to 24.9). Print "Healthy" if true, otherwise "Not healthy."  */
// let bmi = Number(prompt("Enter your BMI:"));
// if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Healthy");
// } else {
//     console.log("Not healthy");
// }

// /* 45. Check Odd Number: Write an `if-else` statement to check if a number is odd. Print "Odd" if true, 
// otherwise "Even."  */
// let num = Number(prompt("Enter a number:"));
// if (num % 2 !== 0) {
//     console.log("Odd");
// } else {
//     console.log("Even");
// }

// /* 46. Check for Digit: Write an `if-else` statement to check if a character is a digit (0-9). Print "Digit" if 
// true, otherwise "Not a digit."  */
// let char = prompt("Enter a character:");





// /* 47. Check for Exclamation: Write an `if-else` statement to check if a string ends with an exclamation 
// mark (!). Print "Exclamation mark" if true, otherwise "No exclamation mark."  */
// let str = prompt("Enter a string:");
// if (str.endsWith("!")) {
//     console.log("Exclamation mark");
// } else {
//     console.log("No exclamation mark");
// }

// /* 48. Day Check: Write an `if-else` statement to check if today is a weekday (Monday to Friday). Print 
// "Weekday" if true, otherwise "Weekend."  */
// let day = prompt("Enter a day:");
// if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day.toLowerCase())) {
//     console.log("Weekday");
// } else {
//     console.log("Weekend");
// }

// /* 49. Check Square Number: Write an `if-else` statement to check if a number is a perfect square. Print 
// "Perfect square" if true, otherwise "Not a perfect square."  */
// let num = Number(prompt("Enter a number:"));
// if (Number.isInteger(Math.sqrt(num))) {
//     console.log("Perfect square");
// } else {
//     console.log("Not a perfect square");
// }


// /* 50. Temperature Range Check: Write an `if-else` statement to check if a temperature is between 15 and 25 
// degrees Celsius. Print "Comfortable" if true, otherwise "Uncomfortable."
//  */
// let temp = Number(prompt("Enter temperature in °C:"));
// if (temp >= 15 && temp <= 25) {
//     console.log("Comfortable");
// } else {
//     console.log("Uncomfortable");
// }

 










