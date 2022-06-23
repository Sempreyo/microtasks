type BodyType = {
	titleForBody: string
}

export function Body(props: BodyType) {
	return (
		<>
			<span>{props.titleForBody}</span>
		</>
	)
}