import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { asyncRegistration } from '../../store/actions/user';
import './registrationForm.scss';

class RegistrationForm extends Component {
  constructor() {
    super();

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onRegister = this.onRegister.bind(this);

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      correctVal: false,
    };
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value,
    });
    if (this.state.surname > 0) {
      this.setState({
        correctVal: true,
      });
    }
  }

  onChangeSurname(event) {
    this.setState({
      surname: event.target.value,
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onRegister(e) {
    e.preventDefault();

    const { asyncRegistration, history } = this.props;
    const { name, surname, email, password } = this.state;

    asyncRegistration(name, surname, email, password).then(() =>
      history.push('/chat')
    );
  }

  render() {
    return (
      <div className="reg-form">
        <form className="reg-form--block">
          <label htmlFor="name">First Name</label>
          <input
            className="reg-form--name reg-form--input"
            id="name"
            type="text"
            onChange={this.onChangeName}
            required
          />
          <label>Last Name</label>
          <input
            className="reg-form--surname reg-form--input"
            type="surname"
            onChange={this.onChangeSurname}
            required
          />
          <label>Email</label>
          <input
            className="reg-form--email reg-form--input"
            type="email"
            onChange={this.onChangeEmail}
            required
          />
          <label>Password</label>
          <input
            className="reg-form--password reg-form--input"
            type="password"
            onChange={this.onChangePassword}
            required
          />
          <div>
            <button className="reg-form--btn" onClick={this.onRegister}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { asyncRegistration }
  )(RegistrationForm)
);
