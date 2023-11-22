import glob from "glob";
import fs from "fs";
import { getConfig } from "../config";

export const getBattleReportList = () =>
  glob
    .sync(`${getConfig().xlsxAttackLogs}/*.xlsx`)
    .map((name) => ({ name, ctime: fs.statSync(name).mtimeMs }))
    .sort((a, b) => b.ctime - a.ctime)
    .map((t) => t.name.replace(getConfig().xlsxAttackLogs, ""));
