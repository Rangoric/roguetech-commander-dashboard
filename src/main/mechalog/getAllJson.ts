import fs from "fs";
import path from "path";
import json5 from "json5";

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

export const getAllJsonFromFiles = (paths: string[]) => {
  return paths
    .map((t) => {
      if (typeof t === "string") {
        console.log(t);
        return {
          fileName: t,
          content: json5.parse(fs.readFileSync(t, "utf-8")),
        };
      }
      return null;
    })
    .filter((t) => t);
};

const fileNamesToIgnore = ["\\mod.json"];

export const filterOutFileNames = (paths: string) => {
  return !fileNamesToIgnore.find((t) => paths.endsWith(t));
};
