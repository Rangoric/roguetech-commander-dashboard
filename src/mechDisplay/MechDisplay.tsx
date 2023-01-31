import { IMechAttackLog } from "../store/commanderAttackLog/IAttackLog";

export interface IMechDisplayProps {
  mech: IMechAttackLog;
}

export const MechDisplay = ({ mech }: IMechDisplayProps) => {
  return (
    <div>
      <div>{mech.name}</div>
      <div>
        {mech.weapons.map((t) => (
          <div key={t.name + t.ammo + t.mode}>{t.name}</div>
        ))}
      </div>
    </div>
  );
};
