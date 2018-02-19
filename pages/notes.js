import React, { Component } from 'react';
import Controls from '../components/notes/Controls';
import NoteSpace from '../components/notes/NoteSpace';
class NoteTaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['omg']
    }
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    const notes = this.state.notes;
    notes.push('another!')
    this.setState({notes})
  }

  handleNoteTextChange() {
    this.setState
  }
  
  render() {
    return (
      <div className=''>
        <Controls addNote={this.addNote}/>
        <NoteSpace notes={this.state.notes}/>
        <style jsx global>{`
          font-size: 16px;
          }
          `}</style>  
      </div>
    )
  }
}

export default NoteTaker
