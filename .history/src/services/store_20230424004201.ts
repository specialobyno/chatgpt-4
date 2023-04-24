import { configureStore } from "@reduxjs/toolkit";
import {art}
export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})