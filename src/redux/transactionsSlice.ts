import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Transaction = {
  id: string,
  value: number,
  name: string,
}

export interface TransactionsState {
  data: Transaction[],
}

const initialState: TransactionsState = {
  data: [
    {
      id: '1',
      value: 10,
      name: 'Morbi et consequat tortor'
    },
    {
      id: '2',
      value: 10,
      name: 'Vestibulum vestibulum'
    },
    {
      id: '3',
      value: 10,
      name: 'Maecenas rhoncus cursusr'
    },
    {
      id: '4',
      value: 10,
      name: 'Curabitur felis massa'
    },
    {
      id: '5',
      value: 10,
      name: 'Morbi et consequat tortor'
    },
    {
      id: '6',
      value: 10,
      name: 'Morbi et consequat tortor'
    },
    {
      id: '7',
      value: 10,
      name: 'Vestibulum vestibulum'
    },
    {
      id: '8',
      value: 10,
      name: 'Maecenas rhoncus cursusr'
    },
    {
      id: '9',
      value: 10,
      name: 'Curabitur felis massa'
    },
    {
      id: '10',
      value: 10,
      name: 'Morbi et consequat tortor'
    },
    {
      id: '11',
      value: 10,
      name: 'Morbi et consequat tortor'
    },
    {
      id: '12',
      value: 10,
      name: 'Vestibulum vestibulum'
    },
    {
      id: '13',
      value: 10,
      name: 'Maecenas rhoncus cursusr'
    },
    {
      id: '14',
      value: 10,
      name: 'Curabitur felis massa'
    },
    {
      id: '15',
      value: 10,
      name: 'Morbi et consequat tortor'
    },
  ],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Transaction>) => {
      state.data.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(t => t.id !== action.payload);
    }
  },
});

// Actions
export const { add, remove } = transactionsSlice.actions;

// Selectors
export const selectTransactions = (state: RootState) => state.transactions.data;
export const selectTransactionsMax = (state: RootState) => 
  state.transactions.data.sort((a, b) => (a.value - b.value))[0];

export default transactionsSlice.reducer;
