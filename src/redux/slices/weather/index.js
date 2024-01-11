import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weData: false,
        city: "indore",
    },
    reducers: {
        setWeData: (state, action) => {
            state.weData = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
    },
});

export const { setWeData, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;