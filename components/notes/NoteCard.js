import React from 'react';
import { ColorPalette } from './ColorPalette';

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
        <ColorPalette />
        <textarea  value={ this.state.note } onChange={ this.handleChange }/>
        <style jsx>{`
          .container {
            height: 300px;
            width: 300px;
            margin: 1%;
            background-color: #FFF2B5;
            position: relative;
          }
          textarea {
            display: block;
            background-color: transparent;
            text-align: left;
            border: none;
            outline: none;
            font-family: Comic Sans;
            font-size: 2rem;
            width: 250px;
            height: 295px;
            margin: auto;
            text-align: left;
            // padding: 0.625rem;
            text-wrap: unrestricted;
            resize: none;
          }
        `}</style>
      </div>
    )
  }
}