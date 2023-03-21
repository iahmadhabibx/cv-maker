import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState:any = {
    value: ''
}

export const DataSlicer = createSlice({
    name: 'data',
    initialState,
    reducers: {
        saveData: (state, action: PayloadAction<String>) => {
            state.value = action.payload;
        }
    }
});

export const { saveData } = DataSlicer.actions;
export default DataSlicer.reducer;