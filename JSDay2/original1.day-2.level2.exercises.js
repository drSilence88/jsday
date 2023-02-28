//1.- Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let statement = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(statement)

//2.- Using console.log() print out the following quote by Mother Teresa:
let quote = "Love is not patronizing and charity isn't about pity, it is about love.Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote)

//3.- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = 10
let tenS = '10'
console.log(tenS === ten)
let tenI = parseInt(tenS)
console.log(typeof tenI === typeof ten)

//4.- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatS = '9.8'
console.log(floatS === ten)
let floatI = parseInt(floatS)
console.log(typeof floatI === typeof ten)

//5.- Check if 'on' is found in both python and jargon
let onPython = 'Python'
let onJargon = 'Jargon'
console.log(onPython.includes('on'));
console.log(onJargon.includes('on'));

//6.- I hope this course is not full of jargon. Check if jargon is in the sentence.
let setence = 'I hope this course is not full of jargon'
console.log(setence.includes('jargon'))

//7.- Generate a random number between 0 and 100 inclusively.
console.log(Math.round((Math.random() * (101))));

//8.- Generate a random number between 50 and 100 inclusively.
console.log(Math.round((Math.random() * (101 - 50) + 50)));

//9.- Generate a random number between 0 and 255 inclusively.
console.log(Math.round((Math.random() * (256))));

//10.- Access the 'JavaScript' string characters using a random number.
let randomCharacters = 'JavaScript'
console.log((randomCharacters.charAt(Math.random() * 10)));

/* 11.- Use console.log() and escape characters to print the following pattern.
* 1 1 1 1 1
* 2 1 2 4 8
* 3 1 3 9 27
* 4 1 4 16 64
* 5 1 5 25 125
*/
console.log(1 + " " + 1 + " " + 1 + " " + 1 + " " + 1 + "\n" +
    2 + " " + 1 + " " + 2 + " " + 4 + " " + 8 + "\n" +
    3 + " " + 1 + " " + 3 + " " + 9 + " " + 27 + "\n" +
    4 + " " + 1 + " " + 4 + " " + 16 + " " + 64 + "\n" +
    5 + " " + 1 + " " + 5 + " " + 25 + " " + 125)

//13.- Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sliceSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sliceSentence.substring(31, 55));
