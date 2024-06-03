import { configureStore } from '@reduxjs/toolkit';
import fooddataSlice from './fooddataSliceSlice';

const store = configureStore({
    reducer: {
        food: fooddataSlice,
    }
});



export default store;