interface Teacher  {
    readonly firstName: string;
    readonly lastName: string ;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
    [key: string] : any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  yearsOfExperience: 2,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
const director: Director = {
  firstName: 'John',
  lastName: "Doe",
  location: "Algeria",
  contract: false,
  fullTimeEmployee: true,
  numberOfReports: 17
}

interface printTeacherFunction {
  (firstName: string, lastName: string) : string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  firstName = firstName.slice(0,1);
  return `${firstName}. ${lastName}`
  
}
printTeacher("Muhammad", "Ajuwon");

interface StudentConstructor {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentConstructor {
  
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    
  }
  // workOnHomework method returns string "currently working"
  workOnHomework(): string {
    return "Currently working"
  }
  //  displayName method returns first name
   displayName(): string {
    return this.firstName
   }
}