import {
  IMechAttackLog,
  IWeaponAttackLog,
} from "../store/commanderAttackLog/IAttackLog";
import { MechOverallPie } from "./MechOverallPie";

export interface IMechPieDisplayProps {
  mech: IMechAttackLog;
}

export const MechPieDisplay = ({ mech }: IMechPieDisplayProps) => {
  const data = getPieDataFrom(mech.weapons);
  const overallData = data
    .filter((t) => t.overallTotalDamage > 0)
    .map(({ id, totalDamage, totalAoeDamage }) => ({
      id,
      data: [
        {
          x: "Normal Damage",
          y: totalDamage,
        },
        {
          x: "AoE Damage",
          y: totalAoeDamage,
        },
      ],
    }));

  return <MechOverallPie data={overallData} />;
};

const getPieDataFrom = (weapons: Record<string, IWeaponAttackLog>) => {
  const results = getSortedData(weapons);
  return results;
};

const getSortedData = (weapons: Record<string, IWeaponAttackLog>) => {
  const result = Object.keys(weapons)
    .map((weaponName) =>
      Object.keys(weapons[weaponName].ammo)
        .map((ammoName) =>
          Object.keys(weapons[weaponName].ammo[ammoName].mode).map(
            (modeName) => ({
              id: getLabelFrom(weaponName, ammoName, modeName),
              totalDamage:
                weapons[weaponName].ammo[ammoName].mode[modeName].totalDamage,
              totalAoeDamage:
                weapons[weaponName].ammo[ammoName].mode[modeName]
                  .totalAOEDamage,
              overallTotalDamage:
                weapons[weaponName].ammo[ammoName].mode[modeName].totalDamage +
                weapons[weaponName].ammo[ammoName].mode[modeName]
                  .totalAOEDamage,
            })
          )
        )
        .reduce((p, c) => [...p, ...c], [])
    )
    .reduce((p, c) => [...p, ...c], [])
    .sort((a, b) => a.overallTotalDamage - b.overallTotalDamage);
  return result;
};

const getLabelFrom = (weaponName: string, ammo: string, mode: string) => {
  return `${weaponName}${ammo !== "" && ammo !== "STD" ? ` - ${ammo}` : ""}${
    mode !== "B" && mode !== "STD" ? ` - ${mode}` : ""
  }`;
};
