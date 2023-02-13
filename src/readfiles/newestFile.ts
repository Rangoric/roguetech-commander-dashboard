import fs from "fs";
import glob from "glob";

export const newestFile = (directory: string, number: number) =>
  glob
    .sync(`${directory}/*.xlsx`)
    .map((name) => ({ name, ctime: fs.statSync(name).mtimeMs }))
    .sort((a, b) => b.ctime - a.ctime)
    .slice(0, number)
    .map((t) => t.name);
