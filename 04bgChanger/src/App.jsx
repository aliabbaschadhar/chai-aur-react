import { useState } from "react";

export default function App() {
	const [color, setColor] = useState("lightblue");
	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }} //Syntax hai-->{{}}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow -lg"
						style={{ backgroundColor: "blue" }}
						// 	onClick={setColor("blue")}//It is not applicable bcz we are executing setColor() here and onclick will what the setColor() returns.

						onClick={() => setColor("blue")}
					>
						blue
					</button>
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow -lg"
						style={{ backgroundColor: "orange" }}
						onClick={() => setColor("orange")}
					>
						Orange
					</button>
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow -lg"
						style={{ backgroundColor: "yellow" }}
						onClick={() => setColor("yellow")}
					>
						Yellow
					</button>
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow -lg"
						style={{ backgroundColor: "red" }}
						onClick={() => setColor("red")}
					>
						Red
					</button>
					<button
						className="outline-none px-4 py-1 rounded-full text-white shadow -lg"
						style={{ backgroundColor: "green" }}
						onClick={() => setColor("green")}
					>
						Green
					</button>
				</div>
			</div>
		</div>
	);
}
