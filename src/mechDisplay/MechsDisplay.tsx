import { Card, Grid } from "@mui/material";
import { IMechAttackLog } from "../store/commanderAttackLog/IAttackLog";
import { MechTableDisplay } from "./MechTableDisplay";

export interface IMechsDisplayProps {
  mechs: Record<string, IMechAttackLog>;
}

export const MechsDisplay = ({ mechs }: IMechsDisplayProps) => {
  return (
    <Grid container spacing={1}>
      {Object.keys(mechs).map((mechKey) => (
        <Grid item xs={6} key={mechKey}>
          <MechTableDisplay mech={mechs[mechKey]} />
        </Grid>
      ))}
    </Grid>
  );
};
