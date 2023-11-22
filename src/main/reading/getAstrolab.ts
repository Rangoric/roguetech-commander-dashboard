import { IAstrolab } from "../../shared/types/IAstrolab";
import { getJsonFiles } from "./getJsonFiles";
import { astrolabValidation } from "../../shared/types/IAstrolab.validation";

export const getAstrolab = async (): Promise<IAstrolab> => {
  const files = await getJsonFiles();
  return {
    starSystems: files
      .filter((t) => astrolabValidation.isValidSync(t.content))
      .map((t) => t.content),
  };
};
