import React from "react";
import userContext from "./userContext";

// eslint-disable-next-line react/prop-types
function UserContextProvider({ children }) {
	const [user, setUser] = React.useState(null);
	return (
		<userContext.Provider value={{ user, setUser }}>
			{children}
		</userContext.Provider>
	);
}

export default UserContextProvider;
