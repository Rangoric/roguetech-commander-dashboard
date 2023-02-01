import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { IMechAttackLog } from "../store/commanderAttackLog/IAttackLog";

export interface IMechDisplayProps {
  mech: IMechAttackLog;
}

export const MechDisplay = ({ mech }: IMechDisplayProps) => {
  return (
    <Grid container item spacing={1} xs={12}>
      <Grid item xs={12}>
        <Card variant={"elevation"}>
          <CardContent>{mech.name}</CardContent>
        </Card>
      </Grid>
      {mech.weapons.map((t) => (
        <React.Fragment key={t.name + t.ammo + t.mode}>
          <Grid item xs={6}>
            <Card variant={"elevation"}>
              <CardContent>
                {t.name} - {t.ammo} - {t.mode}
              </CardContent>
            </Card>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};
