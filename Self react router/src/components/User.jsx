import { useParams } from "react-router-dom";

function User() {
	const { userid } = useParams();
	return (
		<div className="text-center p-8 m-4 bg-blue-500 text-white text-3xl">
			User : {userid}
		</div>
	);
}

export default User;
