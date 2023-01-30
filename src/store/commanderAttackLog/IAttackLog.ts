export interface IAttackLog {
  mechs: Record<string, IMechAttackLog>;
}

export interface IMechAttackLog {
  name: string;
  weapons: IWeaponAttackLog[];
}

export interface IWeaponAttackLog {
  name: string;
  ammo: string;
  mode: string;
  attacks: number;
  hits: number;
  misses: number;
  averageDamage: number;
  totalDamage: number;
  averageDamageToOthers: number;
  totalDamageToOthers: number;
  aoeHits: number;
  totalAOEDamage: number;

  // Record keeping not shown
  attackId: number;
}
