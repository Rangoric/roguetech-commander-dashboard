import { FC, useMemo } from "react";
import { IAttackLog } from "../../shared/types/IAttackLog";
import { MechReportTable } from "./MechReport.table";

interface IBattleReportTableProps {
  data: IAttackLog;
}

export const BattleReportTable: FC<IBattleReportTableProps> = ({ data }) => {
  const distinctMechs = useMemo(() => {
    return [...new Set(data.damage.map((t) => t.attacker) ?? [])];
  }, [data]);

  return (
    <table className={"table table-pin-rows table-pin-cols"}>
      <thead>
        <tr>
          <th>Name</th>
          {Object.keys(data.damage[0]).map((t) => (
            <th>{t}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {distinctMechs.map((t) => (
          <MechReportTable
            key={t}
            name={t}
            entries={data.damage.filter((entry) => entry.attacker === t)}
          />
        ))}
      </tbody>
    </table>
  );
};
