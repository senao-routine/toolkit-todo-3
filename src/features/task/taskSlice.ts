import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

// stateの型
interface TaskState {
  // taskが何個あるのか管理
  idCount: number;
  // storeに保存するtask一覧
  tasks: { id: number; title: string; completed: boolean }[];
  // taskのtitleを編集する際にどのtaskが選択されているか
  selectedTask: { id: number; title: string; completed: boolean };
  // Modalを開くか閉じるかのフラグ
  isModalOpen: boolean;
}

// stateの初期値
const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "Task A", completed: false }],
  selectedTask: { id: 0, title: "", completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  // このsliceの名前。actionTypeを生成するときにprefixとなる。
  name: "task",
  // このsliceで用いるinitialStateの値
  initialState,
  // reducersの中身を記述
  reducers: {
    // taskの作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    //taskの編集
    editTask: (state, action) => {
      //state.tasksの中から指定したいtaskを抜き出している
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    //どのtaskを選択しているか管理
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    // Madalを開くか閉じるののフラグ管理
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { createTask, editTask, selectTask, handleModalOpen } =
  taskSlice.actions;

// コンポーネント側からuseSlectorを用いてselectTaskを指定することで
// stateの値をコンポーネントに渡すことが可能
export const selectTasks = (state: RootState): TaskState["tasks"] =>
  state.task.tasks;

export const selectIsModalOpen = (state: RootState): TaskState["isModalOpen"] =>
  state.task.isModalOpen;

export const selectSelectedTasks = (
  state: RootState
): TaskState["selectedTask"] => state.task.selectedTask;

export default taskSlice.reducer;
