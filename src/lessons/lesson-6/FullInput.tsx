import React, {ChangeEvent, useState} from 'react';

export type PropsType = {
	addMessage: (title: string) => void
}

export const FullInput = (props: PropsType) => {
	const [title, setTitle] = useState('');

	const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	const onClickHandler = () => {
		props.addMessage(title)
		setTitle('')
	}

	return (
		<div className='input'>
			<input value={title} onChange={onMessageChangeHandler}/>
			<button onClick={onClickHandler}>+</button>
		</div>
	);
};
