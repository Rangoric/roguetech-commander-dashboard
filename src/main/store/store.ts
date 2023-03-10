import { configureStore } from "@reduxjs/toolkit";

export const mainStore = configureStore({
  reducer: {},
});

export type MainState = ReturnType<typeof mainStore.getState>;

export type MainDispatch = typeof mainStore.dispatch;
