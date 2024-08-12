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
				id={id}
				ref={ref}
				className={`px-3 py-2 rounded-lg bg-white text-black ouline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
			></select>
			{options?.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</div>
	);
});
//Another syntax to forward ref
// export default React.forwardRef(Select); //But this syntax is not recommended and try to use other syntax.

// const Select = React.forwardRef(function Select({props}),ref)

export default Select;
