import { BrowserWindow, Menu, app, dialog } from "electron";
import { IConfiguration, getConfig, setConfig } from "./config";

const isMac = process.platform === "darwin";

export interface IMenuTemplateProps {
  configuration: IConfiguration;
  mainWindow: BrowserWindow;
}

export const menuTemplate = ({
  configuration: { battleTechDirectory, rogueTechDirectory },
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
      {
        label: `RogueTech Launcher Directory: ${rogueTechDirectory}`,
        click: async () => {
          const result = await dialog.showOpenDialog(mainWindow, {
            properties: ["openDirectory"],
            defaultPath: rogueTechDirectory,
          });
          if (result.filePaths.length > 0) {
            setConfig({ rogueTechDirectory: result.filePaths[0] });
          }
        },
      },
      { type: "separator" },
      isMac ? { role: "close" } : { role: "quit" },
    ],
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
  { type: "separator" },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal(
            "https://github.com/Rangoric/roguetech-commander-dashboard",
          );
        },
      },
    ],
  },
];

export const setupMenu = (mainWindow: BrowserWindow) => {
  const configuration = getConfig();

  const menu = Menu.buildFromTemplate(
    menuTemplate({ configuration, mainWindow }) as any,
  );
  Menu.setApplicationMenu(menu);
};
