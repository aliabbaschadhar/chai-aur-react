import { useContext, createContext } from "react";

//We can also give context initially when our context is created like we did userContextProvider.jsx using useState() giving [user , setUser].

export const ThemeContext = createContext({
	//Whenever context is called it will get themeMode , and darkTheme and lightTheme methods

	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {},
});

//Making provider for context
export const ThemeProvider = ThemeContext.Provider;

//Custom Hook to use context

export default function useTheme() {
	return useContext(ThemeContext);
}
//Now we won't need two two exports everytime we need context we will only call useTheme we will get access to context values
