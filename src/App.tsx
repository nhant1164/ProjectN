import React from 'react';
import Home from './components/Home'
import Login from "./components/Login/Login";
import Register from "./components/Register/register"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
interface State {
  loggedIn: boolean,
}
interface Props {
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      loggedIn: false
    }
  }
  logOut() {
    AuthService.logout();
  }
  // componentDidMount() {
  //   const user = AuthService.getCurrentUser();
  //   if(user)
  //     this.setState(lo)
  // }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Home loggedIn={this.state.loggedIn} /> */}
        {/* </header> */}
      </div>
    );
  }
}

export default App;
