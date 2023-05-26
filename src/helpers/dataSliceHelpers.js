export const findTaskIndexById = (taskId, tasks) => {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    return taskIndex;
  }

  for (let i = 0; i < tasks.length; i++) {
    const subTasks = tasks[i].subTasks;
    if (subTasks && subTasks.length > 0) {
      const subTaskIndex = findTaskIndexById(taskId, subTasks);
      if (subTaskIndex !== -1) {
        return subTaskIndex;
      }
    }
  }

  return -1;
};

export const isSubTask = (taskId, tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    const subTasks = tasks[i].subTasks;
    if (subTasks && subTasks.length > 0) {
      if (subTasks.some((subTask) => subTask.id === taskId)) {
        return true;
      }
    }
  }
  return false;
};

export const isRequiredTaskDone = (index, taskId, tasks) => {
  const isIdSubtask = isSubTask(taskId, tasks);
  if (!isIdSubtask && index > 0) {
    return { taskId: tasks[0].id, value: tasks[0].done };
  } else if (isIdSubtask && index > 0) {
    const parentArr = findParentArray(taskId, tasks);
    return { taskId: parentArr[0].id, value: parentArr[0].done };
  } else {
    return { value: true };
  }
};

export const findParentArray = (subTaskId, tasks) => {
  let parentSubtaskArray = null;

  tasks.forEach((task) => {
    if (task.subTasks.some((subtask) => subtask.id === subTaskId)) {
      parentSubtaskArray = task.subTasks;
    }
  });

  return parentSubtaskArray;
};

export const searchTask = (taskId, taskArr) => {
  if (!Array.isArray(taskArr)) {
    return null;
  }

  for (const task of taskArr) {
    if (task.id === taskId) {
      return task;
    }

    if (task.subTasks && task.subTasks.length > 0) {
      const foundTask = searchTask(taskId, task.subTasks);
      if (foundTask) {
        return foundTask;
      }
    }
  }

  return null;
};
