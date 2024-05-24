import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth/AuthSlice";
import dealReducer from "./reducers/deal/DealSlice";

const rootReducer = combineReducers({
  authReducer,
  dealReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
