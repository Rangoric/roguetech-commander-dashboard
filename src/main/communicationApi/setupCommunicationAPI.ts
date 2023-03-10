import { ipcMain } from "electron";
import { mechalogGet } from "./mechalogGet";

export const setupCommunicationAPI = () => {
  ipcMain.handle("/mechalog/GET", mechalogGet);
};
