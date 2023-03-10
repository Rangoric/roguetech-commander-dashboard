import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { IMechAttackLog } from "../../store/commanderAttackLog/IAttackLog";
import { WeaponTableRow } from "./WeaponTableRow";

export interface IMechTableDisplayProps {
  mech: IMechAttackLog;
}

export const MechTableDisplay = ({ mech }: IMechTableDisplayProps) => {
  const weaponNames = Object.keys(mech.weapons);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={11}>{mech.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Weapon</TableCell>
            <TableCell>Ammo</TableCell>
            <TableCell>Mode</TableCell>
            <TableCell>Attacks</TableCell>
            <TableCell>Hits</TableCell>
            <TableCell>Average Damage</TableCell>
            <TableCell>Total Damage</TableCell>
            <TableCell>AOE Hits</TableCell>
            <TableCell>Average AOE Damage</TableCell>
            <TableCell>Total AOE Damage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weaponNames.map((weaponName) => (
            <WeaponTableRow weapon={mech.weapons[weaponName]} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
