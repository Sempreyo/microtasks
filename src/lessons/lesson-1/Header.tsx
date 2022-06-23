type HeaderType = {
	titleForHeader: string
}

export function Header(props: HeaderType) {
	return (
		<>
			<span>{props.titleForHeader}</span>
		</>
	)
}