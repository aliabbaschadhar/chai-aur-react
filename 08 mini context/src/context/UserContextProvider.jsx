import React from "react";
//As we need to provide context for that let's create provider
import UserContext from "./UserContext";

//As we remember <outlet/> concept which was that everything up and down outlet will remain and values only at outlet will change.

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
	//Anything comes as a children props use it as it is.
	const [user, setUser] = React.useState(null);
	return (
		// <UserContext.Provider >
		// 	{/* wraping it simply in userContext will not work to access it's property called provider */}
		// 	{children}
		// 	{/* will be as it is no matter it is a dashboard or card */}
		// </UserContext.Provider>

		//We need to give access to some value which it will passing to other children components
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
