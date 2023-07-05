import { getConfig } from "../config/config";
import {
  filterOutFileNames,
  getAllJsonFileNames,
  getAllJsonFromFiles,
} from "../mechalog/getAllJson";
import { typeFiles } from "../mechalog/typeFiles";

export const mechalogGet = async () => {
  console.log("Getting Mechalog");
  const config = getConfig();
  const fileNames = getAllJsonFileNames(config.rogueTechDirectory);

  const start = Date.now();
  console.log("Total File Count:", fileNames.length);

  const files = await getAllJsonFromFiles(fileNames);
  const typedFiles = typeFiles(files);

  const end = Date.now() - start;
  console.log("Time Taken:", `${end / 1000}s`);

  return typedFiles;
};
