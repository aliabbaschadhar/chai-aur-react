import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./features/authSlice";
import { Header, Footer } from "./components/";
import { Outlet } from "react-router-dom";

export default function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login(userData));
				} else {
					dispatch(logout());
				}
			})
			.catch((error) => console.log("Error occured : ", error))
			.finally(() => setLoading(false));
	}, [dispatch, setLoading]);

	//Return -->Conditional rendering

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
