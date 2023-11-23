import {
  useGetAllBattleReportsQuery,
  useGetBattleReportQuery,
} from "../store/BattleReportApi";
import { BattleReportRadialBars } from "./BattleReport.radial.bars";
import { BattleReportTable } from "./BattleReport.table";

export const MostRecentPage = () => {
  const { data: allReports } = useGetAllBattleReportsQuery(undefined, {
    pollingInterval: 60000,
  });

  const { data } = useGetBattleReportQuery(allReports[0], {
    pollingInterval: 1000,
  });

  return <>{data && <BattleReportRadialBars data={data} />}</>;
};
