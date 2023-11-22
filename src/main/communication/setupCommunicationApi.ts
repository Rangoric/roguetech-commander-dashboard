import { IpcMainEvent, ipcMain } from "electron";
import { getBattleReportList } from "../reading/getBattleReportList";
import { getConfig } from "../config";
import { getBattleReport } from "../reading/getBattleReport";
import { getMechalog } from "../reading/getMechalog";
import { getArmoury } from "../reading/getArmoury";
import { getAstrolab } from "../reading/getAstrolab";

const handlers: {
  route: string;
  handler: (x: IpcMainEvent, ...args: any[]) => void;
}[] = [
  {
    route: "GET: /battle-reports",
    handler: () => getBattleReportList(),
  },
  {
    route: "GET: /battle-report",
    handler: (_: IpcMainEvent, id: string) => getBattleReport(id),
  },
  {
    route: "GET: /mechalog",
    handler: () => getMechalog(),
  },
  {
    route: "GET: /armoury",
    handler: () => getArmoury(),
  },
  {
    route: "GET: /astrolab",
    handler: () => getAstrolab(),
  },
];

export const setupCommunicationApi = () => {
  handlers.forEach((route) => {
    ipcMain.handle(route.route, route.handler);
  });
};
