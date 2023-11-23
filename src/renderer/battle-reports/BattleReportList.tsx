import { useGetAllBattleReportsQuery } from "../store/BattleReportApi";
import { BattleReportCard } from "./BattleReportCard";

export const BattleReportList = () => {
  const { data = [] } = useGetAllBattleReportsQuery(undefined, {
    pollingInterval: 60000,
  });
  return (
    <div className={"flex flex-col gap-4 p-4"}>
      {data.map((id) => (
        <BattleReportCard key={id} battleReportId={id} />
      ))}
    </div>
  );
};
