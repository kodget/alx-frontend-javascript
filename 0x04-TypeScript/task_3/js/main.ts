// triple-slash directives

/// <reference path="./crud.d.ts" />

// imports

import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

let row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salve",
};
let rowID: RowID = 125;

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowID = CRUD.updateRow(rowID, row);
CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);
