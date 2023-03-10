import { configureStore } from "@reduxjs/toolkit";
import { CommunicationAPI } from "./CommunicationAPI";
import { attackLogsSlice } from "./messageSlice";

export const renderStore = configureStore({
  reducer: {
    messageSlice: attackLogsSlice.reducer,
    [CommunicationAPI.reducerPath]: CommunicationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CommunicationAPI.middleware),
});

export type RenderState = ReturnType<typeof renderStore.getState>;

export type RenderDispatch = typeof renderStore.dispatch;
