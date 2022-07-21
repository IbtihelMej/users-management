import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Reducers/Users";
import authReducer from "./Reducers/JWTAuth";
import alertReducer from "./Reducers/Alert";


const rootReducer = combineReducers({
  userReducer,
  authReducer,
  alertReducer
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
