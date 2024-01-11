import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import weatherReducer from "./slices/weather/index";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([]),
});

setupListeners(store.dispatch);