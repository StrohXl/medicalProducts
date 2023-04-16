import { configureStore } from "@reduxjs/toolkit";
import Data from "./features/Data/LoadData";
import ItemsNav from "./features/Data/itemsNav";
import dataExtra from "./features/Data/dataExtra";
import editData from "./features/Data/editData";
import formData from "./features/Data/formData";
export const store = configureStore({
  reducer: {
    items: ItemsNav,
    load: Data,
    extra: dataExtra,
    edit: editData,
    form: formData
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
