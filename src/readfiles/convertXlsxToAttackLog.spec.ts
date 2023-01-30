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
    test(`then it has X mech names`, () => {
      expect(Object.keys(result.mechs)).toHaveLength(15);
    });
    test(`then the first mech name is Oracle ACMV`, () => {
      expect(Object.keys(result.mechs)[0]).toBe(`Oracle ACMV`);
    });
  });
});

describe(`Given the Oracle ACMV data`, () => {
  const workbook = readXlsx(sampleAttackLogFileName);
  const result = convertXlsxToAttackLog(workbook);
  const oracle = result.mechs["Oracle ACMV"];
  describe(`when looking at the first "weapon"`, () => {
    const weapon = oracle.weapons[0];
    test(`then it has a name of MTR/2`, () => {
      expect(weapon.name).toBe("MTR/2");
    });
    test(`then it has ammo named "Inferno"`, () => {
      expect(weapon.ammo).toBe("Inferno");
    });
    test(`then it has mode 'B'`, () => {
      expect(weapon.mode).toBe("B");
    });
    test(`then is has 12 attacks`, () => {
      expect(weapon.attacks).toBe(12);
    });
    test(`then it has 2 hits`, () => {
      expect(weapon.hits).toBe(2);
    });
    test(`then it has 54 aoe hits`, () => {
      expect(weapon.aoeHits).toBe(44);
    });
  });
});
