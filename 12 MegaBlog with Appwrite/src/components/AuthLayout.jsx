/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Portected({ children, authentication = true }) {
	const navigate = useNavigate();
	const [loader, setLoader] = useState(true);
	const authStatus = useSelector((state) => state.auth.status);

	//TODO: make it more easy to understand

	// if (authStatus) {
	// 	navigate("/");
	// } else if (!authStatus) {
	// 	navigate("/login");
	// }

	//useEffect will keep track of changes
	useEffect(() => {
		if (authentication && authStatus !== authentication) {
			navigate("/login");
		} else if (!authentication && authStatus !== authentication) {
			navigate("/");
		}
		setLoader(false);
	}, [authStatus, navigate, authentication]);

	return loader ? <h1>Loading...</h1> : <>{children}</>;
}
