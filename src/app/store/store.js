// @vendors
import { configureStore } from "@reduxjs/toolkit";

// @store
import { dataSlice } from "./slices";

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasksData", JSON.stringify(state.data.tasks));
});

export default store;
