function customRender(reactElement, container) {
	/*
    const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;
	domElement.setAttribute("herf", reactElement.props.herf);
	domElement.setAttribute("target", reactElement.props.target);

	container.appendChild(domElement);

    */

	// Modular function

	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;
	for (const prop in reactElement.props) {
		if (prop === "children") continue;
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	container.appendChild(domElement);

	const anotherName = (
		<a href="https://google.com" target="_blank">
			visit
		</a>
	);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},
	children: " Click me to visit  Google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
