document.write("----> Task 01");
var num = 10;
document.write("<br/><br/>The value of a is: " + num);

document.write("<br/><br/><----------------------------------------->");

++num;
document.write("<br/><br/>The value of ++a is: " + num);
document.write("<br/><br/>Now the value of a is: " + num);

document.write("<br/><br/><----------------------------------------->");


document.write("<br/><br/>The value of a++ is: " + num);
num++;
document.write("<br/><br/>Now the value of a is: " + num);

document.write("<br/><br/><----------------------------------------->");

--num;
document.write("<br/><br/>The value of --a is: " + num);
document.write("<br/><br/>Now the value of a is: " + num);

document.write("<br/><br/><----------------------------------------->");

document.write("<br/><br/>The value of ++a is: " + num);
num--;
document.write("<br/><br/>Now the value of a is: " + num);

document.write("<br/><----------------------------------------->");


document.write("<br/><br/><br/><br/>----> Task 02");

var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;

document.write("<br/><br/>The value of a is: " + a);
document.write("<br/><br/>The value of b is: " + b);
document.write("<br/><br/>The value of result is: " + result);


document.write("<br/><br/><br/><br/><----------------------------------------->");


document.write("<br/><br/><br/><br/>----> Task 03");

// User input for name of user

var name = prompt("Enter your name: ");
document.write("<br/><br/> Hello " + name + " Welcome to JavaScipt Page.");


document.write("<br/><br/><br/><br/><----------------------------------------->");

document.write("<br/><br/><br/><br/>----> Task 04");

document.write("<br/><br/> Subject total Marks Obtained Marks Percentage");

var subject01 = prompt("Enter Course name one: ")
var subject02 = prompt("Enter Course name two: ");
var subject03 = prompt("Enter Course name three: ");

var totalMarksOfSubject = 100;
var totalMarks = totalMarksOfSubject * 3;

var markOfCourseOne = +prompt("Enter marks of English optain: ");
var markOfCourseTwo = +prompt("Enter marks of Math optain: ");
var markOfCourseThree = +prompt("Enter marks of Urdu optain: ");

var obtainedMarks = markOfCourseOne + markOfCourseTwo + markOfCourseThree;

var percentageCourseOne = (markOfCourseOne / totalMarksOfSubject) * 100;
var percentageCourseTwo = (markOfCourseTwo / totalMarksOfSubject) * 100;
var percentageCourseThree = (markOfCourseThree / totalMarksOfSubject) * 100;

var totalPercentages = (obtainedMarks / totalMarks) * 100;

document.write("<br/>" + subject01 + "     " + totalMarksOfSubject + "        " + markOfCourseOne + "        " + percentageCourseOne + "%");

document.write("<br/>" + subject02 + "     " + totalMarksOfSubject + "        " + markOfCourseTwo + "        " + percentageCourseTwo + "%");

document.write("<br/>" + subject03 + "     " + totalMarksOfSubject + "        " + markOfCourseThree + "      " + percentageCourseThree + "%");

document.write("<br/>Whole Result: " + totalMarks + "        " + obtainedMarks + "      " + totalPercentages + "%");