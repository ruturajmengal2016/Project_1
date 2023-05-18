import { configureStore } from "@reduxjs/toolkit";
import { update, serverData } from "./slice";
export const store = configureStore({
  reducer: {
    update: update.reducer,
    stores: serverData.reducer,
  },
});
