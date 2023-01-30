import {
  IAttackLog,
  IMechAttackLog,
} from "../store/commanderAttackLog/IAttackLog";
import { utils, WorkBook } from "xlsx";

export const convertXlsxToAttackLog = (workbook: WorkBook): IAttackLog => {
  const damageSheet = utils.sheet_to_json(workbook.Sheets["damage"], {
    header: 1,
  });
  const critSheet = utils.sheet_to_json(workbook.Sheets["crit"], {
    header: 1,
  });
  return {
    mechs: getAllMechs(damageSheet, critSheet),
  } as any;
};

const getAllMechs = (damageSheet: any, critSheet: any): IMechAttackLog[] => {
  const allNames: string[] = [];
  if (Array.isArray(damageSheet)) {
    const damageNames = damageSheet.reduce((p, c) => [...p, c[3]], []);
    allNames.push(...damageNames);
  }
  if (Array.isArray(critSheet)) {
    const critNames = critSheet.reduce((p, c) => [...p, c[2]], []);
    allNames.push(...critNames);
  }

  return allNames
    .reduce((p, c) => (p.includes(c) ? p : [...p, c]), [])
    .map((t) => ({
      name: t,
      weapons: [],
    }));
};
