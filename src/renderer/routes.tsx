import React from "react";
import { Dashboard } from "./dashboard/Dashboard";
import { BattleReport } from "./battle-reports/BattleReport";
import { Astrolab } from "./astrolab/Astrolab";
import { Armoury } from "./armoury/Armoury";
import { Mechalog } from "./mechalog/Mechalog";
import { Layout } from "./components/Layout";

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
        path: "/battle-report/:id",
        element: <BattleReport />,
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
