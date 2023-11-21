import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

export const electronBaseQuery: BaseQueryFn<
  FetchArgs,
  string[],
  FetchBaseQueryError
> = async ({ url, method, body }, stuff, extraOptions) => {
  const result = (window as any).electronAPI.do(`${method}: ${url}`, body);
  const realResult = await result;
  return { data: realResult };
};
