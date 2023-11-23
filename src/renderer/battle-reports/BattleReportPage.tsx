import { useParams } from "react-router";
import {
  useGetAllBattleReportsQuery,
  useGetBattleReportQuery,
} from "../store/BattleReportApi";
import { Layout } from "../components/Layout";
import { useMemo } from "react";
import { BattleReportTable } from "./BattleReport.table";

export const BattleReportPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetBattleReportQuery(id);

  return <>{data && <BattleReportTable data={data} />}</>;
};
