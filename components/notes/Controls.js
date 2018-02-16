import React from 'react';

export default class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
   
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addNote();
    console.log(this)
  }

  render() {
    console.log(this)
    return (
      <nav>
        <button onClick={this.handleClick}>+</button>
        <style jsx>{`
          nav {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          button {
            width: 20rem;
            height: 3rem;
          }
        `}</style>
      </nav>
    )
  }
}