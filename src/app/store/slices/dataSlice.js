// @vendors
import { createSlice } from "@reduxjs/toolkit";

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
};

const isRequiredDone = (task, state) => {
  if (task.required && !task.done) {
    return false;
  }

  if (task.subTasks && task.subTasks.length > 0) {
    return task.subTasks.every(
      (subTask) => subTask.done && isRequiredDone(subTask, state),
    );
  }

  return true;
};

//const allSubTasksDone = (subTasks) => subTasks.every((subTask) => subTask.done);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateTasks: (state, action) => {
      console.log("PAYLOAD", action.payload);
      const taskId = Number(action.payload);

      const task = state.tasks.find((task) => task.id === taskId);

      if (task) {
        // Check if the task is required and not done
        if (task === state.tasks[0] && task.required && !task.done) {
          task.done = true;
          console.log(`Task #${task.id} completed.`);
        } else if (isRequiredDone(state.tasks[0])) {
          task.done = true;
          console.log(`Task #${task.id} completed.`);
        } else {
          // Find the parent task if it exists
          const parentTask = state.tasks.find((parent) =>
            parent.subTasks.some((subTask) => subTask.id === taskId),
          );

          if (parentTask && !parentTask.done) {
            console.log(
              `You must finish Task #${parentTask.id} first before proceeding to its sub-tasks.`,
            );
          } else {
            task.done = true;
            console.log(`Task #${task.id} completed.`);
          }
        }
      } else {
        console.log(`Task with id ${taskId} not found.`);
      }
    },
  },
});

export const { updateTasks } = dataSlice.actions;

export default dataSlice.reducer;
