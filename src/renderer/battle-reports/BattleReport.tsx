import { useParams } from "react-router";
import {
  useGetAllBattleReportsQuery,
  useGetBattleReportQuery,
} from "../store/BattleReportApi";
import { Layout } from "../components/Layout";
import { useMemo } from "react";

export const BattleReport = () => {
  const { id } = useParams<{ id: string }>();
  const { data: allReports } = useGetAllBattleReportsQuery();

  // Polling is set up for the most recent report only, as you could be playing
  const { data } = useGetBattleReportQuery(id, {
    pollingInterval: allReports[0] === id ? 1000 : undefined,
  });

  const distinctMechs = useMemo(() => {
    return [...new Set(data?.damage.map((t) => t.attacker) ?? [])];
  }, [data]);

  return (
    <>
      {distinctMechs.map((t) => (
        <div key={t}>{t}</div>
      ))}
    </>
  );
};
