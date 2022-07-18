import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Reducers/Users";
import authReducer from "./Reducers/SignIn";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
