import { FC } from "react";
import { IDamageAttackLog } from "src/shared/types/IAttackLog";

interface IMechReportTableProps {
  name: string;
  entries: IDamageAttackLog[];
}

export const MechReportTable: FC<IMechReportTableProps> = ({
  name,
  entries,
}) => {
  return (
    <>
      {entries.map((entry, index) => (
        <tr>
          {index === 0 && <th rowSpan={entries.length}>{name}</th>}
          {Object.values(entry).map((t) => (
            <td>{t === false ? "false" : t === true ? "true" : t}</td>
          ))}
        </tr>
      ))}
    </>
  );
};
