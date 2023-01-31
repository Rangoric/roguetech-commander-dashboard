import { IMechAttackLog } from "src/store/commanderAttackLog/IAttackLog";
import { MechDisplay } from "./MechDisplay";

export interface IMechsDisplayProps {
  mechs: Record<string, IMechAttackLog>;
}

export const MechsDisplay = ({ mechs }: IMechsDisplayProps) => {
  return (
    <>
      {Object.keys(mechs).map((mechKey) => (
        <MechDisplay key={mechKey} mech={mechs[mechKey]} />
      ))}
    </>
  );
};
