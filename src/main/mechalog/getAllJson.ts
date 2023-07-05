import fs from "fs";
import path from "path";
import json5 from "json5";
import util from "util";

const readFile = util.promisify(fs.readFile);

export const getAllJsonFileNames = (directoryPath: string): string[] => {
  const objectNames = fs.readdirSync(directoryPath);

  const mappedItems = objectNames.map((objectName) => {
    if (fs.statSync(directoryPath + "/" + objectName).isDirectory()) {
      return getAllJsonFileNames(directoryPath + "/" + objectName);
    }
    return path.join(directoryPath, "/", objectName);
  });

  const strings = mappedItems
    .filter((t) => typeof t === "string")
    .map((t) => t as string)
    .filter((t) => t.endsWith(".json"));
  const arrays = mappedItems
    .filter((t) => Array.isArray(t))
    .map((t) => t as string[]);

  return arrays.reduce((p, c) => [...p, ...c], strings);
};

export const getAllJsonFromFiles = async (paths: string[]) => {
  const allContents = [];
  for (let fileName of paths.filter((t) => typeof t === "string")) {
    allContents.push(await readFile(fileName, "utf-8"));
  }

  return allContents.map((item, index) => ({
    fileName: paths[index],
    content: json5.parse(item),
  }));
};

const fileNamesToIgnore: string[] = [];

export const filterOutFileNames = (paths: string) => {
  return !fileNamesToIgnore.find((t) => paths.endsWith(t));
};
