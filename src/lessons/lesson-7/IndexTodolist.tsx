import React, {useState} from 'react';
import './IndexTodolist.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type todolistsType = {
	id: string
	title: string,
	filter: FilterValuesType
}

export type FilterValuesType = 'all' | 'active' | 'completed';

function IndexTodolist() {

	// let [tasks, setTasks] = useState([
	//     {id: v1(), title: "HTML&CSS", isDone: true},
	//     {id: v1(), title: "JS", isDone: true},
	//     {id: v1(), title: "ReactJS", isDone: false},
	//     {id: v1(), title: "Rest API", isDone: false},
	//     {id: v1(), title: "GraphQL", isDone: false},
	// ]);
	// let [filter, setFilter] = useState<FilterValuesType>('all');

	let todolistID1 = v1();
	let todolistID2 = v1();

	let [todolists, setTodolists] = useState<todolistsType[]>([
		{id: todolistID1, title: 'What to learn', filter: 'all'},
		{id: todolistID2, title: 'What to buy', filter: 'all'},
	])

	let [tasks, setTasks] = useState({
		[todolistID1]: [
			{id: v1(), title: 'HTML&CSS', isDone: true},
			{id: v1(), title: 'JS', isDone: true},
			{id: v1(), title: 'ReactJS', isDone: false},
			{id: v1(), title: 'Rest API', isDone: false},
			{id: v1(), title: 'GraphQL', isDone: false},
		],
		[todolistID2]: [
			{id: v1(), title: 'HTML&CSS2', isDone: true},
			{id: v1(), title: 'JS2', isDone: true},
			{id: v1(), title: 'ReactJS2', isDone: false},
			{id: v1(), title: 'Rest API2', isDone: false},
			{id: v1(), title: 'GraphQL2', isDone: false},
		]
	});


	function removeTask(id: string, tlId: string) {
		setTasks({...tasks, [tlId]: tasks[tlId].filter(item => item.id !== id)})
	}

	function addTask(title: string, tlId: string) {
		let task = {id: v1(), title: title, isDone: false};

		setTasks({...tasks, [tlId]: [task, ...tasks[tlId]]})
	}

	function changeStatus(taskId: string, isDone: boolean, tlId: string) {
		setTasks({...tasks, [tlId]: tasks[tlId].map(item => item.id === taskId ? {...item, isDone} : item)})
	}

	function changeFilter(value: FilterValuesType, tlId: string) {
		setTodolists(todolists.map(item => item.id === tlId ? {...item, filter: value} : item))
	}

	return (
		<div className="IndexTodolist">
			{
				todolists.map(item => {
					let tasksForTodolist = tasks[item.id];

					switch (item.filter) {
						case 'active':
							tasksForTodolist = tasks[item.id].filter(t => !t.isDone);
							break;
						case 'completed':
							tasksForTodolist = tasks[item.id].filter(t => t.isDone);
							break;
					}

					return (
						<Todolist
							key={item.id}
							id={item.id}
							title={item.title}
							tasks={tasksForTodolist}
							removeTask={removeTask}
							changeFilter={changeFilter}
							addTask={addTask}
							changeTaskStatus={changeStatus}
							filter={item.filter}
						/>
					)
				})
			}
		</div>
	);
}

export default IndexTodolist;
