import { createSlice } from "@reduxjs/toolkit";

export interface PageCounterState {
  value: number;
}

const initialState: PageCounterState = {
  value: 1,
};

export const pageCounterSlice = createSlice({
  name: "pageCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement} =
  pageCounterSlice.actions;

export default pageCounterSlice.reducer;
