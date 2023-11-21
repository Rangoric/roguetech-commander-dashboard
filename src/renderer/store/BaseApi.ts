import { createApi } from "@reduxjs/toolkit/query/react";
import { electronBaseQuery } from "../communication/electronBaseQuery";
import { eTagTypes } from "./eTagTypes";

export const BaseApi = createApi({
  baseQuery: electronBaseQuery,
  tagTypes: Object.values(eTagTypes),
  endpoints: () => ({}),
});
