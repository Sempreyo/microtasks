import React, {useState} from 'react';
import {Input} from './lesson-6/Input';
import {Button} from './lesson-6/Button';

export function Lesson6() {
	const [message, setMessage] = useState<Array<{message: string}>>([
		{message: 'hi'},
		{message: 'hello'},
		{message: 'yo'}
	])

	const [title, setTitle] = useState('')

	const addMessage = (title: string) => {
		const newMessage = {message: title}

		const updateMessage = [newMessage, ...message];
		setMessage(updateMessage);
	}

	const onClickButtonHandler = () => {
		addMessage(title)
		setTitle('')
	}

	return (
		<div className="lesson lesson--6">
			<h2>Lesson 6</h2>

			<div>
				{
					message.map((item, index) => {
						return <div key={index}>{item.message}</div>
					})
				}
			</div>
			<div className='input'>
				<Input title={title} setTitle={setTitle}/>
				<Button name={'+'} callback={onClickButtonHandler}/>
			</div>
		</div>
	)
}