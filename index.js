///////////////CHP 14 to 16
//////////////////////////////////////// chapter 14-16/////////////////////////////////////////

///////////////////////////////////////ques 1 //////////////////////////////
let studentNames = [];
studentNames.push("John");
studentNames.push("Emily");
studentNames.push("Michael");
console.log(studentNames);

///////////////////////// ques 2 /////////////////////////////
let students = [];
students.push({ name: "John" });
students.push({ name: "Emily" });
students.push({ name: "Michael" });
console.log(students);

//////////////////// ques 3 ///////////////////////
let stringsArray = ["apple", "banana", "cherry", "date"];

console.log(stringsArray);
 
/////////////////////////// ques 4 //////////////////////////
let numbersArray = [10, 20, 30, 40, 50];
console.log(numbersArray);

//////////////////////// ques 5 ///////////////////////
 
let booleanArray = [true, false, true, false];
console.log(booleanArray);

///////////////////// ques 6 /////////////////

let mixedArray = [10, "apple", true, { name: "John", age: 25 }, null];
console.log(mixedArray);

////////////////////////////// ques 7 ////////////////////////////
let qualifications = [
    "SSC (Secondary School Certificate)",
    "HSC (Higher Secondary Certificate)",
    "BCS (Bachelor of Computer Science)",
    "BS (Bachelor of Science)",
    "BCOM (Bachelor of Commerce)",
    "MS (Master of Science)",
    "M. Phil. (Master of Philosophy)",
    "PhD (Doctor of Philosophy)"
];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write(`<li>${qualifications[i]}</li>`);
}
document.write("</ul>");
 
///////////////////////////////////// ques 8/////////////////////
let studentNames1 = ["Michael", "John", "Tony"];
let scores = [320, 230, 480];
const totalMarks = 500;
for (let i = 0; i < studentNames1.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    console.log(`Score of ${studentNames1[i]} is ${scores[i]}. Percentage is ${percentage}%`);
}

 
/////////////////////// ques 9 ///////////////////////////
let colors = ["Red", "Green", "Blue"];
document.write("<h3>Initial Array:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);
let colorToAddStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddStart);
document.write("<h3>After adding color to the beginning:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);
let colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("<h3>After adding color to the end:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);

// c. Add two more colors to the beginning of the array
colors.unshift("Yellow", "Orange");

// Display updated array after adding two more colors to the beginning
document.write("<h3>After adding two colors to the beginning:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);

// d. Delete the first color in the array
colors.shift();


document.write("<h3>After deleting the first color:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);

// e. Delete the last color in the array
colors.pop();


document.write("<h3>After deleting the last color:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);

// f. Add a color at a specific index based on user input
let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorToAddIndex = prompt("Enter the color to add:");


if (indexToAdd >= 0 && indexToAdd <= colors.length) {
    colors.splice(indexToAdd, 0, colorToAddIndex);
} else {
    alert("Invalid index! Color not added.");
}


document.write("<h3>After adding color at specific index:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);

// g. Delete colors at a specific index based on user input
let indexToDelete = parseInt(prompt("Enter the index to delete colors:"));
let numberOfColorsToDelete = parseInt(prompt("Enter number of colors to delete:"));


if (indexToDelete >= 0 && indexToDelete + numberOfColorsToDelete <= colors.length) {
    colors.splice(indexToDelete, numberOfColorsToDelete);
} else {
    alert("Invalid index or number of colors! Colors not deleted.");
}


document.write("<h3>After deleting colors at specific index:</h3>");
document.write(`<p>${colors.join(", ")}</p>`);

//(QUESTION 10)Write a program to store student scores in an array &
//sort the array in ascending order using Array’s sort method.


// let originalScores = [320, 230, 480, 120];
// let orderedScores = originalScores.slice().sort(function(a, b) {
//     return a - b;
// });
// let originalScoresString = "Original Scores of Students: " + originalScores.join(", ");
// let orderedScoresString = "Ordered Scores of Students: " + orderedScores.join(", ");
// document.write(originalScoresString + "<br>");
// document.write(orderedScoresString);




//(QUESTION 11)Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


// let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
// let selectedCities = [];
// selectedCities.push(cities[0]);
// selectedCities.push(cities[1]);
// selectedCities.push(cities[2]);
// console.log(selectedCities);


 //(QUESTION 12)Write a program to create a single string from the
//below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)

// var arr = ["This", "is", "my", "cat"];
// var result = arr.join(" ");
// console.log(result);

///////////////////////// ques 13 /////////////////////////
// Initialize an empty array to simulate a FIFO queue
let devicesQueue = [];


devicesQueue.push("keyboard");
devicesQueue.push("mouse");
devicesQueue.push("printer");
devicesQueue.push("monitor");

console.log("Devices:");
console.log(devicesQueue.join(", "));

while (devicesQueue.length > 0) {
   
    let device = devicesQueue.shift();
    console.log(`Out: ${device}`);
}
 ///////////////////////////////// ques 14 ///////////////////////////

let devicesStack = [];


devicesStack.push("keyboard");
devicesStack.push("mouse");
devicesStack.push("printer");
devicesStack.push("monitor");

console.log("Devices:");
console.log(devicesStack.join(", "));


while (devicesStack.length > 0) {
   
    let device = devicesStack.pop();
    console.log(`Out: ${device}`);
}


//(QUESTION 15) Write a program to store phone manufacturers (Apple,
//Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your
// browser using document.write() method:

// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// let selectHTML = '<select id="manufacturers">\n';
// for (let i = 0; i < phoneManufacturers.length; i++) {
//     selectHTML += '\t<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>\n';
// }
// selectHTML += '</select>';
// document.write(selectHTML);