import { createApi } from "@reduxjs/toolkit/query/react";
import { electronBaseQuery } from "./electronBaseQuery";

export const CommunicationAPI = createApi({
  baseQuery: electronBaseQuery,
  tagTypes: ["Mechalog"],
  endpoints: (build) => ({
    getMechalog: build.query<any[], void>({
      query: () => ({ url: "/mechalog", method: "GET" }),
      providesTags: [{ type: "Mechalog", id: "All" }],
    }),
  }),
});

export const { useGetMechalogQuery } = CommunicationAPI;
