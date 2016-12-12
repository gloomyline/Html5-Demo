import React from 'react';
import uuid from 'uuid';
// import Notes from './Notes';

import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import connect from '../libs/connect';
// import NoteActions from '../actions/NoteActions';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     notes: [
//   //       {
//   //         id: uuid.v4(),
//   //         task: 'Learn React'
//   //       },
//   //       {
//   //         id: uuid.v4(),
//   //         task: 'Do laundry'
//   //       }
//   //     ]
//   //   }
//   // }

//   render() {
//     // const {notes} = this.state;
//     const {notes} = this.props;

//     return (
//       <div>
//         <button className="add-note" onClick={this.addNote}>+</button>
//         <Notes
//           notes={notes}
//           onNoteClick={this.activateNoteEdit}
//           onEdit={this.editNote}
//           onDelete={this.deleteNote}
//           />
//       </div>
//     );
//   }

//   addNote = () => {
//     this.props.NoteActions.create({
//       id: uuid.v4(),
//       task: 'New task'
//     });
//   }

//   deleteNote = (id, e) => {
//     // Avoid bubbling to edit
//     e.stopPropagation();

//     // this.setState({
//     //   notes: this.state.notes.filter(note => note.id !== id)
//     // });
//     this.props.NoteActions.delete(id);
//   }

//   activateNoteEdit = (id) => {
//     // this.setState({
//     //   notes: this.state.notes.map(note => {
//     //     if(note.id === id) {
//     //       note.editing = true;
//     //     }

//     //     return note;
//     //   })
//     // });
//     this.props.NoteActions.update({id, editing: true});
//   }

//   editNote = (id, task) => {
//     // this.setState({
//     //   notes: this.state.notes.map(note => {
//     //     if(note.id === id) {
//     //       note.editing = false;
//     //       note.task = task;
//     //     }

//     //     return note;
//     //   })
//     // });
//     const {NoteActions} = this.props;

//     NoteActions.update({id, task, editing: false});
//   }

// }

// // export default connect(() => ({
// //   test: 'test'
// // }))(App)
// // export default connect(({notes}) => ({
// //   notes
// // }))(App)
// export default connect(({notes}) => ({
//   notes
// }), {
//   NoteActions
// })(App)

const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (
    <div>
      <button className="add-lane" onClick={addLane}>+</button>
      <Lanes lanes={lanes} />
    </div>
  );
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(
    ({lanes}) => ({lanes}),
    {LaneActions}
  )
)(App)