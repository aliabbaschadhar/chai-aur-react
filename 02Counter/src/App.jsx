import { useState } from "react";

import "./App.css";

//React is used to help in updation of ui

// useState is used to change the value in ui means used to propogate the change in DOM
function App() {
	//useState returns two things in the form of array
	let [counter, setCount] = useState(1);
	// let counter = 15;
	const addValue = () => {
		// counter = counter + 1;
		if (counter <= 19) {
			// setCount(counter + 1);
			// setCount(counter + 1);
			// setCount(counter + 1);
			// setCount(counter + 1);
			// setCount(counter + 1);

			//By using above approach when increment the value then counter will be added only once due to react fiber algorithm.

			//*Fiber Algorithm : In UI if one thing is getting updated and another response came and when react will try to update the UI then another reponse came then updating UI again and again consumes more resources.Then --->

			// React team made an algorithm that when react dom is trying to update the UI then it will wait for other responses so that when all the resposes will come then it will update the UI

			//! REACT sends the all updates in variables and UI in the form of batches.

			//setCount(counter+1) all of them were setting counter only once bcz they were accessing the same counter not the last updated counter.

			//? To update the counter with 4 or 5 we will use

			setCount((prevCounter) => prevCounter + 1);
			setCount((prevCounter) => prevCounter + 1);
			setCount((prevCounter) => prevCounter + 1);
			setCount((prevCounter) => prevCounter + 1);

			//Now setCount is accessing all the time prvious state/counter
		} else setCount(20);

		//or
		// counter = counter + 1;
		// setCount(counter);
	};

	function removeValue() {
		if (counter > 0) {
			// setCount(counter - 1);

			setCount((prevCounter) => prevCounter - 1);
			setCount((prevCounter) => prevCounter - 1);
			setCount((prevCounter) => prevCounter - 1);
			setCount((prevCounter) => prevCounter - 1);
		} else {
			setCount(0);
		}
	}
	return (
		<>
			<h1>Chai aur code : {counter}</h1>
			<button onClick={addValue}>Add Value</button>
			<button onClick={removeValue}>Remove Value :{counter}</button>
		</>
	);
}

export default App;
