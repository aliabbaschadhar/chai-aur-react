import "./App.css";

//! What are environment variables
//Environment variables are key-value pairs used to store configuration settings outside of the application code.
// They help manage sensitive information like API keys and database connections securely.
// Environment variables allow developers to change settings for different environments (development, testing, production) without modifying the code.
//This flexibility simplifies deployment and ensures consistency across environments.

function App() {
	// console.log(process.env.REACT_APP_APPWRITE_URL);
	//receiving error process isn't defined becz we created an VITE app and access env using create react method

	// console.log(import.meta.env.VITE_APPWRITE_URL); //to access a vite app

	return (
		<>
			<h1 className="text-3xl text-orange-500 bg-black">
				A Blog with Appwrite
			</h1>
		</>
	);
}

export default App;
