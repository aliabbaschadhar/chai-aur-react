import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

import "./App.css";

function App() {
	return (
		<UserContextProvider>
			<h1>React with Chai and share is important</h1>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;
