import { createSlice, nanoid } from "@reduxjs/toolkit";

//A slice in Redux Toolkit is a modular piece of the Redux store that encapsulates the state, reducers, and actions related to a specific feature of an application.
// It simplifies the process of managing state in a Redux application by allowing developers to define all related logic in a single file.

//nanoid()-->Used to generate unique ids.

const initialState = {
	//InitialState means that at Starting how should the store would look like would it be empty , or have some variable or methods.
	todos: [{ id: 1, text: "Hello World" }],
};

//Reducer is just a functionality and slice is a bigger version of reducer.

// eslint-disable-next-line no-unused-vars
function sayHello() {
	console.log("Hello World");
}

export const todoSlice = createSlice({
	name: "todo", //this name will be shown in redux-toolkit devTools name property is available by redux not made by me.

	// initialState:[{id:1,text:"Hello World"}] // other syntax

	initialState,

	reducers: {
		// addTodo:sayHello, //2nd syntax
		//In every function we get access to two things one state and one action .
		//State --> State give us access to whatever is present in initialstate
		//Action --> Sometimes we get any value means in removeTodo we will get anything like id to remove todo and we will get those values from action

		addTodo: (state, action) => {
			//Now we have to make a new todo for that we will use action method bcz we get values from action.

			const todo = {
				id: nanoid,
				text: action.payload.text, //payload is an object from which we can access different values like text , email etc.
			};

			//using state we get access to values in initial state

			state.todos.push(todo); //In todos array we pushed todo object
		},
		removeTodo: (state, action) => {
			//As we are getting any id to remove that specific todo so we will access todo id by using payload
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload.id
			);
		},

		updateTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo
			);
		},

		//the difference between redux-toolkit and context api is that in context api we just write decleration not definition and in redux-toolkit we write both decleration and definition here.
	},
});

//Now we will export the functionalities
//We will export them individually bcz they will be used in our components to update the state
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

//We have exported the reducers but our store doesn't have any idea about that and our store is very restrictive and  has rule that i will only update the value only if the reducer is registered.
// That's why we will provide it list of all reducers

export default todoSlice.reducer;
