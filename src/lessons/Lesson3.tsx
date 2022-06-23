import React from "react";
import {Button} from "./lesson-3/Button";

export function Lesson3() {
	/**
	 * State for lesson 3
	 */
	const Button1Foo = (subscriber: string) => {
		console.log(subscriber)
	}

	const Button2Foo = (subscriber: string) => {
		console.log(subscriber)
	}

	const Button3Foo = () => {
		console.log('Nothing')
	}

	return (
		<div className="lesson lesson--3">
			<h2>Lesson 3</h2>

			<div className="buttons-wrapper">
				<Button name="Subscribe" callBack={() => (Button1Foo('Andrew'))}/>
				<Button name="Unsubscribe" callBack={() => (Button2Foo('John'))}/>
				<Button name="Empty" callBack={Button3Foo}/>
			</div>
		</div>
	)
}