//1.- Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 1; i <= 10; i++) {
    console.log(i + " For");
}

let i = 1;
while (i <= 10) {
    console.log(i + " While");
    i++;
}

let ii = 1;
do {
    console.log(ii + " Do While")
    ii++;
} while (ii <= 10)

//2.- Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 1; i--) {
    console.log(i + " For");
}

let i2 = 10;
while (i2 >= 1) {
    console.log(i2 + " While");
    --i2;
}

let ii2 = 10;
do {
    console.log(ii2 + " Do While")
    ii2--;
} while (ii2 >= 1)

//3.- Iterate 0 to n using for loop
let n = 10;
for (let i = 0; i < n; i++) {
    console.log(i + " n");
}

//4.- Write a loop that makes the following pattern using console.log():
let output = ""
for (let i = 1; i < 5; i++) {
    for (let j = 1; j < i; j++) {
        output += "#";
        console.log(output);
    }
}

//5.- Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(i + " x " + i + " = " + i * i);
}

//6.- Using loop print the following pattern
console.log("i" + "  " + "i^2" + "  " + "i^3");
for (let i = 0; i <= 10; i++) {
    console.log(i + "  " + i ** 2 + "    " + i ** 3)
}

//7.- Use for loop to iterate from 0 to 100 and print only even numbers
let even = 0;
for (let i = 1; i <= 100; ++i) {
    if (i % 2 == 0) {
        even += "," + i; + ",";
    }
}
console.log(even);

//8.- Use for loop to iterate from 0 to 100 and print only odd numberslet even = 0;
let odd = 0;
for (let i = 1; i <= 100; ++i) {
    if (i % 2) {
        odd += "," + i; + ",";
    }
}
console.log(odd);

//9.- Use for loop to iterate from 0 to 100 and print only prime numbers
/* let prime = 0;
let element = 0;
for (let j = 2; j <= 100; j++) {
    for (let i = 2; i < j; ++i) {
        if (j % i === 0) {
            prime += "," + j; + ",";
        }
    }
    // if (j > 1 && )
}
console.log(prime); */

//10.- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (i = 0; i <= 100; i++) {
    sum += i;
}
console.log("The sum of all numbers from 0 to 100 is " + sum);

//11.- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let newEvens = 0;
let newOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        newEvens += i;
    } else {
        newOdds += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${newEvens}. And the sum of all odds from 0 to 100 is ${newOdds}`);

//12.- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
console.log([newEvens, newOdds]);

//13.- Develop a small script which generate array of 5 random numbers
let arrayFive = [];
for (let i = 0; i < 5; i++) {
    arrayFive += parseInt((Math.random() * 100)) + ", ";
}
console.log(arrayFive);

//14.- Develop a small script which generate array of 5 random numbers and the numbers must be unique
/* let arrayFive1 = [];
let unique = [];
for (let i = 0; i < 5; i++) {
    arrayFive1 += parseInt((num) => num != (Math.random() * 100)) + ", ";
    arrayFive1.sort(function (a, b) { return a - b });
}
console.log(arrayFive1); */
//console.log(unique);

//15.- Develop a small script which generate a six characters random id:
let ascii = "";
for (let i = 1; i < 5; i++) {
    let alpha = Math.floor(Math.random() * (48 - 90 + 1) + 90);
    if (alpha < 58 || alpha > 64) {
        ascii += String.fromCharCode(alpha);
    }
}
console.log(ascii);