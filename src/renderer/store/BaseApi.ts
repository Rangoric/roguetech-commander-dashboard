import { createApi } from "@reduxjs/toolkit/query/react";
import { electronBaseQuery } from "../communication/electronBaseQuery";
import { eTagTypes } from "./eTagTypes";
import { IMechalog } from "src/shared/types/IMechalog";
import { IArmoury } from "src/shared/types/IArmoury";
import { IAstrolab } from "src/shared/types/IAstrolab";

export const BaseApi = createApi({
  baseQuery: electronBaseQuery,
  tagTypes: Object.values(eTagTypes),
  endpoints: (build) => ({
    getArmoury: build.query<IArmoury, void>({
      query: () => ({
        url: "/armoury",
        method: "GET",
      }),
    }),
    getAstrolab: build.query<IAstrolab, void>({
      query: () => ({
        url: "/astrolab",
        method: "GET",
      }),
    }),
    getMechalog: build.query<IMechalog, void>({
      query: () => ({
        url: "/mechalog",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArmouryQuery, useGetAstrolabQuery, useGetMechalogQuery } =
  BaseApi;
