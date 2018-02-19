import React from 'react';

export default class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({note: e.target.value})
  }

  render() {

    return (
      <div className='container'>
        <textarea  value={ this.state.note } onChange={ this.handleChange }/>
        <style jsx>{`
          .container {
            height: 300px;
            width: 300px;
            margin: 1%;
            background-color: blue;
          }
          textarea {
            display: block;
            background-color: red;
            text-align: left;
            border: none;
            outline: none;
            font-family: Comic Sans;
            font-size: 2rem;
            width: 250px;
            height: 300px;
            margin: auto;
            text-align: left;
            // padding: 0.625rem;
            text-wrap: unrestricted;
          }
        `}</style>
      </div>
    )
  }
}