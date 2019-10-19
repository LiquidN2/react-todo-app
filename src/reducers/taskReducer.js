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

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks };

    case ADD_TASK: {
      const tasksAfterAdding = [...state.tasks, action.task];
      return { ...state, tasks: tasksAfterAdding };
    }

    case SELECT_TASK: {
      const updatedStatusTasks = state.tasks.map(task => {
        if (task.id === action.taskId) {
          return { ...task, selected: action.selected };
        } else {
          return task;
        }
      });

      return {
        ...state,
        tasks: updatedStatusTasks,
      };
    }

    case SELECT_ALL_TASKS: {
      const updatedStatusTasks = state.tasks.map(task => {
        return { ...task, selected: action.selected };
      });

      return {
        ...state,
        tasks: updatedStatusTasks,
      };
    }

    case UPDATE_TASK: {
      const updatedTasks = state.tasks.map(task => {
        if (task.id === action.taskId) {
          return { ...task, name: action.taskUpdate };
        } else {
          return task;
        }
      });

      return { ...state, tasks: updatedTasks };
    }

    case DELETE_TASK: {
      const tasksAfterDeleting = state.tasks.filter(
        task => task.id !== action.taskId
      );

      return { ...state, tasks: tasksAfterDeleting };
    }

    case DELETE_SELECTED_TASKS: {
      const tasksAfterDeleting = state.tasks.filter(task => !task.selected);

      return { ...state, tasks: tasksAfterDeleting };
    }

    case DELETE_ALL_TASKS:
      return { ...state, tasks: [] };

    default:
      return state;
  }
};

export default taskReducer;
