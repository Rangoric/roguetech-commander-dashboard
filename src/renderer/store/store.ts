import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "./BaseApi";

export const renderStore = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

export type RenderState = ReturnType<typeof renderStore.getState>;

export type RenderDispatch = typeof renderStore.dispatch;
