import { IAttackLog } from "../store/commanderAttackLog/IAttackLog";
import { WorkBook } from "xlsx";

export const convertXlsxToAttackLog = (workbook: WorkBook): IAttackLog => {
  return {
    damage: {},
    crit: {},
  };
};
