import React from 'react';
import { ColorPalette } from './ColorPalette';

export default class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      color: 'red'
    };
    this.handleChange = this.handleChange.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  handleChange(e) {
    this.setState({note: e.target.value})
  }

  setColor(color) {
    this.setState({ color })
  }

  render() {
    let containerClasses = `container ${this.state.color}`;
    return (
      <div className={containerClasses} >
        <ColorPalette setColor={this.setColor} />
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
          .red {
            background-color: #AA3939;
          }
          .orange {
           background-color: #AA6C39;
          }
          .green {
            background-color: #2D882D;
          }
          .blue {
            background-color: #226666;
          }
        `}</style>
      </div>
    )
  }
}