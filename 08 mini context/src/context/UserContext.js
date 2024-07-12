import React from "react";

const UserContext = React.createContext();

export default UserContext; //When context is created then we have to create a provider to provide data.
//Context is like a global variable and all the other components inside it , can access directly data/states from that global variable .
//Context is used like a wraper.
{
	/* <UserContext>
    <LogIn/>
    <Card>
        <Data/>
    </Card>
</UserContext> */
}
