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
        <SignupForm />
      </BasePage>
		)
	}
}

export default Signup;