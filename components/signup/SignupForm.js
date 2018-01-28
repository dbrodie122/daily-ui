import React from 'react';
import Login from './Login';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
}(props) => {
  return (
    <div className='container'>
      <div>
        top area including title
      </div>    
      <div>
        bottom area for the form
      </div>
      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0px -1px 21px 7px rgba(0,0,0,0.46);
        }
      `}</style>
    </div>
  )
}