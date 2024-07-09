import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { About, Contact, Github, Home, User } from "./components";
import { githubInfoLoader } from "../../07 react Router/src/Components/Github";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Root />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "about",
// 				element: <About />,
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="user/:userid" element={<User />} />
			<Route
				loader={githubInfoLoader}
				path="github"
				element={<Github />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
