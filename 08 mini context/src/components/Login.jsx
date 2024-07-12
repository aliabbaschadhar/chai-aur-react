import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext); //setUser from userContextProvider
	//agr koi value set karni hai tu setUser access karke userContext ka kar sakte hai lekin agr kuch access kar karna hai tu tu simply access kar sakte hai
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};
	return (
		<div>
			<h2>Login</h2>
			<input
				type="text"
				placeholder="username..."
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="text"
				placeholder="password..."
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
