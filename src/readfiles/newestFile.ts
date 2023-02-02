import fs from "fs";
import glob from "glob";

export const newestFile = (directory: string) =>
  glob
    .sync(`${directory}/*.xlsx`)
    .map((name) => ({ name, ctime: fs.statSync(name).mtimeMs }))
    .sort((a, b) => b.ctime - a.ctime)[0].name;
