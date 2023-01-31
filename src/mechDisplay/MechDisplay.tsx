import { IMechAttackLog } from "src/store/commanderAttackLog/IAttackLog";

export interface IMechDisplayProps {
  mech: IMechAttackLog;
}

export const MechDisplay = ({ mech }: IMechDisplayProps) => {
  return <div>{mech.name}</div>;
};
