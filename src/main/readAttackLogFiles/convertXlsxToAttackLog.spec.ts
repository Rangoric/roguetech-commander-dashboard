import { sampleAttackLogFileName } from "../../testingTools/myDirectory";
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
    const weapon = oracle.weapons["MTR/2"];
    test(`then it has a name of MTR/2`, () => {
      expect(weapon.name).toBe("MTR/2");
    });
    test(`then it has ammo named "Inferno"`, () => {
      expect(weapon.ammo["Inferno"]?.name).toBe("Inferno");
    });
    test(`then it has mode 'B'`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.name).toBe("B");
    });
    test(`then is has some attacks`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.attacks).toBe(12);
    });
    test(`then it has some hits`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.hits).toBe(2);
    });
    test(`then it has some aoe hits`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.aoeHits).toBe(44);
    });
    test(`then it has some damage`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.totalDamage).toBe(10);
    });
    test(`then it has a chunk of missed`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.misses).toBe(10);
    });
    test(`then it has an average damage of 5`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.averageDamage).toBe(5);
    });
    test(`then it has a total aoe damage`, () => {
      expect(weapon.ammo["Inferno"]?.mode["B"]?.totalAOEDamage).toBe(44);
    });
  });
});
