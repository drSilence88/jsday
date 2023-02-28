//Index
let edd = "string a"
for (let i in edd) {
    console.log(i);
}
//content
for (let j of edd) {
    console.log(j);
}

//convert to string
let str = "" + 1;
console.log(typeof str);
//convert to number
let stringToNumber = +"1" + 1;
console.log(stringToNumber);
let number = +"1" === 1;
console.log(number)

let foo = 42; // foo is now a number
console.log(typeof foo, foo);
foo = "bar"; // foo is now a string
console.log(typeof foo, foo);
foo = true; // foo is now a boolean
console.log(typeof foo, foo);


const sortT = [4, 2, 6, 8, 7, 3];
console.log(sortT.sort());

