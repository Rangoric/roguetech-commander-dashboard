import { Layout } from "../components/Layout";
import { useGetAllBattleReportsQuery } from "../store/BattleReportApi";

export const Dashboard = () => {
  const { data = [] } = useGetAllBattleReportsQuery();
  return (
    <Layout>
      {data.map((t) => (
        <div key={t}>{t}</div>
      ))}
    </Layout>
  );
};
