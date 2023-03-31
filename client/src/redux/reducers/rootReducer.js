import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import {persistConfig} from "../persist/persistConfig";

import flowersReducer from "./flowers/flowersSlice";
import basketReducer from "./basket/basketSlice";

const rootReducer = combineReducers({
  flowers: flowersReducer,
  basket: basketReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
