/// <reference path="./Subject.ts" />
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingReact === undefined) {
        return "No available teacher";
      }
      return `Available teacher: ${this.teacher.firstName}`;
    }
  }
}
