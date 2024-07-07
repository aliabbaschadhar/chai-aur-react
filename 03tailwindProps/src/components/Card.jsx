// //What is destructuring ?
// //In js destructuring is a syntax that allows you to extract values from arrays or properties from objects into distinct variables . Here's how it works --->

// //IN ARRAYS
// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;

// console.log(first); //1
// console.log(second); //2
// console.log(third); //3

// // we can also skip elements

// const number1 = [5, 6, 7];
// const [five, seven] = number1;

// console.log(five); //5
// console.log(seven); //7

// // * IN OBJECTS

// const person = {
// 	name: "ali",
// 	age: 25,
// 	city: "Hafizabad",
// };
// const { name, age, city } = person;
// console.log(name); //ali
// console.log(age); //25
// console.log(city); //Hafizabad

// //* renaming variable

// const person2 = {
// 	name: "alice",
// 	age: 23,
// 	city: "AliPur",
// };
// const { name: personName, age: personAge } = person1;
// console.log(personName); //Alice
// console.log(personAge); //23

// //Nested Desstructuring

// const alpha = {
// 	id: 1,
// 	name: "John Doe",
// 	address: {
// 		street: "123 main st",
// 		city: "unknown",
// 	},
// };

// const {
// 	name,
// 	address: { city },
// } = user;
// console.log(name); //Jhon Doe
// console.log(city); //unknown

// //Also can set default values

// const beta = {
// 	name: "Alice",
// 	age: 25,
// };

// const { name, city = "unknown" } = labor;
// console.log(name); //Alice
// console.log(city); //Unknown

//Props is an object.

// function Card(props) { //original syntax
// 	// console.log("props : ", props);

// function Card(props) {
//As props are objects then they we can access elements
// 	console.log(props.channel);

//Card

function Card({ channel, btnText }) {
	return (
		<div className="relative h-[400px] w-[300px] rounded-md">
			<img
				src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
				alt="AirMax Pro"
				className="z-0 h-full w-full rounded-md object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
			<div className="absolute bottom-4 left-4 text-left">
				<h1 className="text-lg font-semibold text-white">{channel}</h1>
				<p className="mt-2 text-sm text-gray-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Excepturi, debitis?
				</p>
				<button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
					{btnText} →
				</button>
			</div>
		</div>
	);
}

export default Card;
