import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: {
        foodname: "",
        exp: "",
        buydate: "",
        note: "",
    }
};

const fooddataSlice = createSlice({
    name: 'fooddata',
    initialState,
    reducers: {
        setfooddata: (state, action) => {
            state.info = action.payload;
        },
    },
});

export const { setfooddata } = fooddataSlice.actions;
export default fooddataSlice.reducer;