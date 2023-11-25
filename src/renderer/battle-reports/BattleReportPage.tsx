import { useParams } from "react-router";
import {
  useGetAllBattleReportsQuery,
  useGetBattleReportQuery,
} from "../store/BattleReportApi";
import { Layout } from "../components/Layout";
import { useMemo } from "react";
import { BattleReportTable } from "./BattleReport.table";
import { BattleReportRadialBars } from "./BattleReport.radial.bars";

export const BattleReportPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetBattleReportQuery(id);

  return <>{data && <BattleReportRadialBars data={data} />}</>;
};
