import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/hiteshchoudhary")
	// 		.then((response) => response.json())
	// 		.then((data) => setData(data));
	// 	console.log(data);
	// }, []);
	return (
		<div className="text-center m-4 bg-gray-700 text-white p -4 text-3xl flex flex-wrap items-center ">
			<img src={data.avatar_url} alt="Git picture" width={300} />
			<p>Github Followers :{data.followers}</p>
		</div>
	);
}

export default Github;

const githubInfoLoader = async () => {
	const response = await fetch(
		"https://api.github.com/users/hiteshchoudhary"
	);
	return response.json();
};
