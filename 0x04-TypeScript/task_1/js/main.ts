interface Teacher  {
    readonly firstName: string;
    readonly lastName: string ;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
    [key: string] : any;
}

const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  yearsOfExperience: 2,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"