import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://654436205a0b4b04436c2572.mockapi.io/adverts',
});


export const fetchCars = createAsyncThunk(
  'adverts/fetchCars',
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await instance.get(`/adverts?page=${page}`, {
        params: {
          limit,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
