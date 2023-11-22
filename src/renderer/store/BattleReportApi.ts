import { IAttackLog } from "src/shared/types/IAttackLog";
import { BaseApi } from "./BaseApi";

export const BattleReportApi = BaseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBattleReports: build.query<string[], void>({
      query: () => ({
        url: "/battle-reports",
        method: "GET",
      }),
    }),
    getBattleReport: build.query<IAttackLog, string>({
      query: (battleReportId) => ({
        url: "/battle-report",
        method: "GET",
        body: battleReportId,
      }),
    }),
  }),
});

export const { useGetAllBattleReportsQuery, useGetBattleReportQuery } =
  BattleReportApi;
