//import countries from "/Users/eduardo.home/JSBeginner/course/src/jstraining/JS30days/JSDay6/day-6.level2.exercises.js";
//1.- Copy countries array(Avoid mutation)
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

let avoidMuntation = countries.map(country => country);
console.log(avoidMuntation);
console.log(avoidMuntation === countries);

//2.- Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = countries.sort(country => country);
console.log(sortedCountries);
console.log(sortedCountries === countries);

//3.- Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

let mernStack = ["MongoDB",
    "Express",
    "React",
    "Node"
];

let webSort = webTechs.sort(lenguajes => lenguajes);
let mernSort = mernStack.sort(services => services);

console.log(webSort, mernSort);

//4.- Extract all the countries contain the word 'land' from the countries array and print it as array
let extactLand = countries.map(extract => {
    let total = [];
    if (extract.includes('land')) {
        return total.push();
    };
});

console.log(extactLand);