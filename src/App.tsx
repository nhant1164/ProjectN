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
    this.state = {
      loggedIn: AuthService.getCurrentUser()
    }
  }
  logOut= ()=> {
    this.setState({loggedIn:false},()=>AuthService.logout())
  }
  render() {
    return (
      <div className="App">
       
        {/* <p>Work in progress.</p> */}
        <Switch>
          <Route exact path={["/", "/home"]}><Home  logOut={this.logOut} loggedIn={this.state.loggedIn} /></Route>
          <Route exact path="/login" ><Login/></Route>
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
