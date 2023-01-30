export interface IAttackLog {
  mechs: IMechAttackLog[];
}

export interface IMechAttackLog {
  name: string;
  weapons: IWeaponAttackLog[];
}

export interface IWeaponAttackLog {
  name: string;
  hits: number;
  misses: number;
  averageDamage: number;
  totalDamage: number;
  averageDamageToOthers: number;
  totalDamageToOthers: number;
  totalAOEDamage: number;
}
