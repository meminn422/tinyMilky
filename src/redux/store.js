import { configureStore } from '@reduxjs/toolkit';
import fooddataSlice from './fooddataSlice';

const store = configureStore({
    reducer: {
        foodinfo: fooddataSlice,
    }
});


export default store;
