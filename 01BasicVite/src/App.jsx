import Chai from "./Chai";

// As browser creates dom react also creates it's virtual dom in parallel

// Why react is called single page application bcz in index.html we have only one div with id root

function App() {
	const username = "Ali Abbas Chadhar";
	return (
		<>
			{/* fragments = <></> used instead of div */}
			{/* in jsx comments are done in  {} */}

			<h1>Hello world {username}</h1>

			{/* To insert javascript in jsx we use curly braces {username} */}

			{/* these curly braces are called evaluated expression means we can only use the value of variable , we can't write the whole logic in it like we are creating any object in it or something else
			
			---> We don't write whole javascript we write the evaluated expression means final outcome.
			*/}

			{/* {if(true)username} isn't a valid syntax */}

			<Chai />
		</>
	);
}

export default App;
