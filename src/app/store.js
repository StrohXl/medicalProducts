import { configureStore } from "@reduxjs/toolkit";
import Data from "./features/loadData/loadData";
export const store = configureStore({
  reducer: {
    load: Data,
  },
});
