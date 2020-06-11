import React, { Component, SyntheticEvent } from "react";
import { withRouter  } from 'react-router-dom';
import AuthService from "../../services/auth.service";
 class Login extends Component<any, any> {
    private inputPW: HTMLInputElement | null;
    private inputUser: HTMLInputElement | null;
    constructor(props: any) {
        super(props);
        this.state = {
            message: '',
            loading: false,
        }
        this.inputPW = null;
        this.inputUser = null;
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin() {
        this.setState({
            loading: true
        });
        const userName = this.inputUser?.value;
        const inputPW = this.inputPW?.value;
        AuthService.login(String(userName), String(inputPW)).then(
            () => {
                this.props.history.push("/");
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );


    }
    // onChangePassword= (e: SyntheticEvent)=>{
    //     // const value = e.target.values
    //     e.preventDefault();

    //     console.log(e.target)
    // }
    render() {
        console.log(this.state.message)
        return (
            <div className="auth-inner">
                {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
                {!this.state.loading ? <form >
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" ref={(n) => this.inputUser = n} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" ref={(n) => this.inputPW = n} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form> : <></>}
            </div>
        );
    }
}
export default withRouter(Login)