/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // ALX expects the setter method exactly like this
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}


