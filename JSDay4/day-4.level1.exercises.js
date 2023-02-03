//1.- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/* let age = prompt("Enter your age:");
let years = 18 - age;
if (age >= 18) {
    prompt("Your are old enough to drive");
} else {
    prompt(`You need to wait ${years} years to turn 18`);
} */

//2.- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/* const myAge = 37;
const yourAge = prompt(`Enter your age: `);
if (yourAge > myAge) {
    console.log('You are older than me');
} else {
    console.log("I'm older than you");
} */

//3.- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4, b = 3;
a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is greater than ${b}`);

//4.- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt(`Enter an number: `);
number % 2 == 0 ? console.log(`${number} is a even number`) : console.log(`${number} is an odd number`);

