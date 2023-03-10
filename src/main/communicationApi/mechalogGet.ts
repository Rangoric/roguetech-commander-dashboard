import { getConfig } from "../config/config";
import {
  filterOutFileNames,
  getAllJsonFileNames,
  getAllJsonFromFiles,
} from "../mechalog/getAllJson";

export const mechalogGet = () => {
  console.log("Getting Mechalog");
  const config = getConfig();
  const fileNames = getAllJsonFileNames(config.rogueTechDirectory);
  console.log("Total File Count:", fileNames.length);

  const filteredNames = fileNames.filter(filterOutFileNames);

  console.log("Filtered File Count:", filteredNames.length);

  const files = getAllJsonFromFiles(filteredNames);
  return files;
};
