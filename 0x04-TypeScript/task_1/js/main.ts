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

// function printTeacher(firstName: string, lastName: string) {
//   const editedFirstName = firstName.slice(0, 1);
//   const newString: string = `My first initial is ${editedFirstName} and my last name is ${lastName}`
//   return newString;
// }
// printTeacher();

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}
const printTeacher = ({firstName, lastName}: printTeacherFunction): string => {
  return `My first initial is ${firstName.slice(0,1)} and my last name is ${lastName}`
  
}
printTeacher({firstName: "Muhammad", lastName: "Ajuwon"});