import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { IMechAttackLog } from "../store/commanderAttackLog/IAttackLog";
import { MechPieDisplay } from "./MechPieDisplay";
import { MechTableDisplay } from "./MechTableDisplay";

export interface IMechsDisplayProps {
  mechs: Record<string, IMechAttackLog>;
}

export const MechsDisplay = ({ mechs }: IMechsDisplayProps) => {
  const sortedMechs = getSortedMechs(mechs);
  return (
    <Grid container spacing={1}>
      {mechs &&
        Object.keys(mechs).map((mechKey) => (
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

const getSortedMechs = (mechs: Record<string, IMechAttackLog>) => {
  return Object.keys(mechs).map((t) => mechs[t]);
};
