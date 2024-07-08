import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/aliabbaschadhar ")
	// 		.then((resonse) => resonse.json())
	// 		.then((data) => {
	// 			console.log(data); //by doing this info will not be rendered in the page so that we will use state to render it.
	// 			setData(data);
	// 		});
	// }, []);
	return (
		<div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
			{/* Now we  need followers here which will from gitHub api . I want to laod these followers when my page is loaded for that we will use useeffect(fn, []) */}
			Github Followers :{data.followers}
			<img src={data.avatar_url} alt="Image" width={300} />
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch(
		"https://api.github.com/users/aliabbaschadhar "
	);
	return response.json();
};
