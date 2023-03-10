import { IMechAttackLog } from "./IAttackLog";

export const totalMechDamage = (mech: IMechAttackLog) => {
  let totalDamage = 0;
  for (const weaponName in mech.weapons) {
    const weapon = mech.weapons[weaponName];
    for (const ammoName in weapon.ammo) {
      const ammo = weapon.ammo[ammoName];
      for (const modeName in ammo.mode) {
        const mode = ammo.mode[modeName];
        totalDamage += mode.totalDamage;
        totalDamage += mode.totalAOEDamage;
      }
    }
  }
  return totalDamage;
};
