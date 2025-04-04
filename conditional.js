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


/* 50. Temperature Range Check: Write an `if-else` statement to check if a temperature is between 15 and 25 
degrees Celsius. Print "Comfortable" if true, otherwise "Uncomfortable."
 */
// let temp = Number(prompt("Enter temperature in °C:"));
// if (temp >= 15 && temp <= 25) {
//     console.log("Comfortable");
// } else {
//     console.log("Uncomfortable");
// }