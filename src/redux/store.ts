import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import rateReducer from './rateSlice';
import transactionsReducer from './transactionsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rate: rateReducer,
    transactions: transactionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
