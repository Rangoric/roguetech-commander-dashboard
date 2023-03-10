import { read } from "xlsx";
import fs from "fs";
import { newestFile } from "./newestFile";

export const readXlsx = (fileName: string) => {
  const buffer = fs.readFileSync(fileName);
  return read(buffer);
};

export const readMostRecentXlsx = (directory: string, number = 10) => {
  const fileNames = newestFile(directory, number);
  return fileNames.map(readXlsx);
};

export const readAllXlsx = (directory: string) => {
  const something = fs.readdirSync(directory);
  return something.map((t) => readXlsx(directory + "\\" + t));
};

export const readRandomXlsx = (directory: string) => {
  const something = fs.readdirSync(directory);
  const randomResult = Math.floor(Math.random() * something.length);
  return [readXlsx(directory + "\\" + something[randomResult])];
};
