/* eslint-disable react/prop-types */
import { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
	{ label, type = "text", className = "", ...props },
	ref
) {
	const id = useId();
	return (
		<div className="w-full">
			{label && (
				<label className="inline-block mb-1 pl-1" htmlFor={id}>
					{label}
				</label>
			)}
			<input
				type={type}
				className={` px-3 py-4 rouded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
				ref={ref} //It will provide refrence to the input to access state
				{...props}
				id={id}
			/>
		</div>
	);
});

export default Input;
