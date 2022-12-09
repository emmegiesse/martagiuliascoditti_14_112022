//import REDUX
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataEmployee : [],
}

const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducers : {
        addEmployee: {
            reducer: (state, action) => {
                state.dataEmployee = [ ...action.payload.data, action.payload.newEmployee]
            }        
        },
    }
});

export { actions }
export default reducer