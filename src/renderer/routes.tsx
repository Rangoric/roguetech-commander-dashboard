import React from "react";
import { Dashboard } from "./dashboard/Dashboard";
import { Astrolab } from "./astrolab/Astrolab";
import { Armoury } from "./armoury/Armoury";
import { Mechalog } from "./mechalog/Mechalog";
import { Layout } from "./components/Layout";
import { MostRecentPage } from "./battle-reports/MostRecentPage";
import { BattleReportPage } from "./battle-reports/BattleReportPage";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/battle-report/most-recent",
        element: <MostRecentPage />,
      },
      {
        path: "/battle-report/:id",
        element: <BattleReportPage />,
      },
      {
        path: "/mechalog",
        element: <Mechalog />,
      },
      {
        path: "/armoury",
        element: <Armoury />,
      },
      {
        path: "/astrolab",
        element: <Astrolab />,
      },
    ],
  },
];
