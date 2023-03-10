import { TableCell, TableRow } from "@mui/material";
import { IWeaponAttackLog } from "../../store/commanderAttackLog/IAttackLog";

export interface IWeaponTableRowProps {
  weapon: IWeaponAttackLog;
}

export const WeaponTableRow = ({ weapon }: IWeaponTableRowProps) => {
  return (
    <>
      {Object.keys(weapon.ammo).map((ammoName) => (
        <>
          {Object.keys(weapon.ammo[ammoName].mode).map((modeName) => (
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{weapon.name}</TableCell>
              <TableCell>{ammoName}</TableCell>
              <TableCell>{modeName}</TableCell>
              <TableCell>
                {weapon.ammo[ammoName].mode[modeName].attacks}
              </TableCell>
              <TableCell>{weapon.ammo[ammoName].mode[modeName].hits}</TableCell>
              <TableCell>
                {weapon.ammo[ammoName].mode[modeName].averageDamage}
              </TableCell>
              <TableCell>
                {weapon.ammo[ammoName].mode[modeName].totalDamage}
              </TableCell>
              <TableCell>
                {weapon.ammo[ammoName].mode[modeName].aoeHits}
              </TableCell>
              <TableCell>
                {weapon.ammo[ammoName].mode[modeName].averageAOEDamage}
              </TableCell>
              <TableCell>
                {weapon.ammo[ammoName].mode[modeName].totalAOEDamage}
              </TableCell>
            </TableRow>
          ))}
        </>
      ))}
    </>
  );
};
