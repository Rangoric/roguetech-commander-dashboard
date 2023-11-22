import { getConfig } from "../config";
import fs from "fs";
import {
  IAttackLog,
  ICritAttackLog,
  IDamageAttackLog,
} from "src/shared/types/IAttackLog";
import { read, utils } from "xlsx";

export const getBattleReport = (fileName: string): IAttackLog => {
  const config = getConfig().xlsxAttackLogs;
  const buffer = fs.readFileSync(`${config}/${fileName}`);
  const workbook = read(buffer);
  return {
    damage: utils.sheet_to_json<IDamageAttackLog>(workbook.Sheets["damage"]),
    crits: utils.sheet_to_json<ICritAttackLog>(workbook.Sheets["crits"]),
  };
};
