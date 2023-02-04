//1.- Declare a function fullName and it print out your full name.
function fullName1() {
    console.log("Eduardo Garcia Carrillo");
}
fullName1();

//2.- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Eduardo", "Garcia Carrillo");

//3.- Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    return (num1 + num2);
}
console.log("Sum: " + addNumbers(2, 3));

//4.- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    let area = 0;
    return area = length * width;
}
console.log("Area: " + areaOfRectangle(2, 3));

//5.- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    let perimeter = 0;
    return perimeter = 2 * (length + width);
}
console.log("Perimeter: " + perimeterOfRectangle(2, 3));

//6.- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    let volume = 0;
    return volume = length * width * height;
}
console.log(volumeOfRectPrism(12, 3, 4));

//7.- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    let area = 0;
    return area = Math.PI * radius * radius;
}
console.log(areaOfCircle(3));

//8.- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
    let circumference = 0;
    return circumference = 2 * (Math.PI * radius);
}
console.log(circumOfCircle(5));

//9.- Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    let density = 0;
    return density = mass / volume;
}
console.log(density(5, 4));


//10.- Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
//Write a function which calculates a speed of a moving object, speed.
function objectSpeed(distance, time) {
    let speed = 0;
    return speed = time / distance;
}
console.log("Speed: " + objectSpeed(200, 1200));

//11.- Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
    let weight = 0;
    return weight = mass * gravity;
}
console.log("Weight: " + weight(80, 10));

