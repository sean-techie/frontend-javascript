// Interfaces
interface Teacher {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

interface Director extends Teacher {
  workDirectorTasks(): string;
}

// Classes
class DirectorClass implements Director {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }

  workTeacherTasks(): string {
    return ""; // Director doesn’t do teacher tasks
  }
}

class TeacherClass implements Teacher {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create employee
export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number") {
    return salary < 1000 ? new TeacherClass() : new DirectorClass();
  }
  return new DirectorClass(); // for string salaries like "$500"
}

// Type predicate
export function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work
export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// String literal type allowing only "Math" or "History"
cost Subjects: string[] = ["Math" | "History","Subjects"];

// Function that teaches the class using the Subjects type
export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Example usage
console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
