import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type TaskType = {
  name: string;
  description: string;
  id: number;
  status: 'todo' | 'doing' | 'done';
}

const initialValue: { tasks: TaskType[] } =  {
  tasks: [],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialValue,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      const finalTask = {
        ...action.payload,
        id: state.tasks.length + 1,
      }
      state.tasks?.push(finalTask);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks?.filter(task => task.id !== action.payload);
    },
    editTask: (state, action: PayloadAction<TaskType>) => {
      const index = state.tasks?.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    changeStatus: (state, action: PayloadAction<TaskType>) => {
      const index = state.tasks?.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        return {
          ...state,
          status: action.payload.status,
        };
      }
    }
  }
});

export const { addTask, removeTask, editTask, changeStatus } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;
