import { Link, useLocation } from "react-router-dom";
import { useGetAllBattleReportsQuery } from "../store/BattleReportApi";

const linkDefinitions = (data: string[] = []) => {
  return [
    {
      to: "/",
      text: "Dashboard",
    },
    data[0]
      ? {
          to: `/battle-report/${data[0]}`,
          text: "Most Recent Battle Report",
        }
      : undefined,
    {
      to: "/mechalog",
      text: "Mechalog",
    },
    {
      to: "/armoury",
      text: "Armoury",
    },
    {
      to: "/astrolab",
      text: "Astrolab",
    },
  ].filter((t) => t !== undefined);
};

export const Shortcuts = () => {
  const { data = [] } = useGetAllBattleReportsQuery();
  const location = useLocation();
  return (
    <div className={"sticky top-0 bg-indigo-900 tabs tabs-bordered"}>
      {linkDefinitions(data).map((t) => (
        <Link
          key={t.to}
          to={t.to}
          className={"tab " + (location.pathname === t.to ? "tab-active" : "")}
        >
          {t.text}
        </Link>
      ))}
    </div>
  );
};
