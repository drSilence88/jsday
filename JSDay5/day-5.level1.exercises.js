//1.- Declare an empty array;
let arr = [];

//2.- Declare an array with more than 5 number of elements
const arrayFive = [6, 5, 4, 5, 4, 2, 4, 3, 2, 1, 5];

//3- Find the length of your array
console.log(arr.length + " " + arrayFive.length);

//4.- Get the first item, the middle item and the last item of the array
console.log(arrayFive[0] + " " + arrayFive[arrayFive.length / 2 | 0] + " " + arrayFive[arrayFive.length - 1]);

/*5.- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
The array size should be greater than 5 */
const mixedDataTypes = ['edd', 5, "Hola Mundo", 44.2, 4, 'leez'];
console.log(mixedDataTypes.length);

//6.- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


//7.- Print the array using console.log()
console.log(itCompanies);

//8.- Print the number of companies in the array
console.log(itCompanies.length);

//9.- Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[itCompanies.length / 2 | 0], itCompanies[itCompanies.length - 1]);

//10.- Print out each company
console.log(itCompanies);

//11.- Change each company name to uppercase one by one and print them out
const it = [];
itCompanies.forEach(item => { it.push(item.toUpperCase()); });
console.log(it);

//12.- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const lastCompanie = itCompanies.pop();
console.log(itCompanies.join(', ') + " and " + lastCompanie + " are big IT companies.");

//13.- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let findCompany = 'IB';
const found = itCompanies.find(el => el === findCompany.toString());
function foundCompany(found) {
    if (found === findCompany) {
        return found;
    } else {
        return 'Company not found';
    }
}
console.log(foundCompany(found));

//14.- Filter out companies which have more than one 'o' without the filter method
// for (let i = 0; i < itCompanies.length; i++) {
//     let doubleOO = itCompanies[i];
//     if (doubleOO[i] === 'o') {
//         console.log(itCompanies[i]);
//     }
// }
function filterItems(itCompanies, query) {
    return itCompanies.filter(el => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(itCompanies, 'o'));

//15.- Sort the array using sort() method
console.log(itCompanies.sort());

//16.- Reverse the array using reverse() method
console.log(itCompanies.reverse());

//17.- Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

//18.- Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3));

//19.- Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(2, 4));

//20.- Remove the first IT company from the array
itCompanies.shift(); //itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);

//21.- Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length / 2 | 0);
console.log(itCompanies);

//22.- Remove the last IT company from the array
itCompanies.pop(itCompanies.length);
console.log();

//23.- Remove all IT companies
//itCompanies.remove(itCompanies.length);
itCompanies.splice(0, itCompanies.length);
//itCompanies.length = 0;
//while (itCompanies.length) { itCompanies.pop(); }
console.log(itCompanies + "2");