import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Github, { githubInfoLoader } from "./Components/Github";
import User from "./Components/User";

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
			<Route path="" element={<Home />}></Route>
			<Route path="about" element={<About />}></Route>
			<Route path="contact" element={<Contact />}></Route>
			<Route path="user:userid" element={<User />}></Route>

			{/* Before loader api data is fetched when we clicked on button and page is loaded means we have to wait a few millisecods for that. */}

			{/* But using loader when our cursor reaches at button api is called and response kept in cache memory and we don't need wait for response and when it page is loaded response is already rendered in page. */}
			<Route
				loader={githubInfoLoader}
				path="github"
				element={<Github />}
			></Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
