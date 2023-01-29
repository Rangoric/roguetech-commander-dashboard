import { read } from "xlsx";
import fs from "fs";

export const readXlsx = (fileName: string) => {
  const buffer = fs.readFileSync(fileName);
  return read(buffer);
};
