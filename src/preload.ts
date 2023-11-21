import { contextBridge, ipcRenderer } from "electron";

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld("electronAPI", {
  receiveMessage: (url: string, callback: any) => ipcRenderer.on(url, callback),
  do: <T>(url: string, body: T) => ipcRenderer.invoke(url, body),
});
