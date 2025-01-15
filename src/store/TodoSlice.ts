import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  task: string;
  completed: boolean;
  liked: boolean;
}

interface TaskState {
  tasks: Task[];
  selectedTask: Task | null; // New field for storing a specific task
}

const loadTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const initialState: TaskState = {
  tasks: loadTasksFromLocalStorage(),
  selectedTask: null, // Initially, no task is selected
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now().toString(), // Use timestamp as a unique ID
        task: action.payload,
        completed: false,
        liked: false,
      };
      state.tasks.push(newTask);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    toggleLiked: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.liked = !task.liked;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    getTask: (state, action: PayloadAction<string | null>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      state.selectedTask = task || null; // Set the selectedTask to the found task or null if not found
    },
  },
});

export const { addTask, toggleCompleted, toggleLiked, deleteTask, getTask } =
  taskSlice.actions;

export default taskSlice.reducer;
