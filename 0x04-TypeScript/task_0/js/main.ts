// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "Cape Town"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 23,
  location: "Johannesburg"
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create and render a table using Vanilla JS
const table: HTMLTableElement = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";
table.style.margin = "20px";
table.style.width = "300px";

// Add table header
const headerRow: HTMLTableRowElement = table.insertRow();
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";
headerCell1.style.fontWeight = "bold";
headerCell2.style.fontWeight = "bold";

// Add rows for each student
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;

  cell1.style.border = "1px solid black";
  cell2.style.border = "1px solid black";
  cell1.style.padding = "6px";
  cell2.style.padding = "6px";
});

// Append the table to the document body
document.body.appendChild(table);
