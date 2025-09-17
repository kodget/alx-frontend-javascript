// triple-slash directives

/// <reference path="./crud.d.ts" />

// imports

import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salve",
};
let rowID: RowID = 125;

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = CRUD.updateRow(rowID, row);
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
