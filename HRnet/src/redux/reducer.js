// import REDUX
import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        data: [],
    },

    reducers: {
        addEmployee(state, action) {
          state.data = [...state.data, action.payload];
        },
    },
});

// Génère une action à chaque call du reducer
export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
