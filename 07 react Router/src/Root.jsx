import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Root() {
	return (
		<>
			<Header />
			<Outlet />
			{/* it will use this layout as base and jo b cheez is k andar ayi gi usko change kare ga baqi header aur footer ko same hi rehne de ga */}
			<Footer />
		</>
	);
}

export default Root;
