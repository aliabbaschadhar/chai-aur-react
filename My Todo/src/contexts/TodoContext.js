import { createContext, useContext } from "react";

export const TodoContext = createContext({
	Todos: [
		{
			id: 1,
			todo: "todo msg",
			completed: false,
		},
	],
	addTodo: (todo) => {},
	updateTodo: (id, todo) => {},
	deleteTodo: (id) => {},
	toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
	return useContext(TodoContext);
};
