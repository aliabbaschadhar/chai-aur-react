import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
	//AddTodo means we have to add something in store means we have to send something means dispatch something/functionality to Store.js

	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	//useDispatch() makes changes in store using a reducer dispatch means send karna means functionality send karna

	const addTodoHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(input)); //We are making changes with the help of addTodo reducer in object store.
		//dispatch aik reducer to use karke store mai changes karta hai.
		//We are dispatching an action
		setInput("");
	};

	return (
		<form onSubmit={addTodoHandler} className="space-x-3 mt-12">
			<input
				type="text"
				className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				placeholder="Enter a Todo..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				type="submit"
				className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			></button>
		</form>
	);
}

export default AddTodo;
