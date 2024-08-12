/* eslint-disable react/prop-types */
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

export default function PostCard({ $id, title, featuredImage }) {
	return (
		<Link to={`/post/${$id}`}>
			<div className="w-full bg-gray rounded-xl">
				<div>
					<img
						src={appwriteService.filePreview(featuredImage)}
						alt={title}
						className="rounded-xl"
					/>
				</div>
				<h1 className="text-xl font-bold">{title}</h1>
			</div>
		</Link>
	);
}
