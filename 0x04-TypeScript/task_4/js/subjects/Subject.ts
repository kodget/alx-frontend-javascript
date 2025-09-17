/// <reference path="./teacher.ts" />

namespace Subjects {
  export interface Teacher {}
  export class Subject implements Teacher {
    firstName: string;
    lastName: string;

    private teacher: Teacher;
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
