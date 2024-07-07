import Card from "./components/Card";

function App() {
	// let alpha = {
	// 	name: "Ali Abbas",
	// 	phoneNo: "03034605050",
	// };

	// let newArr = [1, 2, 3];

	return (
		<>
			<h1 className="bg-red-400 mb-4">Tailwind Test</h1>
			<Card channel="alphaBro" btnText="click me " />
			<Card channel="saba" btnText="visit me" />
		</>
	);
}

export default App;
