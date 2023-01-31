import {
  IAttackLog,
  IMechAttackLog,
  IWeaponAttackLog,
} from "../store/commanderAttackLog/IAttackLog";
import { utils, WorkBook } from "xlsx";
import { IRawCritAttackLog, IRawDamageAttackLog } from "./IRawAttackLog";

export const convertXlsxToAttackLog = (workbook: WorkBook): IAttackLog => {
  const damageSheet = utils.sheet_to_json<IRawDamageAttackLog>(
    workbook.Sheets["damage"]
  );
  const critSheet = utils.sheet_to_json<IRawCritAttackLog>(
    workbook.Sheets["crit"]
  );
  return {
    mechs: getAllMechs(damageSheet, critSheet),
  };
};

const getAllMechs = (
  damageSheet: IRawDamageAttackLog[],
  critSheet: IRawCritAttackLog[]
) => {
  const mechs: Record<string, IMechAttackLog> = {};

  damageSheet.forEach((record) => {
    if (!mechs[record.attacker]) {
      mechs[record.attacker] = {
        name: record.attacker,
        weapons: [],
      };
    }

    let foundWeapon = mechs[record.attacker].weapons.find(
      byWeaponFiring(record)
    );
    if (!foundWeapon) {
      foundWeapon = {
        name: record.weapon,
        ammo: record.ammo,
        mode: record.mode,
        attacks: 0,
        misses: 0,

        hits: 0,
        totalDamage: 0,
        averageDamage: -1,

        aoeHits: 0,
        totalAOEDamage: 0,
        averageAOEDamage: 0,

        otherHits: 0,
        totalDamageToOthers: -1,
        averageDamageToOthers: -1,

        attackId: -1,
      };
      mechs[record.attacker].weapons.push(foundWeapon);
    }

    if (record["hit roll"] !== 0) {
      foundWeapon.attacks++;
      if (record.location !== `(65536)Ground`) {
        foundWeapon.hits++;
        foundWeapon.totalDamage += +record.damage;
        foundWeapon.averageDamage = foundWeapon.totalDamage / foundWeapon.hits;
      } else {
        foundWeapon.misses++;
      }
    } else {
      foundWeapon.aoeHits++;
      foundWeapon.totalAOEDamage += Math.floor(Math.max(1, +record.damage));
    }
  });

  return mechs;
};

const byWeaponFiring =
  (rawLog: IRawDamageAttackLog) => (weapon: IWeaponAttackLog) =>
    weapon.name === rawLog.weapon &&
    weapon.ammo === rawLog.ammo &&
    weapon.mode === rawLog.mode;
