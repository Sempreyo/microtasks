import React from 'react';
import './App.css';
import {Lesson1} from "./lessons/Lesson1";
import {Lesson2} from "./lessons/Lesson2";
import {CarsType} from "./lessons/lesson-2/Cars";
import {Lesson3} from "./lessons/Lesson3";
import {Lesson4} from "./lessons/Lesson4";
import {Lesson5} from "./lessons/Lesson5";

function App() {
	/**
	 * State for lesson 2
	 */
	const topCars: Array<CarsType> = [
		{
			manufacturer: 'BMW',
			model: 'm5cs'
		},
		{
			manufacturer: 'Mercedes',
			model: 'e63s'
		},
		{
			manufacturer: 'Audi',
			model: 'rs6'
		}
	]

	return (
		<>
			<Lesson1/>
			<Lesson2 carsArr={topCars}/>
			<Lesson3/>
			<Lesson4/>
			<Lesson5/>
		</>
	);
}

export default App;
