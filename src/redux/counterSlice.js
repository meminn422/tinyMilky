import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counterValue: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter: (state, action) => {
            state.counterValue = action.payload;
        },
    },
});

const selectCounter = (state) => state.counter.counterValue;
const { setCounter } = counterSlice.actions;