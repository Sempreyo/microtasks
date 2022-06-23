type FooterType = {
	titleForFooter: string
}

export function Footer(props: FooterType) {
	return (
		<>
			<span>{props.titleForFooter}</span>
		</>
	)
}