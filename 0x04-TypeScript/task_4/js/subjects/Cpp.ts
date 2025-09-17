/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined) {
        return "No available teacher";
      } else {
        return `Available teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
