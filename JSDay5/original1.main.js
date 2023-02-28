// syntax : Using Array constructor
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

// syntax : Using square brackets([])
// This the most recommended way to create an empty list
const arra = []
console.log(arra)

const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits1 = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables1 = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts1 = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs1 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries1 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length
console.log('Numbers:', numbers1) //[ 0, 3.14, 9.81, 37, 98.6, 100 ]
console.log('Number of numbers:', numbers1.length) //6
console.log('Fruits:', fruits1) //[ 'banana', 'orange', 'mango', 'lemon' ]
console.log('Number of fruits:', fruits1.length) //4
console.log('Vegetables:', vegetables1) //[ 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot' ]
console.log('Number of vegetables:', vegetables1.length) //5
console.log('Animal products:', animalProducts1) //[ 'milk', 'meat', 'butter', 'yoghurt' ]
console.log('Number of animal products:', animalProducts1.length) //4
console.log('Web technologies:', webTechs1) //['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
console.log('Number of web technologies:', webTechs1.length) //7
console.log('Countries:', countries1) //[ 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland' ]
console.log('Number of countries:', countries1.length) //7


//Array can have items of different data types
const arr2 = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr2)

//Creating an array using split
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

//Accessing array items using index
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex1 = fruits.length - 1
lastFruit = fruits[lastIndex1]

console.log(lastFruit)  // lemon
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex2 = numbers.length - 1;
console.log(numbers[lastIndex2]) // -> 100
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // List of web technologies

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex3 = webTechs.length - 1
console.log(webTechs[lastIndex3]) // -> MongoDB
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
] // List of countries

console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex4 = countries.length - 1;
console.log(countries[lastIndex4]) //  -> Kenya
const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar


//Modifying array element
const numbers2 = [1, 2, 3, 4, 5]
numbers2[0] = 10      // changing 1 at index 0 to 10
numbers2[1] = 20      // changing  2 at index 1 to 20

console.log(numbers2) // [10, 20, 3, 4, 5]

const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

countries2[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
let lastIndexw = countries2.length - 1
countries2[lastIndexw] = 'Korea' // Replacing Kenya by Korea

console.log(countries)



//Check an element if it exist in an array.
//Check items in a list
// let us check if a banana exist in the array, else it returns -1.
const fruitsN = ['banana', 'orange', 'mango', 'lemon']
let index = fruitsN.indexOf('banana')  // 0
if (index === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

// we can use also ternary here
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array, else it returns -1.
let indexOfAvocado = fruitsN.indexOf('avocado')  // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array

//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const numbersS = [1, 2, 3, 4, 5, 6]
numbersS.splice(3, 3, 7, 8, 9)
console.log(numbersS.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items