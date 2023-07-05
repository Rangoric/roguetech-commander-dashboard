import { createApi } from "@reduxjs/toolkit/query/react";
import { electronBaseQuery } from "./electronBaseQuery";
import { IJsonBase } from "./jsonFiles/IJsonBase";

export const CommunicationAPI = createApi({
  baseQuery: electronBaseQuery,
  tagTypes: ["Mechalog"],
  endpoints: (build) => ({
    getMechalog: build.query<IJsonBase[], void>({
      query: () => ({ url: "/mechalog", method: "GET" }),
      providesTags: [{ type: "Mechalog", id: "All" }],
    }),
  }),
});

export const { useGetMechalogQuery } = CommunicationAPI;
