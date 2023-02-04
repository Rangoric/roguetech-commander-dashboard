import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { totalMechDamage } from "../store/commanderAttackLog/attackLogTools";
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
        sortedMechs.map((mech) => (
          <Grid item key={mech.name}>
            <Card>
              <CardHeader title={mech.name} />
              <CardContent>
                <MechPieDisplay mech={mech} />
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

const getSortedMechs = (mechs: Record<string, IMechAttackLog>) => {
  return Object.keys(mechs)
    .map((t) => ({
      mech: mechs[t],
      totalDamage: totalMechDamage(mechs[t]),
    }))
    .filter((t) => t.totalDamage > 0)
    .sort((a, b) => b.totalDamage - a.totalDamage)
    .map((t) => t.mech);
};
