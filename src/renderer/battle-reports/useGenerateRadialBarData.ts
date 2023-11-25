import { useMemo } from "react";
import {
  IAttackLog,
  ICritAttackLog,
  IDamageAttackLog,
} from "src/shared/types/IAttackLog";

export interface IRadialBarMechData {
  name: string;
  data: IRadialBarWeaponData[];
}
interface IRadialBarDataPoint {
  x: string;
  y: number;
}
export interface IRadialBarWeaponData {
  id: string;
  data: IRadialBarDataPoint[];
}

const generateIdFromDamageAttackLog = (data: IDamageAttackLog) => {
  const ammo = data.ammo !== "" && data.ammo !== "STD" ? ` - ${data.ammo}` : "";
  const mode =
    data.mode !== "BASE" && data.mode !== "STD" ? ` - ${data.mode}` : "";
  return `${data.weapon}${ammo}${mode}`;
};

const byHits = (data: IDamageAttackLog) =>
  data["corrected roll"] <= data["hit chance"] &&
  data.target !== "(65536)Ground";

export interface IRadialBarData {
  mechs: IRadialBarMechData[];
}

export const useGenerateRadialBarData = (data: IAttackLog) => {
  const distinctMechs = useMemo(() => {
    return [...new Set(data.damage.map((t) => t.attacker) ?? [])];
  }, [data]);

  const result = useMemo(() => {
    const radialBarData: IRadialBarData = {
      mechs: distinctMechs
        .map((name) => {
          const mechDamage = data.damage
            .filter((t) => t.attacker === name)
            .filter(byHits);
          const mappedMechDamage: IRadialBarWeaponData[] = mechDamage.map(
            (t) => ({
              id: generateIdFromDamageAttackLog(t),
              data: [
                {
                  x: "Normal",
                  y: t["is AoE"] ? 0 : +t.damage,
                },
                {
                  x: "AoE",
                  y: t["is AoE"] ? +t.damage : 0,
                },
              ],
            }),
          );
          const reducedMechDamage = mappedMechDamage.reduce(
            (p: IRadialBarWeaponData[], c: IRadialBarWeaponData) => {
              const modifiedItem = p.find((t) => t.id === c.id);

              if (modifiedItem) {
                const newItem = {
                  id: modifiedItem.id,
                  data: [
                    { x: "Normal", y: modifiedItem.data[0].y + c.data[0].y },
                    { x: "AoE", y: modifiedItem.data[1].y + c.data[1].y },
                  ],
                };
                return [...p.filter((t) => t.id !== newItem.id), newItem];
              }
              return [...p, c];
            },
            [] as IRadialBarWeaponData[],
          );
          return {
            name,
            data: reducedMechDamage.toSorted(
              (a, b) => a.data[0].y + a.data[1].y - (b.data[0].y + b.data[1].y),
            ),
          };
        })
        .toSorted((a, b) => {
          const aTotal = a.data.reduce(
            (p, c) => p + c.data[0].y + c.data[1].y,
            0,
          );
          const bTotal = b.data.reduce(
            (p, c) => p + c.data[0].y + c.data[1].y,
            0,
          );
          // Descending Sort
          return bTotal - aTotal;
        }),
    };
    return radialBarData;
  }, [data, distinctMechs]);

  return result;
};
