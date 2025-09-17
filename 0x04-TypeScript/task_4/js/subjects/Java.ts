/// <reference path="./teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class Java extends Subject {
    firstName: string;
    lastName: string;
    experienceTeachingC: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    getAvailableTeacher(): string {
      if (
        this.experienceTeachingJava === undefined ||
        this.experienceTeachingJava === null
      ) {
        return "No available teacher";
      } else {
        return `Available teacher: ${this.firstName}`;
      }
    }
  }
}
