import fs from "fs";
import { myDirectory } from "../testingTools/myDirectory";

export interface IConfiguration {
  battleTechDirectory: string;
  rogueTechDirectory: string;
  xlsxAttackLogs: string;
}

export const getConfig = (): IConfiguration => {
  if (fs.existsSync("rcd.config.json")) {
    const buffer = fs.readFileSync("rcd.config.json", { encoding: "utf8" });
    return configFromString(buffer);
  }

  return configFromString(JSON.stringify({}));
};

export const setConfig = (newConfig: Partial<IConfiguration>) => {
  const config = getConfig();
  fs.writeFileSync(
    "rcd.config.json",
    JSON.stringify({ ...config, ...newConfig })
  );
};

const configFromString = (config: string): IConfiguration => {
  const data = JSON.parse(config) as Partial<IConfiguration>;
  const battleTechDirectory = data.battleTechDirectory || myDirectory;
  const rogueTechDirectory = data.rogueTechDirectory || myDirectory;
  return {
    battleTechDirectory,
    rogueTechDirectory,
    xlsxAttackLogs:
      battleTechDirectory + `\\Mods\\Core\\CustomAmmoCategories\\AttacksLogs`,
  };
};
