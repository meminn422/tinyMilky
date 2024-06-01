import { configureStore } from '@reduxjs/toolkit';
import foodEntryReducer from './foodEntrySlice';

export const store = configureStore({
  reducer: {
    foodEntry: foodEntryReducer,
  },
});
