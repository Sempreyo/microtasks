import React, {useState} from "react";
import {Filter} from "./lesson-5/Filter";

type FilterType = 'all' | 'rubles' | 'dollars';

export function Lesson5() {
	/**
	 * Elements state
	 */
	const [money, setMoney] = useState([
		{banknots: 'Dollars', value: 100, number: ' a1234567890'},
		{banknots: 'Dollars', value: 50, number: ' z1234567890'},
		{banknots: 'RUBLS', value: 100, number: ' w1234567890'},
		{banknots: 'Dollars', value: 100, number: ' e1234567890'},
		{banknots: 'Dollars', value: 50, number: ' c1234567890'},
		{banknots: 'RUBLS', value: 100, number: ' r1234567890'},
		{banknots: 'Dollars', value: 50, number: ' x1234567890'},
		{banknots: 'RUBLS', value: 50, number: ' v1234567890'},
	]);

	/**
	 * Filter value state
	 */
	const [filterValue, setFilterValue] = useState<FilterType>('all');

	let filteredMoney = money;
	switch (filterValue) {
		case 'rubles':
			filteredMoney = money.filter(item => item.banknots === 'RUBLS')
			break;
		case 'dollars':
			filteredMoney = money.filter(item => item.banknots === 'Dollars')
			break;
	}

	const onClickFilterHandler = (filterType: FilterType) => {
		setFilterValue(filterType);
	}

	return (
		<div className="lesson lesson--5">
			<h2>Lesson 5</h2>

			<Filter onClickFilterHandler={onClickFilterHandler} filteredMoney={filteredMoney} />
		</div>
	)
}