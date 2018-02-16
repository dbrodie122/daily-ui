import React from 'react';

export default class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        {this.props.note}
        <style jsx>{`
          .container {
            height: 300px;
            width: 300px;
            background-color: blue;
            margin: 1%;
          }
        `}</style>
      </div>
    )
  }
}