import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './TodoSlice';
import themeReducer from './themeSlice';
import controllerReducer from './controllerSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
    controller: controllerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
