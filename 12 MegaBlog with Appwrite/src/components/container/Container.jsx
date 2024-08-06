/* eslint-disable react/prop-types */
//Container accepts your properties as children like height width,or more
function Container({ children }) {
	return <div className="w-full max-w-7xl mx-auto px-4 ">{children}</div>;
}

export default Container;
