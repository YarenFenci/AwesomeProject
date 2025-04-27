// src/redux/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { reduceCounter } from './counterActions';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reduceCounter, (state, action) => {
      state.value -= action.payload;
    });
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
