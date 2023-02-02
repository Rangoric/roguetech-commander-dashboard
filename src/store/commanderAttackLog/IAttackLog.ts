export interface IAttackLog {
  mechs: Record<string, IMechAttackLog>;
}

export interface IMechAttackLog {
  name: string;
  weapons: Record<string, IWeaponAttackLog>;
}

export interface IWeaponAttackLog {
  name: string;
  ammo: Record<string, IAmmoAttackLog>;
}
export interface IAmmoAttackLog {
  name: string;
  mode: Record<string, IModeAttackLog>;
}

export interface IModeAttackLog extends IAttackLogStats {
  name: string;
}

export interface IAttackLogStats {
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
}
