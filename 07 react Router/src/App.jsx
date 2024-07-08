import { Header, Home, Footer } from "./Components";

function App() {
	return (
		<>
			<Header />
			<Home /> {/* Not rendering bcz we used react Router in header */}
			<Footer />
		</>
	);
}

export default App;
