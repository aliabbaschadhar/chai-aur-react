import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
	const [themeMode, setThemeMode] = useState("light");

	//Giving functionality to lightTheme and darkTheme methods
	const lightTheme = () => {
		setThemeMode("light");
	};

	//As we know that we defined these methods in theme.js but we didn't give them functionality for that we will define those functions here and they will automatically inherit that functionality in whole program .

	const darkTheme = () => {
		setThemeMode("dark");
	};

	//Actual change in theme

	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		//Getting access of values means global values which are then passed to other components.
		<ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						<ThemeBtn />
					</div>

					<div className="w-full max-w-sm mx-auto">
						<Card />
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
