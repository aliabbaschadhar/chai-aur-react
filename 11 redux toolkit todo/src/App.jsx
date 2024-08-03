// Store ---> Store is called as single source of truth where we hold our variables or other things means we store things here so that we can access them like golbal vairables.
//* All the react application must have only one store bcz there must be a single source of truth.
//But we can have miniStores like auth store etc.
//ReduxToolkit is used inplace of context Api.
//In context Api while updating anything we just can't change the state out of blue first we needed to spread arrays past values and then we update the value.
//If we just update the value or change the state then past vlaues of arrays will be overwritten.
//But in Redux Toolkit we can update the state without first spreading the past array , it handles all of these things like spreading past array under the hood.

import { AddTodo, Todos } from "./components";
import "./App.css";
//? Reducers --> They are used to make changes in store / mini stores means functionality in stores will be handled by reducers

//We used two method in redux
//1)-->When we need to select something from store we will use useSelector()
//2)--<When we need to send anything from store somewhere we will use useDispatch()

function App() {
	return (
		<>
			<h1 className="text-3xl">Learning React Redux ToolKit</h1>
			<AddTodo />
			<Todos />
		</>
	);
}

export default App;
