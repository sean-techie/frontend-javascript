// Interfaces
interface Teacher {
  name: string;
  age: number;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// Functions to simulate work
function workTeacherTasks(): void {
  console.log("Getting to work");
}

function workDirectorTasks(): void {
  console.log("Getting to director tasks");
}

// Function to create an employee
function createEmployee(salary: number): Teacher | Director {
  if (salary < 1000) {
    return { name: "John", age: 30 };
  } else {
    return { name: "Alice", age: 45, numberOfReports: 5 };
  }
}

// Type predicate to check if employee is Director
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).numberOfReports !== un
