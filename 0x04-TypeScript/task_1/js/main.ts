interface Teacher  {
    readonly firstName: string;
    readonly lastName: string ;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
    [key: string] : any;
}

interface Directors extends Teacher {
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
const director: Directors = {
  firstName: 'John',
  lastName: "Doe",
  location: "Algeria",
  contract: false,
  fullTimeEmployee: true,
  numberOfReports: 17
}

console.log(teacher);
console.log(director);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"