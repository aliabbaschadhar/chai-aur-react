import { Link, NavLink } from "react-router-dom";
export default function Header() {
	return (
		<header className="shadow sticky z-50 top-0">
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link to="/" className="flex items-center">
						{/*In react link is used instead of <a></a>(tag) bcz when anchor tag is clicked whole page refreshes and in react this isn't allowed
                        
                        bcz whenever page is refreshed then react creates its own virtual dom from scratch which is not an optimized way in react. */}
						{/* So we use Link instead of <a></a> provided by react router  */}
						{/* For which htmlfor is used in anchor tag for same pupose to attribute is used in <Link></Link> */}
						{/* NavLink is special type of link used for navigation but it provides addtional features to handle the active state.

						By using navlink we identify on which page we are right now this can be shown by changing the color/text of link when we reach at a particular page.

						Purpose: The NavLink component is a special type of Link that is used for navigation, but it provides additional features to handle the active state.

Active State: NavLink can automatically apply an "active" class to the link when the current URL matches the link's destination. This is useful for highlighting the active link in a navigation menu.

Customization: You can customize the active class name and style through properties like activeClassName and activeStyle. */}
						<img
							src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
							className="mr-3 h-12"
							alt="Logo"
						/>
					</Link>
					<div className="flex items-center lg:order-2">
						<Link
							to="#"
							className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
						>
							Log in
						</Link>
						<Link
							to="#"
							className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
						>
							Get started
						</Link>
					</div>
					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							<li>
								{/* we get variable name isActive when we pass classes in NavLink such that we can check on which page we are right now by matching with URL. */}

								<NavLink
									to="/"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b ${
											isActive
												? "text-orange-700"
												: "text-gray-700"
										}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/About"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b ${
											isActive
												? "text-orange-700"
												: "text-gray-700"
										}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Contact"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b ${
											isActive
												? "text-orange-700"
												: "text-gray-700"
										}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Contact Us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/github"
									className={({ isActive }) =>
										`block py-2 pr-4 pl-3 duration-200 border-b ${
											isActive
												? "text-orange-700"
												: "text-gray-700"
										}  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
									}
								>
									Github
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
