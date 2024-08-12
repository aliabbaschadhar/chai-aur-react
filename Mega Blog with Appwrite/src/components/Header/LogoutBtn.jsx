import authService from "../../appwrite/auth";
import { logout } from "../../features/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		authService
			.logout()
			.then(() => dispatch(logout()))
			.catch((error) =>
				console.log("Logout unsucccesful due to :", error)
			);
	};
	return (
		<div>
			<button
				className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
				onClick={logoutHandler}
			>
				Logout
			</button>
		</div>
	);
}

export default LogoutBtn;
