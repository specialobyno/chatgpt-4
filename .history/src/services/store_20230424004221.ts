import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.re]
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})