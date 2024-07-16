import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
	const [todo, setTodo] = useState("");
	const { addTodo } = useTodo(); //Accessing addTodo method from context

	const add = (e) => {
		e.preventDefault();
		if (!todo) return;

		// addTodo({ id: Date.now(), todo: todo, completed: false });
		//We don't need id here bcz we are setting in App.jsx while adding todo but if we set then it will not cause any error.

		// addTodo({todo:todo,completed:false})
		//in new syntax we can write this (todo instead of todo:todo)

		addTodo({ todo, completed: false });
		setTodo(""); //bcz when todo added then there will be prev remained in setTodo() so that's why make it empty
	};
	return (
		<form onSubmit={add} className="flex">
			<input
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Write Todo..."
				className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
			/>
			<button
				type="submit"
				className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
			>
				Add
			</button>
		</form>
	);
}

export default TodoForm;
