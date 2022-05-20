import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';

export interface RateState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RateState = {
  value: 1,
  status: 'idle',
};

// Thunks
export const fetchRate = createAsyncThunk(
  'rate/fetchRate',
  async () => {
    const response = await axios.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json');
    return response.data;
  }
);

export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRate.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRate.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload.rates[0].mid;
      })
      .addCase(fetchRate.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Actions
export const { setRate } = rateSlice.actions;

// Selectors
export const selectRate = (state: RootState) => state.rate.value;
export const selectStatus = (state: RootState) => state.rate.status;

export default rateSlice.reducer;
