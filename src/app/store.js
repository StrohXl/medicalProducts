import { configureStore } from "@reduxjs/toolkit";
import Data from "./features/Data/Data";
import ItemsNav from "./features/Data/itemsNav";
import dataExtra from "./features/Data/dataExtra";
import dateSteps from "./features/Data/dateSteps";
export const store = configureStore({
  reducer: {
    items: ItemsNav,
    load: Data,
    extra: dataExtra,
    steps: dateSteps
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
