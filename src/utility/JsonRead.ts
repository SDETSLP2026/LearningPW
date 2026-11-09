import fs from "fs";

export function readSingleJsonData(fileName:string, index:number):any
{
    let jsData=JSON.parse(fs.readFileSync(`src/TestData/${fileName}.json`,'utf-8'));
    return jsData[index];
}