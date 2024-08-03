import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid,
				text: action.payload,
			};
			state.todos.push(todo); //bcz we have access of initialState values
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
		editTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo
			);
		},
	},
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
