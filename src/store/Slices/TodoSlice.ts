import { ITodo } from "./../../models/ITodo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  todos: ITodo[];
}

const initialState: IState = {
  todos: [
    {
      id: 1,
      title: "text",
      completed: false,
    },
    {
      id: 2,
      title: "text2",
      completed: true,
    },
  ],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleCompleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.map((todo) => {
        return todo.id == action.payload
          ? (todo.completed = !todo.completed)
          : todo;
      });
    },
  },
});

export const { reducer, actions } = TodoSlice;
export default reducer;