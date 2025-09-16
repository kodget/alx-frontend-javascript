// Instructions.

// Write an interface named Student that accepts the following elements:
//firstName(string), lastName(string), age(number), and location(string)

interface Student  {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students, and create an array named studentsList 
// containing the two variables

const muhammad: Student  = {
    firstName: "Muhammad",
    lastName: "Ajuwon",
    age: 19,
    location: "Ikeja"
}

const solihah: Student = {
    firstName: "Solihah",
    lastName: "AbdulHadi",
    age: 20,
    location: "Ojo"
}

const studentsList = [muhammad, solihah]

// Using Vanilla Javascript, render a table and for each elements 
// in the array, append a new row to the table



function renderTable() {
    const table = document.createElement("table");

    // Create header row
    const headingRow = document.createElement("tr");
    const firstHeader = document.createElement("th");
    firstHeader.textContent = "firstName";
    const lastHeader = document.createElement("th");
    lastHeader.textContent = "location";

    headingRow.appendChild(firstHeader);
    headingRow.appendChild(lastHeader);
    table.appendChild(headingRow);

    // Create a row for each student
    studentsList.forEach((student) => {
        const row = document.createElement("tr"); // new row each time
        const firstCell = document.createElement("td"); // new cell
        const lastCell = document.createElement("td");  // new cell

        firstCell.textContent = student.firstName;
        lastCell.textContent = student.location;

        row.appendChild(firstCell);
        row.appendChild(lastCell);

        table.appendChild(row); // append row to table
    });

    document.body.appendChild(table);
}

renderTable();
