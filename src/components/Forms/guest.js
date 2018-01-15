import React, { Component } from 'react';
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  first: '',
  last: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  zipcode: '',
  error: null,
};

export default class GuestSignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      first,
      last,
      email,
      passwordOne,
      zipcode
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email, zipcode)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      first,
      last,
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
      first === '' ||
      last === '' ||
      email === '';

    return (
    	<form>
      	<p>Guest form</p>
        <input
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="Username"
        />
        <br/>
        <input
          value={first}
          onChange={event => this.setState(updateByPropertyName('first', event.target.value))}
          type="text"
          placeholder="First name"
        />
         <br/>
        <input
          value={last}
          onChange={event => this.setState(updateByPropertyName('last', event.target.value))}
          type="text"
          placeholder="Last name"
        />
         <br/>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
         <br/>
        <input
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
         <br/>
        <input
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
         <br/>
        <input
          value={zipcode}
          onChange={event => this.setState(updateByPropertyName('zipcode', event.target.value))}
          type="text"
          placeholder="Enter zipcode"
        />
         <br/>
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        </form>
    );
  }
}