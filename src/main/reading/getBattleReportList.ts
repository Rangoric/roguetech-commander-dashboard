import glob from "glob";
export const getBattleReportList = (directory: string) => {
  return glob
    .sync(`${directory}/*.xlsx`)
    .map((name) => ({ name, ctime: fs.statSync(name).mtimeMs }))
    .sort((a, b) => b.ctime - a.ctime);
};
