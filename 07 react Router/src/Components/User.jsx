import { useParams } from "react-router-dom";

function User() {
	const { userid } = useParams();
	return (
		<div className="text-center my-1 text-white p-6 bg-slate-500">
			{" "}
			User : {userid}
		</div>
	);
}

export default User;
