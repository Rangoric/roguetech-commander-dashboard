import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { IMechAttackLog } from "../store/commanderAttackLog/IAttackLog";
import { MechPieDisplay } from "./MechPieDisplay";
import { MechTableDisplay } from "./MechTableDisplay";

export interface IMechsDisplayProps {
  mechs: Record<string, IMechAttackLog>;
}

export const MechsDisplay = ({ mechs }: IMechsDisplayProps) => {
  return (
    <Grid container spacing={1}>
      {Object.keys(mechs).map((mechKey) => (
        <Grid item key={mechKey}>
          <Card>
            <CardHeader title={mechKey} />
            <CardContent>
              <MechPieDisplay mech={mechs[mechKey]} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
