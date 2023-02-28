import countries from './countries.js';
//1.- The following is an array of 10 students ages:
/* Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let ageSort = ages.sort();
let minAge = ageSort[0];
let maxAge = ageSort[ages.length - 1];
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(min, max, minAge, maxAge);

console.log(ages);

let sum = 0;
ages.forEach(num => { sum += num })
console.log(sum / 2);

//2.- Slice the first ten countries from the countries array * /

//3.- Find the middle country(ies) in the countries array
//4.- Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let arrSize = countries.length; //array of 11 elements
let arrMiddle = arrSize / 2;

let arrClone = countries;
let fisrHalf = arrClone.splice(0, arrMiddle + 1); // new array of 6 elements
console.log(fisrHalf);

let secondHalf = countries.splice(0, arrSize);// new array of 5 elements
console.log(secondHalf);