/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher!: Teacher; // definite assignment for strict TypeScript

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
