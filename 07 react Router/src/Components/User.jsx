import { useParams } from "react-router-dom";
//useParams giveus to access to whatever into the URL , it all depends on us what we want to do with it.
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
