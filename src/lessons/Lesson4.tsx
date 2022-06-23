import React, {useState} from "react";

export function Lesson4() {
	/**
	 * Хук useState
	 */
	let [a, setA] = useState(0); // a - состояние, setA - функция, в которой находится состояние

	const onClickCounterHandler = () => {
		setA(++a);
	}

	const onClickResetHandler = () => {
		setA(0);
	}

	return (
		<div className="lesson lesson--4">
			<h2>Lesson 4</h2>

			<h1>{a}</h1>
			<div className="buttons-wrapper">
				<button onClick={onClickCounterHandler}>number</button>
				<button onClick={onClickResetHandler}>0</button>
			</div>
		</div>
	)
}