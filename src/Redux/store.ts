/**
 * Title: 'Redux setup by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 21-01-2024
 *
 */

import { configureStore, Middleware } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import { baseApi } from "./api/baseApi";

// Extracting the middleware from baseApi
const apiMiddleware = baseApi.middleware;

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
