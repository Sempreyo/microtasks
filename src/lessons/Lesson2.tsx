import React from "react";
import {Cars, CarsType} from "./lesson-2/Cars";

type PropsType = {
	carsArr: Array<CarsType>
}

export function Lesson2(props: PropsType) {
	return (
		<div className="lesson lesson--2">
			<h2>Lesson 2</h2>
			<Cars carsArr={props.carsArr}/>
		</div>
	)
}