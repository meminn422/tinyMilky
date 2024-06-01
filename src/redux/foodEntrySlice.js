import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expDate: '',
  foodName: '',
  purchaseDate: '',
  note: '',
};

const foodEntrySlice = createSlice({
  name: 'foodEntry',
  initialState,
  reducers: {
    setFoodEntry: (state, action) => {
      const { expDate, foodName, purchaseDate, note } = action.payload;
      state.expDate = expDate;
      state.foodName = foodName;
      state.purchaseDate = purchaseDate;
      state.note = note;
    },
  },
});

export const { setFoodEntry } = foodEntrySlice.actions;

export default foodEntrySlice.reducer;
