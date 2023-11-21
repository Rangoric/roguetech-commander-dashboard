import { configureStore } from "@reduxjs/toolkit";

export const renderStore = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
