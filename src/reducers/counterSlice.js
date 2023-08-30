import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      value: 0,
      title: 'React Js Redux Store with Slice State Examle huevang',
      btn1: 'Increment',
      btn2:'Decrement'
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    },
  },
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer