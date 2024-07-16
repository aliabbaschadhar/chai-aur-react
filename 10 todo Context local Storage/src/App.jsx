import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
	//State is for managing all the todos , not a single todo.
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		//To add new todo we will spread the previous todos in an array and old todo at first .
		// setTodos((prev) => [todo, ...prev]);
		//Now problem is that we have to make todo like as it is in context (a object).

		setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
		// we changed the todo id to make it unique so that we can loop through it and then spread todo in the object and then spread the pervious todos in array.
	};

	const updateTodo = (id, todo) => {
		setTodos(
			(prev) =>
				//prev-->previous todos array
				//prevTodo---> individual todo which is to be updated
				prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
			// checking that --> ? Does prevTodo's id matches the id given by you if does then update the todo otherwise return prevTodo
		);
	};

	const deleteTodo = (id) => {
		// setTodos((prev)=>prev.map(and some condition))
		//Not a great syntax for that pupose we will use filter method

		//Filter method returns a new array in which the variables statisfy the given true condition
		setTodos((prev) => prev.filter((todo) => todo.id !== id));

		//If the todo doesn't have same id with the array index todo then include that todo in the new array.
	};

	const toggleComplete = (id) => {
		//Setting a todo is completed
		setTodos((prev) =>
			prev.map((prevTodo) =>
				//If true then access all the values of todo and update the completed key that if it is true then make it false and vice versa.
				prevTodo.id === id
					? { ...prevTodo, completed: !prevTodo.completed }
					: prevTodo
			)
		);
	};

	//Local Storage-

	//Getting value from localStorage in JS format
	useEffect(() => {
		// JSON.parse() bcz we get value return in string form in localStorage and it also accepts value in string format.
		const todos = JSON.parse(localStorage.getItem("todos"));

		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	//Setting value in Local Storage in (key , value) pair.

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoProvider
			value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
		>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos
					</h1>
					<div className="mb-4">
						{/* Todo form goes here */}
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{/*Loop and Add TodoItem here */}
						{todos.map((todo) => (
							<div className="w-full" key={todo.id}>
								<TodoItem todo={todo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
}

export default App;
