import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
// import { fetchCount } from './counterAPI';

export interface RateState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RateState = {
  value: 1,
  status: 'idle',
};

export const rateSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Actions
export const { setRate } = rateSlice.actions;

// Selectors
export const selectRate = (state: RootState) => state.rate.value;

export default rateSlice.reducer;
