import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteCar: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favoriteCar.push(action.payload);
    },
    deleteFavoritCar: (state, action) => {
      state.favoriteCar = state.favoriteCar.filter(
        car => car.id !== action.payload
      );
    },
    deleteAllFavoriteCars: state => {
      state.favoriteCar = [];
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavoriteCar, deleteAllFavoriteCars, deleteFavoritCar } =
  favoriteSlice.actions;
