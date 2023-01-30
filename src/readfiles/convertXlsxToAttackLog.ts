import {
  IAttackLog,
  IMechAttackLog,
} from "../store/commanderAttackLog/IAttackLog";
import { utils, WorkBook } from "xlsx";

export const convertXlsxToAttackLog = (workbook: WorkBook): IAttackLog => {
  const damageSheet = utils.sheet_to_json(workbook.Sheets["damage"]);
  const critSheet = utils.sheet_to_json(workbook.Sheets["crit"]);
  console.log(damageSheet[0]);
  return {
    mechs: getAllMechs(damageSheet, critSheet),
  } as any;
};

const getAllMechs = (damageSheet: any, critSheet: any): IMechAttackLog[] => {
  const allNames: string[] = [];
  if (Array.isArray(damageSheet)) {
    const damageNames = damageSheet.map((t) => t["attacker"]);
    allNames.push(...damageNames);
  }
  if (Array.isArray(critSheet)) {
    const critNames = critSheet.map((t) => t["attacker"]);
    allNames.push(...critNames);
  }

  return allNames
    .reduce((p, c) => (p.includes(c) ? p : [...p, c]), [])
    .map((t) => ({
      name: t,
      weapons: [],
    }));
};
