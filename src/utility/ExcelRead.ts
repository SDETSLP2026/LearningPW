import XLSX from "xlsx";
export function readExcelFileSheetwise(sheetname:string,index:number):any
{
    //Step 1: Open file explorer and create a XLSX file with test data

    //Step 2: WB => WS => Read the excel data
    //Read the file --> WorkBook
    let wb = XLSX.readFile("src/TestData/crmlogin.xlsx");

    //WorkBook --> WorkSheet - A dictionary of the worksheets in the workbook. Use SheetNames to reference these.
    let ws = wb.Sheets[sheetname];

    //Utility --> WorkSheet --> Data
    let jsonResult = XLSX.utils.sheet_to_json(ws); //Converts a worksheet object to an array of JSON objects
    
    //From array specific row we are returning
    return jsonResult[index];
}