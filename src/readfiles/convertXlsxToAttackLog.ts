import {
  IAttackLog,
  IMechAttackLog,
} from "../store/commanderAttackLog/IAttackLog";
import { utils, WorkBook } from "xlsx";
import { IRawDamageAttackLog } from "./IRawAttackLog";

export const convertXlsxToAttackLog = (workbook: WorkBook): IAttackLog => {
  const damageSheet = utils.sheet_to_json<IRawDamageAttackLog>(
    workbook.Sheets["damage"]
  );
  return {
    mechs: getAllMechs(damageSheet),
  };
};

const getAllMechs = (damageSheet: IRawDamageAttackLog[]) => {
  const mechs: Record<string, IMechAttackLog> = {};

  damageSheet.forEach((record) => {
    const mech = insist(mechs, record.attacker, {
      name: record.attacker,
      weapons: {},
    });

    const weapon = insist(mech.weapons, record.weapon, {
      name: record.weapon,
      ammo: {},
    });

    const ammo = insist(weapon.ammo, record.ammo, {
      name: record.ammo,
      mode: {},
    });

    const mode = insist(ammo.mode, record.mode, {
      name: record.mode,

      attacks: 0,
      misses: 0,

      hits: 0,
      totalDamage: 0,
      averageDamage: 0,

      aoeHits: 0,
      totalAOEDamage: 0,
      averageAOEDamage: 0,

      otherHits: 0,
      totalDamageToOthers: -1,
      averageDamageToOthers: -1,
    });

    if (record["hit roll"] !== 0) {
      mode.attacks++;
      if (record.location !== `(65536)Ground`) {
        mode.hits++;
        mode.totalDamage += Math.floor(Math.max(1, +record.damage));
        mode.averageDamage =
          Math.round((mode.totalDamage / mode.hits) * 10) / 10;
      } else {
        mode.misses++;
      }
    } else {
      mode.aoeHits++;
      mode.totalAOEDamage += Math.floor(Math.max(1, +record.damage));
      mode.averageAOEDamage =
        Math.round((mode.totalAOEDamage / mode.aoeHits) * 10) / 10;
    }
  });

  return mechs;
};

const insist = <T>(collection: Record<string, T>, name: string, newItem: T) => {
  collection[name] = collection[name] ?? newItem;
  return collection[name];
};
