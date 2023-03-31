import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import {persistConfig} from "../persist/persistConfig";

import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
