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

interface PrintTeacherFunction {
  firstName: string;
  lastName: string;
}
function printTeacher({firstName, lastName}: PrintTeacherFunction): void {
  const editedFirstName = firstName.slice(0, 1);
  console.log(`My first initial is ${editedFirstName} and my last name is ${lastName}`)
}
printTeacher({firstName: "Muhammad", lastName: "Ajuwon"});
console.log(teacher);
console.log(director);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"