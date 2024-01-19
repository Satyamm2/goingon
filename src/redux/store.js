import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import weatherReducer from "./slices/weather/index";
import cartReducer from "./slices/cart/index";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        cart: cartReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([]),
});

setupListeners(store.dispatch);