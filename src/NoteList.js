import React, { Component } from 'react';
import './NoteList.css';
import Note from './Note'
import AddNote from './AddNote'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      notes: [
        { text: 'Get groceries', tag: 'personal' },
        { text: 'Finish project', tag: 'work' },
        { text: 'Kayak with kids', tag: 'hobby' }
      ]
=======
      notes: ['Get groceries', 'Finish project', 'Do Stuff']
>>>>>>> 94d8fedc907bdc897f4d0f49baebed5222b870b6
    }
  }

  renderNotes = () => {
    return this.state.notes.map(note => (
      <Note
        key={note.text}
        name={note.text}
        tag={note.tag}
        removeNote={this.removeNote}
      />
    ));
  }

  addNote = (newNoteText, newNoteTag) => {
    const newNote = { text: newNoteText, tag: newNoteTag }
    this.setState({ notes: [...this.state.notes, newNote] });
  }

  removeNote = (removedNote) => {
    const updatedNotes = this.state.notes.filter(note => (
      note !== removedNote
    ))
    this.setState({ notes: updatedNotes })
  }

  render() {
    return (
      <div className='main-note-display'>

        <AddNote addNote={this.addNote}/>

        <div className='note-list'>
          <h1>Notes</h1>
          {this.renderNotes()}
        </div>
      </div>
    )
  }
}
