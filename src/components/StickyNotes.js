import React, { Component } from 'react';
import StickyNoteForm from './StickyNoteForm';
import Note from './Note';

class StickyNotes extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] };
    this.addNote = this.addNote.bind(this);
    this.displayNotes = this.displayNotes.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editItem= this.editItem.bind(this);
  }

  addNote(title, body, author, color) {
    let note = {title, body, author, color};
    this.setState({ notes: [note, ...this.state.notes]});
  }

  displayNotes() {
    let notes = this.state.notes;
    if(notes.length) {
      //loop the notes and render a note component
      return notes.map( (note, index) => {
        return(<Note
                key={index}
                note={note}
                index={index}
                editItem={this.editItem}
                deleteNote={this.deleteNote}
                />
              );
      });
    } else {
      return(<h4>No Notes, Please Add One!</h4>);
    }
  }

  deleteNote(index) {
    if(confirm('Really Delete?')) {
      let notes = this.state.notes;
      notes.splice(index, 1);
      this.setState({});
      this.setState({ notes });
    }
  }

  editItem(index, item) {
    let notes =  this.state.notes.map( (note, i) => {
    if ( i === index )
      return {...item, color: note.color }
    return note
  });
    this.setState({ notes });
  }


  render() {
    return(
      <div>
        <StickyNoteForm addNote={this.addNote} />
        <hr />
        <div className='row'>
          { this.displayNotes() }
        </div>
      </div>
    );
  }
}

export default StickyNotes;
