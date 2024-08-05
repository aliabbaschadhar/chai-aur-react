import { useCallback, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./features/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

//! What are environment variables
//Environment variables are key-value pairs used to store configuration settings outside of the application code.
// They help manage sensitive information like API keys and database connections securely.
// Environment variables allow developers to change settings for different environments (development, testing, production) without modifying the code.
//This flexibility simplifies deployment and ensures consistency across environments.

function App() {
	// console.log(process.env.REACT_APP_APPWRITE_URL);
	//receiving error process isn't defined becz we created an VITE app and access env using create react method

	// console.log(import.meta.env.VITE_APPWRITE_URL); //to access a vite app

	const [loading, setLoading] = useState(true); // because we are using useEffect()

	//When user is loggedIn then we will show him data otherwise loading.
	//Whenever we sending some request to database or network and waiting for response we will use loading state for conditional rendering

	const dispatch = useDispatch();

	useCallback(() => {
		authService
			.getCurrentUser() //returns a promise
			.then((userData) => {
				if (userData) {
					dispatch(login({ userData }));
				} else {
					dispatch(logout());
				}
			})
			.catch((error) => console.log("Error received : ", error))
			.finally(() => setLoading(false));
	}, [dispatch, setLoading]);

	/* 1-->  We have to check that either user is logedIn or logedOut whenever app is loaded if user is loggedIN then we will show him some components otherwise we will him AuthForm  */

	if (loading) {
		return (
			<div className="min-h-screen flex-wrap content-between bg-gray-400">
				<div className="w-full block">
					<Header />
					<main>TODO: {/* <Outlet/> */}</main>
					<Footer />
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<h1>No data </h1>
				{console.log("No data ...")}
			</div>
		);
	}
}

export default App;
