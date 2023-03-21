import { configureStore } from "@reduxjs/toolkit";
import data from "./slicers/data.slicer";

export const store = configureStore({
    reducer: {
        data,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;