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
  misses: number;

  hits: number;
  totalDamage: number;
  averageDamage: number;

  aoeHits: number;
  totalAOEDamage: number;
  averageAOEDamage: number;

  otherHits: number;
  totalDamageToOthers: number;
  averageDamageToOthers: number;

  // Record keeping not shown
  attackId: number;
}
