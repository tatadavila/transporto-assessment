import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoWFinishTaskModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

//export const {} = uiSlice.actions;

export default uiSlice.reducer;
