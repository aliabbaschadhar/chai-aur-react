/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Select = React.forwardRef(function Select(
	{ options, label, className = "", ...props },
	ref
) {
	const id = useId();
	return (
		<div className="w-full">
			{label && <label htmlFor={id} className="w-full"></label>}
			<select
				{...props}
				ref={ref}
				id={id}
				className={`px-3 py-2 rounded-lg bg-white text-black ouline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
			></select>
			{options?.map((option) => (
				<option key={id} value={option}>
					{option}
				</option>
			))}
		</div>
	);
});

export default Select;
