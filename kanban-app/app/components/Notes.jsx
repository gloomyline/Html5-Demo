import React from 'react';
// import uuid from 'uuid'
import Note from './Note';
import Editable from './Editable';
// const notes = [
// 	{
// 		id: uuid.v4(),
// 		task: 'Learn React'
// 	},
// 	{
// 		id: uuid.v4(),
// 		task: 'Do laundry'
// 	}
// ]

// export default () => (
// 	<ul>{notes.map(note => 
// 		<li key={note.id}>{note.task}</li>
// 	)}</ul>
// )

// export default ({notes, onDelete=() => {}}) => (
export default ({
	notes,
	onNoteClick=() => {},
	onEdit=() => {},
	onDelete=() => {}
}) => (
	<ul className="notes">{notes.map(({id, editing, task}) => 
		<li key={id}>
			<Note className="note" onClick={onNoteClick.bind(null, id)}>
				<Editable
					className="editable"
					editing={editing}
					value={task}
					onEdit={onEdit.bind(null, id)} />
				<button className="delete" onClick={onDelete.bind(null, id)}>Del</button>
			</Note>
		</li>
	)}</ul>
)
// 	<ul>{notes.map(({id, task}) => 
// 		// <li key={note.id}>{note.task}</li>
// 		<li key={id}>
// 			<Note>
// 				<span>{task}</span>
// 				<button onClick={onDelete.bind(null, id)}>Del</button>
// 			</Note>
// 		</li>
// 	)}</ul>
// )