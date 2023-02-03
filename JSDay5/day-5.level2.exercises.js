//1.- Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. 
//Access both file in main.js file
import countries from './countries.js';
import webtechs from './web_techs.js';
//console.log(countries);

//2.- First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people I teach HTML CSS JS React Python';
let txt = text.split(' ');
console.log(txt);
console.log(txt.length);

//3.- In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
/* a) add 'Meat' in the beginning of your shopping cart if it has not been already added
b) add Sugar at the end of you shopping cart if it has not been already added
c) remove 'Honey' if you are allergic to honey
d) modify Tea to 'Green Tea' */

shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

let honeyIndex = shoppingCart.indexOf('Honey');
shoppingCart.splice(honeyIndex, 1);
console.log(shoppingCart);

let teaIndex = shoppingCart.indexOf('Tea');
shoppingCart[teaIndex] = 'Green Tea';
console.log(shoppingCart);

//4.- In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let ethiopiaIndex = countries.indexOf('Ethiopia')
let ethiopiaUpperCase = countries.splice(ethiopiaIndex, 1);
console.log(ethiopiaUpperCase.toString().toUpperCase());

//5.- In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let sassWebTechs = webtechs.indexOf('Sass');
if (sassWebTechs === -1) {
    webtechs.push('Sass');
    console.log(webtechs);
}

//6.- Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)