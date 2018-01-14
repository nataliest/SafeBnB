import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';

import GuestSignUp from '../Forms/guest.js';
import HostSignUp from '../Forms/host.js';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  usertype: ''
};

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.history = this.props.history;
    this.state = { ...INITIAL_STATE };

    this.setUserType = this.setUserType.bind(this);
  }


    
  setUserType(event) {
    console.log(event.target.value);
    const choice = event.target.value;
    this.setState({
      usertype: choice
    })
    console.log('type changed');
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      zipcode,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      zipcode === '' ||
      email === '';

    return (
      <div>
      <h1>SafeBnB</h1>
      <h3>Sign up as a host or a guest:</h3>
      <form >
        <div>
          <input type="radio" id="choice1"
           name="contact" value="host" onChange={this.setUserType} defaultChecked />
          <label htmlFor="choice1">Host</label>

          <input type="radio" id="choice2"
           name="contact" value="guest" onChange={this.setUserType} />
          <label htmlFor="choice2">Guest</label>
        </div>
      </form>
      <div>
        {(this.state.usertype === "guest") ? <GuestSignUp /> : <HostSignUp />}
   
      </div>
    </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpLink,
};