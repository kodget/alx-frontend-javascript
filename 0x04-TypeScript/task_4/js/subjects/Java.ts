/// <reference path="./teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class React implements Teacher {
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
        this.experienceTeachingReact === undefined ||
        this.experienceTeachingReact === null
      ) {
        return "No available teacher";
      } else {
        return `Available teacher: ${this.firstName}`;
      }
    }
  }
}
