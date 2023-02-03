//1.- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*let trianguleBase = prompt('Enter base', 'base number goes here');
let trianguleHeight = prompt('Enter base', 'height number goes here');
let areaOfTriangule = 0.5 * trianguleBase * trianguleHeight;
prompt('The area of the triangule is : ', areaOfTriangule);
*/

//2.- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*let sideA = prompt('Enter sideA ', 'side A goes here');
let sideB = prompt('Enter sideB ', 'side B goes here');
let sideC = prompt('Enter sideC ', 'side C goes here');
let perimeterOfTriangule = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
prompt('The perimeter of the traingule is: ', perimeterOfTriangule);
*/

//3.- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/* let lengthR = prompt('length');
let widthR = prompt('width');
prompt('The area of the rentangule is: ', lengthR * widthR);
prompt('The perimeter of the rentangule is: ', 2 * (parseInt(lengthR) + parseInt(widthR))); */

//4.- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/* let radius = prompt('radius');
let calculateAreaCircle = Math.PI * radius * radius;
prompt('The area of a cicle is: ', calculateAreaCircle);
let circunferenceCircle = 2 * Math.PI * radius;
prompt('The circunference of the circle is: ', circunferenceCircle); */

//5.- Calculate the slope, x-intercept and y-intercept of y = 2x -2: https://virtualnerd.com/algebra-1/linear-equation-analysis/intercept/intercept-examples/x-y-intercepts-from-slope-intercept
// y = 0; 0 + 2 = 2x; 2/2 = x; 1 = x; x = (1,0);
// x = 0; y = 2 * 0 - 2; y = 0 -2; y = -2; y = (0,-2); 
let y0 = 1, y01 = 0, x0 = 0, x01 = -2;
let m0 = (y01 - y0) / (x01 - x0);
console.log(m0);

//6.- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1 = 2, y2 = 2, x1 = 10, x2 = 6;
let m = (y2 - y1) / (x2 - x1);
console.log(m)

//8- Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let y = 0;
let calculateValueOfY = Math.sqrt(y, 2);

//9.- Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/* let hours = prompt('Enter hours:');
let rate = prompt('Enter rate per hour: ');
let weeklyEarning = hours * rate;
prompt(weeklyEarning); */

//10.- If the length of your name is greater than 7 say, your name is long else say your name is short.
/* let nameGreater = prompt('Name');
if (nameGreater.length <= 7) {
    prompt(nameGreater);
} else {
    let nickname = prompt('your name is long, say your name in short')
    prompt('nickname', nickname);
} */

//11.- Compare your first name length and your family name length and you should get this output.
/* let firstNameLength = prompt('Fisrtname');
let lastNameLength = prompt('LastName');
if (firstNameLength.length >= lastNameLength.length) {
    prompt(`Your first name, ${firstNameLength} is longer than your family name, ${lastNameLength}`);
} else {
    prompt(`Your family name, ${lastNameLength} is longer than your first name, ${firstNameLength}`);
} */

//12.- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
/* let myAge = 250
let yourAge = 25
let older = myAge - yourAge;
prompt(`I am ${older} older than you.`); */

//13.- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/* const yearsOld = 18;
const year = prompt('Enter birth year:');
const date = new Date();
let yearAge = date.getFullYear() - parseInt(year);
let afterYears = yearsOld - yearAge;
if (yearAge >= yearsOld) {
    prompt(`You are ${yearAge}. You are old enough to drive`);
} else {
    prompt(`You are ${yearAge}. You will be allowed to drive after ${afterYears} years.`)
} */

//14.- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/* const numberOfYears = prompt('Enter the number of years you live');
let yearsToSeconds = 60 * 60 * 24 * 365 * numberOfYears;
console.log(`You lived ${yearsToSeconds} seconds`); */

//15.- Create a human readable time format using the Date time object
let dateHumanReadable = new Date();
let year = dateHumanReadable.getFullYear();
let month = dateHumanReadable.getMonth();
let day = dateHumanReadable.getDay();
let hour = dateHumanReadable.getHours();
let minute = dateHumanReadable.getMinutes();
console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute);
console.log(day + "-" + month + "-" + year + " " + hour + ":" + minute);
console.log(day + "/" + month + "/" + year + " " + hour + ":" + minute);