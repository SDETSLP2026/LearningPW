import fs from "fs"; // File System 
import Papa from "papaparse"; // To deal with CSV files

export function csvDDT():any
{
    //Step1: Get the file path
    //readFileSync() - Returns the contents of the path.
    let csvFileContent:string = fs.readFileSync("src/TestData/ddt_crmlogin.csv","utf-8");

    //Step2: Parse it using Papa object
    let result = Papa.parse(csvFileContent,{
        header:true, // If true, the first row of parsed data will be interpreted as field names.
        skipEmptyLines:true // If true, lines that are completely empty (those which evaluate to an empty string) will be skipped.
    }) //Parse local files: CSV to JSObject

    //Step3: Read that parsed data
    return result.data; //data property returns an array
    //ParseResult<unknown>.data: unknown[]
    //data - an array of rows. If header is false, rows are arrays; otherwise they are objects of data keyed by the field name.
}