import React from 'react';
import NoteCard from './NoteCard';

export default class NoteSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className='container'>
        {this.props.notes.map((note,i) => <NoteCard key={i + 'notecard'} note={note}/>)}
        <style jsx>{`
          .container {
            height: 95vh;
            width: 100vw;
            background-color: grey;
            margin: 0 ;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    )
  }
}