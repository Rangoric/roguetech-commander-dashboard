import { configureStore } from "@reduxjs/toolkit";
import { attackLogsSlice } from "./messageSlice";

export const store = configureStore({
  reducer: {
    messageSlice: attackLogsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
