import React, { Component, createRef } from "react";
import { withRouter } from 'react-router-dom';
import * as EmailValidator from "email-validator";
import { passwordValidate } from '../../utils/utils'
import AuthService from "../../services/auth.service";

class SignUp extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      message: '',
      successful: false,
    }
  }

  handleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({
      message: "",
      successful: false
    });
    const checkPW = passwordValidate(this.state.password)
    const validationResult = !EmailValidator.validate(this.state.email)
    if (!validationResult && checkPW==='') {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password)
        .then(
          res => {
            this.setState({
              message: res.data.message,
              successful: true
            });
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.setState({
              successful: false,
              message: resMessage
            });
          }
        )
    }
    else {
      this.setState({
        message: checkPW!=='' ? checkPW:"Please enter an valid email"
      })
    };


  }
  onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.target.value
    });
  }
  render() {
    return (
      <div className="auth-inner">
        {this.state.message && (
          <div className="form-group">
            <div
              className={
                this.state.successful
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
              role="alert"
            >
              {this.state.message}
            </div>
          </div>
        )}
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="First name" onChange={e => this.onChangeUsername(e)} />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={e => this.onChangeEmail(e)} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={e => this.onChangePassword(e)} />
          </div>

          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSignUp}>Sign Up</button>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </div>
    );
  }
}
export default withRouter(SignUp)