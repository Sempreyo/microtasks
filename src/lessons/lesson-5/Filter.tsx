import React from "react";

type FilterType = 'all' | 'rubles' | 'dollars';

type FilteredMoneyType = {
	banknots: string,
	value: number,
	number: string
}

type PropsType = {
	onClickFilterHandler: (filterType: FilterType) => void,
	filteredMoney: Array<FilteredMoneyType>
}

export function Filter(props: PropsType) {
	return (
		<>
			<ul>
				{
					props.filteredMoney.map((item, index) => {
						return (
							<li key={index + 1}>
								<span>{item.banknots}</span>
								<span>{item.value}</span>
								<span>{item.number}</span>
							</li>
						)
					})
				}
			</ul>

			<button onClick={() => props.onClickFilterHandler('all')}>All</button>
			<button onClick={() => props.onClickFilterHandler('rubles')}>Rubles</button>
			<button onClick={() => props.onClickFilterHandler('dollars')}>Dollars</button>
		</>
	)
}