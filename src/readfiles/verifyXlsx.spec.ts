import { utils } from "xlsx";
import { readXlsx } from "./readXlsx";

const fileName = "sampleFiles/Test Data.xlsx";

describe(`Given a file name`, () => {
  describe(`when we read it as a workbook`, () => {
    const workbook = readXlsx(fileName);
    test(`then the first sheet is damage`, async () => {
      expect(workbook.SheetNames[0]).toBe("damage");
    });
    test(`then the second sheet is crit`, async () => {
      expect(workbook.SheetNames[1]).toBe("crit");
    });
  });
});
describe(`Given a damage sheet`, () => {
  const workbook = readXlsx(fileName);
  const damageSheet = utils.sheet_to_json(workbook.Sheets["damage"], {
    header: 1,
  });
  describe(`when we look at the data`, () => {
    test(`then we have the expected number of rows`, () => {
      expect(damageSheet).toHaveLength(664);
    });
  });
});
describe(`Given a crit sheet`, () => {
  const workbook = readXlsx(fileName);

  const critSheet = utils.sheet_to_json(workbook.Sheets["crit"], {
    header: 1,
  });
  describe(`when we look at the data`, () => {
    test(`then we have the expected number of rows`, () => {
      console.log(critSheet);
      expect(critSheet).toHaveLength(180);
    });
  });
});
