document.write("Task 01");
var num1 = 3,
    num2 = 5;
sum = num1 + num2;

document.write("<br/><br/> Sum of " + num1 + " and " + num2 + " is " + sum);

document.write("Task 02");

multi = num1 * num2;

document.write("<br/><br/> Multi of " + num1 + " and " + num2 + " is " + multi);

division = num1 / num2;

document.write("<br/><br/> Division of " + num1 + " and " + num2 + " is " + division);

modulus = num1 % num2;

document.write("<br/><br/> Division of " + num1 + " and " + num2 + " is " + modulus);

document.write("<br/><br/><br/><br/>Task 03");
var value;

document.write("<br/><br/> The value after declaration is ", value)

value = 5;

document.write("<br/><br/> Initial value: ", value);

value++;

document.write("<br/><br/> Value after increment: ", value);

value += 7;

document.write("<br/><br/> Value after addition: ", value);

value--;

document.write("<br/><br/> Value after decrement: ", value);

rem = value % 3;

document.write("<br/><br/> The remainder is: ", rem);


document.write("<br/><br/><br/><br/>Task 04");

var ticketPrice = 600,
    totalPrice = ticketPrice * 5;

document.write("<br/><br/> Total cost of by 5 tickets: ", totalPrice + "PKR");


document.write("<br/><br/><br/><br/>Task 05");

document.write("<br/><br/> Table of 04");

document.write("<br/><br/>4 * 1 = 4");
document.write("<br/>4 * 2 = 8");;
document.write("<br/>4 * 3 = 12");
document.write("<br/>4 * 4 = 16");
document.write("<br/>4 * 5 = 20");
document.write("<br/>4 * 6 = 24");
document.write("<br/>4 * 7 = 28");
document.write("<br/>4 * 8 = 32");
document.write("<br/>4 * 9 = 36");
document.write("<br/>4 * 10 = 40");



document.write("<br/><br/><br/><br/>---->Task 06");

// Calcaulate temperature
var celsiusTemp = 25;
var fahrenheitTemp;

celsiusTempConversion = (celsiusTemp * 9 / 5) + 32;
fahrenheitTemp = (25 * 9 / 5) + 32;

document.write("<br/><br/>" + celsiusTemp + " is " + celsiusTempConversion);
document.write("<br/><br/>" + fahrenheitTemp + " is " + celsiusTemp);


document.write("<br/><br/><br/><br/>---->Task 07");

var priceOfItemOne = 650;
var quantityOfItemOne = 3;
var priceOfItemTwo = 100;
var quantityOfItemTwo = 7;
var shippingCharge = 100;

var totalCost = priceOfItemOne * quantityOfItemOne + priceOfItemTwo * quantityOfItemTwo + shippingCharge;

document.write("<br/><br/>" + totalCost);


document.write("<br/><br/><br/><br/>---->Task 08");

var totalMarks = 980;
var marksOptain = 804;

var percentage = (marksOptain / totalMarks) * 100;

document.write("<br/><br/>" + percentage + "%");



document.write("<br/><br/><br/><br/>---->Task 09");

var usToPak = 104;
var totalDoller = 10;

var riyalToPak = 28;
var totalRiyal = 25;

var totalPakRupees = (usToPak * totalDoller) + (riyalToPak * totalRiyal);

document.write("<br/><br/> Total Pakistan Currency Rupees: " + totalPakRupees)


document.write("<br/><br/><br/><br/>---->Task 10");

var arithmeticOperations = 5;

var calResult = (arithmeticOperations + 5) * 10 / 2
document.write("<br/><br/> Total: " + calResult);


document.write("<br/><br/><br/><br/>---->Task 11");

var currentYear = 2024;
var birthAge = 2003;
var myAge = currentYear - birthAge;
document.write("<br/><br/> Years Old: " + myAge);


document.write("<br/><br/><br/><br/>---->Task 12");

var diameter = 40;
var radius = diameter / 2;
document.write("<br/><br /> Radius: " + diameter);

var circumference = 2 * Math.PI * radius;

document.write("<br/><br /> Circumference: " + circumference);

var areaOfCircle = Math.PI * radius ** 2;

document.write("<br/><br /> Area: " + areaOfCircle);

document.write("<br/><br/><br/><br/>---->Task 13");

var age = 15;
var maxAge = 65;
var numPerDay = 3;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + ' chocolate chip to last you until the ripe  old age of ' + maxAge;
document.write("<br/><br/>" + message);