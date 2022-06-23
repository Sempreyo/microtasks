import React from "react";
import {Body} from "./lesson-1/Body";
import {Header} from "./lesson-1/Header";
import {Footer} from "./lesson-1/Footer";

export function Lesson1() {
	return (
		<div className="lesson lesson--1">
			<h2>Lesson 1</h2>
			<Header titleForHeader="Header"/>
			<Body titleForBody="Body"/>
			<Footer titleForFooter="Footer"/>
		</div>
	)
}