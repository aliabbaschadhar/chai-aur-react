//Custom hooks can accept react functions

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
	const [data, setData] = useState({}); //empty object is passed bcz if api doesn't return anything then our program doesn't crash
	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
		) //returns some data then data will be converted into JSON bcz mostly api's return data in the form of strings
			.then((res) => res.json())

			//as we seen the response of api in browser so we don't need date we only need currency(usd) object.
			// so we are accesing it using [] operator we can also acces it in the form of . notation like res.currency.

			.then((res) => setData(res[currency]));
		console.log(data);
	}, [currency]);
	return data;
}

export default useCurrencyInfo;
