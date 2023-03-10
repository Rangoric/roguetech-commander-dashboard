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
  const result = (window as any).electronAPI.do(`${url}/${method}`, body);
  const realResult = await result;
  console.log(realResult);
  return { data: realResult };
};
