import { app, BrowserWindow, dialog, Menu } from "electron";
import { setConfig } from "./config/config";

const isMac = process.platform === "darwin";

export interface IMenuTemplateProps {
  battleTechDirectory: string;
  mainWindow: BrowserWindow;
}

export const menuTemplate = ({
  battleTechDirectory,
  mainWindow,
}: IMenuTemplateProps) => [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideOthers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" },
          ],
        },
      ]
    : []),
  {
    label: "File",
    submenu: [
      {
        label: `BattleTech Directory: ${battleTechDirectory}`,
        click: async () => {
          const result = await dialog.showOpenDialog(mainWindow, {
            properties: ["openDirectory"],
            defaultPath: battleTechDirectory,
          });
          if (result.filePaths.length > 0) {
            setConfig({ battleTechDirectory: result.filePaths[0] });
          }
        },
      },
      isMac ? { role: "close" } : { role: "quit" },
    ],
  },
  {
    label: "Edit",
    submenu: [],
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forceReload" },
      { role: "toggleDevTools" },
      { type: "separator" },
      { role: "resetZoom" },
      { role: "zoomIn" },
      { role: "zoomOut" },
      { type: "separator" },
      { role: "togglefullscreen" },
    ],
  },
  // { role: 'windowMenu' }
  {
    label: "Window",
    submenu: [
      { role: "minimize" },
      { role: "zoom" },
      ...(isMac
        ? [
            { type: "separator" },
            { role: "front" },
            { type: "separator" },
            { role: "window" },
          ]
        : [{ role: "close" }]),
    ],
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal(
            "https://github.com/Rangoric/roguetech-commander-dashboard"
          );
        },
      },
    ],
  },
];
