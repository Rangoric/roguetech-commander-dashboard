import { useMemo } from "react";
import {
  IAttackLog,
  ICritAttackLog,
  IDamageAttackLog,
} from "src/shared/types/IAttackLog";

export interface IRadialBarMechData {
  id: string;
  data: {
    x: string;
    y: number;
  }[];
}

export interface IRadialBarData {
  mechs: IRadialBarMechData[];
}

export const useGenerateRadialBarData = (data: IAttackLog) => {
  const distinctMechs = useMemo(() => {
    return [...new Set(data.damage.map((t) => t.attacker) ?? [])];
  }, [data]);

  const result = useMemo(() => {
    const radialBarData: IRadialBarData = {
      mechs: distinctMechs.map((id) => {
        const mechData = data.damage
          .filter((t) => t.attacker === id)
          .filter((t) => t["corrected roll"] <= t["hit chance"] || t["is AoE"])
          .reduce((p, c) => p + +c.damage, 0);

        return {
          id,
          data: [{ x: "Normal", y: mechData }],
        };
      }),
    };
    return radialBarData;
  }, [data, distinctMechs]);

  return result;
};
