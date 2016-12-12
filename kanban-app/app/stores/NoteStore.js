/*
* @Author: gloomyline
* @Date:   2016-12-12 11:11:19
* @Last Modified by:   gloomyline
* @Last Modified time: 2016-12-12 13:39:42
*/

// import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
	constructor() {
		this.bindActions(NoteActions);

		// this.notes = [
		// 	{
		// 		id: uuid.v4(),
		// 		task: 'Learn React'
		// 	},
		// 	{
		// 		id: uuid.v4(),
		// 		task: 'Do laundry'
		// 	}
		// ];
		this.notes = [];
	}

	create (note) {
		console.log('create note', note);
		this.setState({
			notes: this.notes.concat(note)
		});
	}

	update(updateNote) {
		console.log('update note', updateNote);
		this.setState({
			notes: this.notes.map(note => {
				if (note.id === updateNote.id) {
					return Object.assign({}, note, updateNote);
				}

				return note;
			})
		});
	}

	delete(id) {
		console.log('delete note', id);
		this.setState({
			notes: this.notes.filter(note => note.id !== id)
		});	
	}
}