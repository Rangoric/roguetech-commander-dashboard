import { Grid } from "@mui/material";
import { IMechAttackLog } from "../store/commanderAttackLog/IAttackLog";
import { MechDisplay } from "./MechDisplay";

export interface IMechsDisplayProps {
  mechs: Record<string, IMechAttackLog>;
}

export const MechsDisplay = ({ mechs }: IMechsDisplayProps) => {
  return (
    <Grid container spacing={1}>
      {Object.keys(mechs).map((mechKey) => (
        <MechDisplay key={mechKey} mech={mechs[mechKey]} />
      ))}
    </Grid>
  );
};
