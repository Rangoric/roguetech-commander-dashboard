import { createApi } from "@reduxjs/toolkit/query";
import { electronBaseQuery } from "../communication/electronBaseQuery";
import { eTagTypes } from "./eTagTypes";

export const BaseApi = createApi({
  baseQuery: electronBaseQuery,
  tagTypes: Object.keys(eTagTypes),
  endpoints: (build) => ({}),
});
