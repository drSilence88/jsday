export default
    //1.-Develop a small script which generate any number of characters random id:
    function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(makeId(18));

//2.- Write a script which generates a random hexadecimal number.
function makeHexId(length) {
    var result = '';
    const hex = '0123456789abcdef';
    var charactersLength = hex.length;
    for (var i = 0; i < length; i++) {
        result += hex.charAt(Math.floor(Math.random() * charactersLength));
    }
    return '#' + result;
}
console.log(makeHexId(6));

//3.- Write a script which generates a random rgb color number.
function rgbGenerator() {
    var result = "";
    for (var i = 0; i < 3; i++) {
        result += Math.floor(Math.random() * 257) + ", ";
    }
    return "rgb" + "(" + result + ")";
}

console.log(rgbGenerator());

//4.- Using the above countries array, create the following new array.
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
    'Iceland',
    'Japan',
    'Kenya'
]

let result = "";
let result1 = "";
let result2 = countries.map(element => element.toUpperCase());
for (let i of countries) {
    result += i.toUpperCase() + ", ";
}
for (let f = 0; f < countries.length; f++) {
    result1 += countries[f].toUpperCase() + ", ";
}
console.log(result);
console.log(result1);
console.log(result2);

//5.- Using the above countries array, create an array for countries length'.
let lenCount = countries.map(element => element.length);
let lenCount1 = "";
for (let i of countries) {
    lenCount1 += i.length + ",";
}

let lenCount2 = "";
for (let i = 0; i < countries.length; i++) {
    lenCount2 += countries[i].length + ",";
}
console.log(lenCount);
console.log(lenCount1);
console.log(lenCount2);

//6.- Use the countries array to create the following array of arrays:
let arrayS = "";
for (let i = 0; i < countries.length; i++) {
    arrayS += "[" + countries[i] + ", " + countries[i].slice(0, 3).toUpperCase() + ", " + countries[i].length + "]" + ",\n";
}

console.log(arrayS);

//7.- In above countries array, check if there is a country or countries containing the word 'land'. 
//If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let arrCountries = [];
let arrCountriesWithout = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
        arrCountries.push(countries[i]);
    }
    else if (!countries[i].includes('land')) {
        arrCountriesWithout.push(countries[i]);
    }
}
console.log(arrCountries);
console.log('All these countries are without land');
console.log(arrCountriesWithout);

//8.- In above countries array, check if there is a country or countries end with a substring 'ia'. 
//If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let iaCountries = [];
let iaCountriesWithout = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('ia')) {
        iaCountries.push(countries[i]);
    }
    else if (!countries[i].includes('ia')) {
        iaCountriesWithout.push(countries[i]);
    }
}

console.log(iaCountries);
console.log('All these countries are without ia');
console.log(iaCountriesWithout);

//9.-Using the above countries array, find the country containing the biggest number of characters.
let biggerCountryLetters = [];
let number = Number.MIN_VALUE;
for (let i = 0; i < countries.length; i++) {
    if (number < countries[i].length) {
        number = countries[i].length;
        biggerCountryLetters = countries[i];
    }
}

console.log(biggerCountryLetters);

//10.- Using the above countries array, find the country containing only 5 characters.
let charCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        charCountries.push(countries[i]);
    }
}

console.log(charCountries);

//11.- Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

let longest = [];
for (let i = 0; i < webTechs.length; i++) {
    if (number < webTechs[i].length) {
        number = webTechs[i].length;
        longest.push(webTechs[i]);
    }
}

console.log(longest);

//12.-Use the webTechs array to create the following array of arrays:
let arrWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    arrWebTechs.push(webTechs[i], webTechs[i].length);
}

console.log(arrWebTechs);

//13.- An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStack = ["MongoDB",
    "Express",
    "React",
    "Node"
];

let acronym = [];
for (let i = 0; i < mernStack.length; i++) {
    acronym += mernStack[i].charAt(0);
}
console.log(acronym);

//14.- Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i]);
}

//15.- This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon'];
for (let i = fruit.length - 1; i >= 0; i--) {
    console.log(fruit[i]);
}

//16.- Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

let toUCase = [];
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        toUCase += fullStack[i][j].toUpperCase().concat("\n");
    }
}

console.log(toUCase);
