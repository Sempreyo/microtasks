import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './Todolist.module.css';
import {FilterValuesType} from './IndexTodolist';

type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	id: string
	title: string
	tasks: Array<TaskType>
	removeTask: (taskId: string, tlId: string) => void
	changeFilter: (value: FilterValuesType, tlId: string) => void
	addTask: (title: string, tlId: string) => void
	changeTaskStatus: (taskId: string, isDone: boolean, tlId: string) => void
	filter: FilterValuesType
}

export function Todolist(props: PropsType) {

	let [title, setTitle] = useState('')
	let [error, setError] = useState<string | null>(null)

	const addTask = () => {
		if (title.trim() !== '') {
			props.addTask(title.trim(), props.id);
			setTitle('');
		} else {
			setError('Title is required');
		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null);
		if (e.charCode === 13) {
			addTask();
		}
	}

	const onAllClickHandler = () => props.changeFilter('all', props.id);
	const onActiveClickHandler = () => props.changeFilter('active', props.id);
	const onCompletedClickHandler = () => props.changeFilter('completed', props.id);


	return <div>
		<h3>{props.title}</h3>
		<div className={s.taskItem}>
			<input value={title}
						 type={'text'}
						 onChange={onChangeHandler}
						 onKeyPress={onKeyPressHandler}
						 className={error ? 'error' : ''}
			/>
			<button onClick={addTask} className={s.addTask}>+</button>
			{error && <div className="error-message">{error}</div>}
		</div>
		<ul className={s.tasksList}>
			{
				props.tasks.map(t => {
					const onClickHandler = () => props.removeTask(t.id, props.id)
					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
						props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
					}

					return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
						<input type="checkbox"
									 onChange={onChangeHandler}
									 checked={t.isDone}/>
						<span>{t.title}</span>
						<button onClick={onClickHandler} className={s.removeTask}>x</button>
					</li>
				})
			}
		</ul>
		<div className={s.filter}>
			<button className={props.filter === 'all' ? 'active-filter' : ''}
							onClick={onAllClickHandler}>All
			</button>
			<button className={props.filter === 'active' ? 'active-filter' : ''}
							onClick={onActiveClickHandler}>Active
			</button>
			<button className={props.filter === 'completed' ? 'active-filter' : ''}
							onClick={onCompletedClickHandler}>Completed
			</button>
		</div>
	</div>
}
