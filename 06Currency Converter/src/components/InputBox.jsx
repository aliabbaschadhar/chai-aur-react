import { useId } from "react";

function InputBox({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = "usd",
	amountDisabled = false, //can skip if wanted to
	currencyDisabled = false,
	className = "",
}) {
	// useId is used for generating unique ids that can be passed to accessbility attributes(accessing e.g labels using tab space ) which is very difficult in that case but using react hook useId will make our work simpler.

	const amountInputId = useId();

	return (
		//if user wants to add classes for inputBox
		<div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
			<div className="w-1/2">
				{/* <label className="text-black/40 mb-2 inline-block"> */}

				{/* label will repeat again and again whenever we change the currency so we have to make it optimize by provideing it id */}

				{/* for that purpose we have hook called useId it will provide unique id to label all the time  */}
				<label
					id={amountInputId}
					className="text-black/40 mb-2 inline-block"
				>
					{label}
				</label>
				{/* same goes with inputbox  */}
				<input
					id={amountInputId}
					className="outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
					disabled={amountDisabled}
					value={amount}
					onChange={
						(e) =>
							onAmountChange &&
							onAmountChange(Number(e.target.value)) //A checker if user has not given amount
					}
				/>
			</div>
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select
					className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
					value={selectCurrency}
					disabled={currencyDisabled}
					onChange={
						(e) =>
							onCurrencyChange && onCurrencyChange(e.target.value) // if user has not selected currency
					}
				>
					{/* Getting all the currencies into array  and then looping throught it  */}
					{/* {currencyOptions.map((currency)=>(
						<option value={currency}>
						{currency}
					</option>
					))} */}

					{/* Looping through array without passing a unique key hits the
					performance very badly bcz react is creating dom and repeaating value react needs to know is it creating same value again and again for that purpose we provide a key to it as a prop. */}

					{currencyOptions.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default InputBox;
