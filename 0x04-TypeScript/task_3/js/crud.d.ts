import { RowID, RowElement } from "./interface";

// export functions
declare function insertRow(row: RowElement);
declare function deleteRow(rowId: RowID);
declare function updateRow(rowId: RowID, row: RowElement);
