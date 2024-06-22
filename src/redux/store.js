import { configureStore } from "@reduxjs/toolkit";
import contactsSliceReducer from "./contactsSlice";
import filtersSliceReducer from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contactsValue",
  storage,
  whitelist: ["items"],
};

const persistedcontactsSliceReducer = persistReducer(
  contactsPersistConfig,
  contactsSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedcontactsSliceReducer,
    filters: filtersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
