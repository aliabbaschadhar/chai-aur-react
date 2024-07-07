import { useCallback, useEffect, useState, useRef } from "react";

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//Now we want to generate password but we want to generate password again whenever number, char, length changes (dependencies) so for that we will use a hook useCallback(fn,[dependencies])

	// const passwordGenerator = () => {};

	//useCallback() lets you to cache the function definition b/w the re-renders means i have got a function you(react) holds it in cache(memory).
	// And execute it as much as you can (matlab jitna part use ho raha kr lo aur jitna nai ho raha usko rakh lo).

	// * MY UNDERSTANDING ABOUT useCallback()---> I have a function put it in cache memory(cache memory is like a ram memory but it is the smallest and fastest accesible memory.)
	// * As much as you can hold it in cache memory and if I run it again then use as much part as you want and leave the remaining part(talkin about ifelse conditions.)

	//useRef() -- > to take refrence

	const passwordRef = useRef(null);

	const copyToClipBoard = useCallback(() => {
		passwordRef.current?.select(); // --> ? is used due to optional selction bcz password can be null
		passwordRef.current?.setSelectionRange(0, 15); //To select in a range of password
		window.navigator.clipboard.writeText(password); //Sever side backend par window object nai hota
	}, [password]);

	//Generating password
	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numberAllowed) str += "0123456789";
		if (charAllowed) str += "`~{}[]=+_-)(!@#$%^&*";
		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

	//* We used setPassword here because if anything changes then set password .If we don't use setPassword our code will run bcz React will assume it but it is used for memoization(optimization).

	// [length,numberAllowed,charAllowed,setPassword]
	//If we use password instead of setPassword then our code will run into infinite loop bcz everytime useCallback() is runnig the password is reassigned again and again.

	//We can skip setPassword if we don't want to save the password value in cache and our code will run properly

	//Jitni bhi dependencies un mai kuch bhi change hua tu password ko set kardena aur useCallback() usko yaad rakhe ga in cache.

	//We use dependencies so that if anything changes in the the given variables re-render the function.

	// passwordGenerator(); // Only using that causes too many so rerender and react limits the rerenders to prevent an infinite loop.
	//To avoid that we will use useEffect() hook.

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charAllowed, passwordGenerator]);

	//! Difference b/w useCallback()  and useEffect() dependencies
	//(i)---> useCallback() dependencies tells us if any thing changes then put it in cache matlab memory mai save karlo ta k bad mai access ho sake .
	//useCallback is reponsible to memoize function not run function

	//(ii)---> useEffect() dependencies tell us that if anything changes in the dependencies then re- run the function.

	//! useCallback --> memoize/optimize  & useEffect--> run the function

	//useCallback() is like function definition

	return (
		<>
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
				<div className="flex shadow rounded-lg overflow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3"
						placeholder="password"
						readOnly
						ref={passwordRef}
					/>
					<button
						className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
						onClick={copyToClipBoard}
					>
						Copy
					</button>

					{/* Now we have created button and input box but the button need to linked it with inputBox */}

					{/* For that we purpose we will take the refrence of input box by using react's useRef() hook and try to copy password using it when button is clicked */}
				</div>
				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={6}
							max={100}
							value={length}
							onChange={(e) => setLength(e.target.value)}
							className="cursor-pointer"
						/>
						<label>Length: {length}</label>
					</div>
					<div className="flex flex-center gap-x-1`">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							id="numberInput"
							//if we do

							// onChange={setNumberAllowed(true)}

							//then we executing the function but it is to be executed when it is clicked.

							//And if we do

							// onChange={()=>{
							// 	setNumberAllowed(true);
							// }}

							// the numbers will always be executed whether checkbox is tick or empty

							onChange={() => {
								setNumberAllowed((prev) => !prev);
								//Reverse the previous value so that same password doesn't occur.
							}}
						/>
						<label>Numbers</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={charAllowed}
							id="charInput"
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						<label>Characters</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
