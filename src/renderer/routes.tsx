import { Dashboard } from "./dashboard/Dashboard";
import { BattleReport } from "./battle-reports/BattleReport";

export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/battle-report/:id",
    element: <BattleReport />,
  },
];
