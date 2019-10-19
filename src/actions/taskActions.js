import uuidv1 from 'uuid/v1';

import {
  SET_TASKS,
  ADD_TASK,
  SELECT_TASK,
  SELECT_ALL_TASKS,
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_SELECTED_TASKS,
  DELETE_ALL_TASKS,
} from '../constants/taskActionTypes';

export const setTasks = tasks => ({
  type: SET_TASKS,
  tasks,
});

export const addTask = task => ({
  type: ADD_TASK,
  task: {
    id: uuidv1(),
    name: task,
    selected: false,
  },
});

export const selectTask = (taskId, selected) => ({
  type: SELECT_TASK,
  taskId,
  selected,
});

export const selectAllTasks = selected => ({
  type: SELECT_ALL_TASKS,
  selected,
});

export const updateTask = (taskId, taskUpdate) => ({
  type: UPDATE_TASK,
  taskId,
  taskUpdate,
});

export const deleteTask = taskId => ({
  type: DELETE_TASK,
  taskId,
});

export const deleteSelectedTasks = () => ({
  type: DELETE_SELECTED_TASKS,
});

export const deleteAllTasks = () => ({
  type: DELETE_ALL_TASKS,
});
