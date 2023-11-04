import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operation.js';

export const carSlice = createSlice({
  name: 'Cars',
  initialState: {
    items: [],
    isLoading: false,
    isError: '',
  },
  reducers: {
    clearCarsList(state) {
      state.items = [];
    },
  },
  extraReducers: {
    [fetchCars.pending]: state => {
      state.isLoading = true;
    },
    [fetchCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, ...action.payload];
    },
    [fetchCars.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});
export const { clearCarsList } = carSlice.actions;