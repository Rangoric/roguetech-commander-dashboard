export interface IRawDamageAttackLog {
  "attack id": number;
  "hit id": number;
  "attack end time": string; // hh-mm-ss
  attacker: string;
  weapon: string;
  ammo: string;
  mode: string;
  target: string;
  "hit index": number;
  "is applied": boolean;
  location: string;
  "called shot location": string;
  "hit roll": number;
  "corrected roll": number;
  "hit chance": number;
  damage: string;
  "ap damage": string;
  heat: string;
  stability: string;
  "is intecepted": boolean;
  "intecepted by": string;
  "is AoE": boolean;
  "is frag separated": boolean;
  "is frag pallet": boolean;
  "frags pallets count": number;
}

export interface IRawCritAttackLog {
  "attack id": string; // bug in logs: should be number as IRawDamageAttackLog
  "attack end time": string;
  attacker: string;
  weapon: string;
  ammo: string;
  mode: string;
  target: string;
  "location id": number;
  location: string;
  "struct id": number;
  struct: string;
  "armor on hit": number;
  "structure in hit": number;
  "crit chance": number;
  component: string;
}
