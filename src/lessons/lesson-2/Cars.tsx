import React from "react";

export type CarsType = {
	manufacturer: string,
	model: string
}

type PropsType = {
	carsArr: Array<CarsType>
}

export function Cars(props: PropsType) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Производитель</th>
						<th>Модель</th>
					</tr>
				</thead>
				<tbody>
					{
						props.carsArr.map((item, index) => {
							return <tr key={index}>
								<td>{index + 1}</td>
								<td>{item.manufacturer}</td>
								<td>{item.model}</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</>
	)
}