import { sampleAttackLogFileName } from "../testingTools/sampleAttackLogFileName";
import { readXlsx } from "./readXlsx";
import { convertXlsxToAttackLog } from "./convertXlsxToAttackLog";

describe(`Given a read xlsx`, () => {
  const workbook = readXlsx(sampleAttackLogFileName);
  describe(`when converted`, () => {
    const result = convertXlsxToAttackLog(workbook);
    test(`then it doesn't fail`, () => {
      expect(result).toBeTruthy();
    });
  });
});
