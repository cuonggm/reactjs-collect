import { createSlice } from "@reduxjs/toolkit";

// init State
const initialState = {
  result: 0,
};

// create new slice for update state via reducers
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    plus(state, action) {
      state.result = +action.payload.number1 + +action.payload.number2;
    },
    subtract(state, action) {
      state.result = +action.payload.number1 - +action.payload.number2;
    },
    multiply(state, action) {
      state.result = +action.payload.number1 * +action.payload.number2;
    },
    divide(state, action) {
      state.result = +action.payload.number1 / +action.payload.number2;
    },
  },
});

// export actions to be called from action files
export const calculatorActions = calculatorSlice.actions;

// export reducer to ref from main store (store/index.js)
export default calculatorSlice.reducer;
