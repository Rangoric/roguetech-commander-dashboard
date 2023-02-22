import { configureStore } from "@reduxjs/toolkit";
import { attackLogsSlice } from "./messageSlice";

export const renderStore = configureStore({
  reducer: {},
});

export type RenderState = ReturnType<typeof renderStore.getState>;

export type RenderDispatch = typeof renderStore.dispatch;
