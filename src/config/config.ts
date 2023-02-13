import fs from "fs";
import { myDirectory } from "../testingTools/sampleAttackLogFileName";

export interface IConfiguration {
  battleTechDirectory: string;
  xlsxAttackLogs: string;
}

export const getConfig = (): IConfiguration => {
  if (fs.existsSync("rcd.config.json")) {
    const buffer = fs.readFileSync("rcd.config.json", { encoding: "utf8" });
    return configFromString(buffer);
  }

  return configFromString(JSON.stringify({}));
};

export const setConfig = (newConfig: object) => {
  fs.writeFileSync("rcd.config.json", JSON.stringify(newConfig));
};

const configFromString = (config: string): IConfiguration => {
  const data = JSON.parse(config) as Partial<IConfiguration>;
  const battleTechDirectory = data.battleTechDirectory || myDirectory;
  return {
    battleTechDirectory,
    xlsxAttackLogs:
      battleTechDirectory + `\\Mods\\Core\\CustomAmmoCategories\\AttacksLogs`,
  };
};
