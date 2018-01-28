import React from 'react';
import BasePage from '../components/BasePage';
import SignupForm from '../components/signup/SignupForm';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
      <BasePage>
        <div className='center'>
          <div className='form-container'>
            <SignupForm />
          </div>
        </div>
        <style jsx>{`
          .center {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
          }
          .form-container {
            height: 85%;
            width: 30%;
          }
        `}</style>
      </BasePage>
		)
	}
}

export default Signup;