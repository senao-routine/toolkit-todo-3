import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import taskReducer from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
// dispatch関数の型注釈として使用するため
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
