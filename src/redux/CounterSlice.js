import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter++ ;
        },
        decrement(state, action) {
            state.counter-- ;
        },
        addBy(state, action) {
            state.counter += action.payload;
        }
    }
});

export const actions = CounterSlice.actions;

export default CounterSlice;