import { IpcMainEvent, ipcMain } from "electron";

const handlers: {
  route: string;
  handler: (x: IpcMainEvent, ...args: any[]) => void;
}[] = [
  {
    route: "GET: /armoury",
    handler: () => {
      console.log("armoury");
    },
  },
  {
    route: "GET: /battle-reports",
    handler: ({ reply }) => {
      console.log("battle reports");
    },
  },
  {
    route: "GET: /battle-report",
    handler: (_: IpcMainEvent, id: string) => {
      console.log(`battle report: ${id}`);
    },
  },
];

export const setupCommunicationApi = () => {
  handlers.forEach((route) => {
    ipcMain.handle(route.route, route.handler);
  });
};
