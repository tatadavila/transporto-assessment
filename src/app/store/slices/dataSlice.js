// @vendors
import { createSlice } from "@reduxjs/toolkit";

// @helpers
import {
  findTaskIndexById,
  isRequiredTaskDone,
  searchTask,
} from "../../../helpers";

const initialState = {
  tasks: [
    { done: false, id: 1, required: true, subTasks: [] },
    { done: false, id: 2, required: false, subTasks: [] },
    {
      done: false,
      id: 3,
      required: false,
      subTasks: [
        { done: false, id: 3.1, required: true },
        { done: false, id: 3.2, required: false },
      ],
    },
    {
      done: false,
      id: 4,
      required: false,
      subTasks: [
        { done: false, id: 4.1, required: true },
        { done: false, id: 4.2, required: false },
        { done: false, id: 4.3, required: false },
      ],
    },
    {
      done: false,
      id: 5,
      required: false,
      subTasks: [
        { done: false, id: 5.1, required: true },
        { done: false, id: 5.2, required: false },
      ],
    },
    { done: false, id: 6, required: false, subTasks: [] },
  ],
  showPendingTaskModal: false,
  requiredTaskId: 0,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    markTaskDone: (state, action) => {
      const taskId = Number(action.payload);
      const indexOfTask = findTaskIndexById(taskId, state.tasks);
      const task = searchTask(taskId, state.tasks);
      const isReqDone = isRequiredTaskDone(indexOfTask, taskId, state.tasks);

      if (isReqDone.value) {
        task.done = true;
      } else {
        state.requiredTaskId = isReqDone?.taskId;
        state.showPendingTaskModal = true;
      }
    },
    setShowPendindTaskModal: (state, action) => {
      state.showPendingTaskModal = action.payload;
    },
  },
});

export const { markTaskDone, setShowPendindTaskModal } = dataSlice.actions;

export default dataSlice.reducer;
