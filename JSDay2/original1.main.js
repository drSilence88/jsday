let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let userTwo = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

console.log(userOne == userTwo) // false

// Equals
let nums1 = [1, 2, 3]
let numbers1 = nums1

console.log(nums1 == numbers1)  // true

let userOne1 = {
    name: 'Asabeneh',
    role: 'teaching',
    country: 'Finland'
}

let userTwo1 = userOne1

console.log(userOne1 == userTwo)  // true


//Numbers
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI1 = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI1, boilingPoint, bodyTemp)

//Math Objetcs
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

//strings
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

console.log(quote)
console.log(quotWithBackTick)
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
console.log(personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

//Escape Sequences in Strings
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t\t5')
console.log('Day 2\t3\t\t5')
console.log('Day 3\t3\t\t5')
console.log('Day 4\t3\t\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`)

//String Methods
let js = 'JavaScript'
console.log(js.length)         // 10
console.log(firstName.length)  // 8

//Accessing characters in a string: 
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

//toUpperCase()
console.log(string.toUpperCase())     // JAVASCRIPT

console.log(firstName.toUpperCase())  // ASABENEH

console.log(country.toUpperCase())    // FINLAND

//substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(string.substr(4, 6))    // Script
console.log(country.substr(3, 4))   // land

//substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(0, 4))     // Java
console.log(string.substring(4, 10))    // Script
console.log(string.substring(4))       // Script

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

//split(): The split method splits a string at a specified place.
let string1 = '30 Days Of JavaScript'

console.log(string1.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string1.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//trim(): Removes trailing space in the beginning or the end of a string.
let string2 = '   30 Days Of JavaScript   '

console.log(string2)
console.log(string2.trim(' '))

let firstName2 = ' Asabeneh '

console.log(firstName2)
console.log(firstName2.trim())  // still removes spaces at the beginning and the end of the string

//includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

console.log(string1.includes('Days'))     // true
console.log(string1.includes('days'))     // false - it is case sensitive!
console.log(string1.includes('Script'))   // true
console.log(string1.includes('script'))   // false
console.log(string1.includes('java'))     // false
console.log(string1.includes('Java'))     // true

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false

//replace(): takes as a parameter the old substring and a new substring.
console.log(string1.replace('JavaScript', 'Python')) // 30 Days Of Python

console.log(country.replace('Fin', 'Noman'))       // Nomanland

//charAt(): Takes index and it returns the value at that index
console.log(string1.charAt(0))        // 3

console.log(string.charAt(lastIndex)) // t

//charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
console.log(string1.charCodeAt(3))        // D ASCII number is 68

let lastIndex1 = string.length - 1
console.log(string.charCodeAt(lastIndex1)) // t ASCII is 116

//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(string1.indexOf('D'))          // 3
console.log(string1.indexOf('Days'))       // 3
console.log(string1.indexOf('days'))       // -1
console.log(string1.indexOf('a'))          // 4
console.log(string1.indexOf('JavaScript')) // 11
console.log(string1.indexOf('Script'))     //15
console.log(string1.indexOf('script'))     // -1

//lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
let string3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string3.lastIndexOf('love'))       // 67
console.log(string3.lastIndexOf('you'))        // 63
console.log(string3.lastIndexOf('JavaScript')) // 38

//concat(): it takes many substrings and joins them.
let string4 = '30'
console.log(string4.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country1 = 'Fin'
console.log(country1.concat("land")) // Finland

//startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
let string5 = 'Love is the best to in this world'

console.log(string5.startsWith('Love'))   // true
console.log(string5.startsWith('love'))   // false
console.log(string5.startsWith('world'))  // false

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false

//endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
let string6 = 'Love is the most powerful feeling in the world'

console.log(string6.endsWith('world'))         // true
console.log(string6.endsWith('love'))          // false
console.log(string6.endsWith('in the world')) // true

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false

//search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
let string7 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string7.search('love'))          // 2
console.log(string7.search(/javascript/gi))  // 7

//match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string8 = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
let string9 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string9.match('love'))
let pattern = /love/gi
console.log(string9.match(pattern))   // ["love", "love", "love"]
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

//repeat(): it takes a number as argument and it returns the repeated version of the string.
let string10 = 'love'
console.log(string10.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

//Checking Data Types and Casting
// Different javascript data types
// Let's declare different data types
let job1                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job1)        // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

//Changing Data Type (Casting). We use parseInt(), parseFloat(), Number(), + sign, str() 
let num1 = '10'
numInt = parseInt(num1)
console.log(numInt) // 10

numInt = Number(num1)
console.log(numInt) // 10

numInt = +num1
console.log(numInt) // 10