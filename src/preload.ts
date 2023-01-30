// See the Electron documentation for details on how to use preload scripts:

import { contextBridge, ipcRenderer } from "electron";

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld("electronAPI", {
  receivingUpdatedAttackLogs: (callback: any) =>
    ipcRenderer.on("New Report Commander", callback),
});
