/// <reference path="./teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC: number;
  }

  class Cpp extends Subject {
    firstName: string;
    lastName: string;
    experienceTeachingC: number;

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      if (
        this.experienceTeachingC === undefined ||
        this.experienceTeachingC === null
      ) {
        return "No available teacher";
      } else {
        return `Available teacher: ${this.firstName}`;
      }
    }
  }
}
