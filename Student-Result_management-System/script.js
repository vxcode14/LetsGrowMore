// Create an array to store student data
var students = [];

// Get references to HTML elements
var studentForm = document.getElementById("student-form");
var resultTable = document.getElementById("result-table");

// Add a new student to the array and update the table
function addStudent() {
	// Get the values from the form
	var name = document.getElementById("name").value;
	var roll = document.getElementById("roll").value;
	var maths = parseInt(document.getElementById("maths").value);
  var science = parseInt(document.getElementById("science").value);
var english = parseInt(document.getElementById("english").value);

// Calculate the total and percentage
var total = maths + science + english;
var percentage = (total / 300) * 100;

// Determine the grade based on the percentage
var grade;
if (percentage >= 90) {
	grade = "A+";
} else if (percentage >= 80) {
	grade = "A";
} else if (percentage >= 70) {
	grade = "B+";
} else if (percentage >= 60) {
	grade = "B";
} else if (percentage >= 50) {
	grade = "C+";
} else if (percentage >= 40) {
	grade = "C";
} else {
	grade = "F";
}

// Add the student data to the array
students.push({
	name: name,
	roll: roll,
	maths: maths,
	science: science,
	english: english,
	total: total,
	percentage: percentage,
	grade: grade
});

// Clear the form
studentForm.reset();

// Update the table
updateTable();
}

// Update the table with the latest student data
function updateTable() {
// Clear the existing table rows
resultTable.innerHTML = "<tr><th>Name</th><th>Roll Number</th><th>Maths</th><th>Science</th><th>English</th><th>Total</th><th>Percentage</th><th>Grade</th></tr>";
// Loop through the students array and add a new row for each student
for (var i = 0; i < students.length; i++) {
	var student = students[i];
	resultTable.innerHTML += "<tr><td>" + student.name + "</td><td>" + student.roll + "</td><td>" + student.maths + "</td><td>" + student.science + "</td><td>" + student.english + "</td><td>" + student.total + "</td><td>" + student.percentage.toFixed(2) + "%</td><td>" + student.grade + "</td></tr>";
}
}
