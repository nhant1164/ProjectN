import React from 'react';
import Home from './components/Home'
interface State{
  apiResponse:string,
  dbResponse:string
}
interface Props{
}
class App extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = {dbResponse:"",
    apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  callDB() {
    fetch("http://localhost:9000/testDB")
        .then(res => res.text())
        .then(res => this.setState({ dbResponse: res }))
        // .catch(err => err);
}
  componentDidMount() {
    // this.callAPI();
    this.callDB();
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p className="App-intro">{this.state.apiResponse}</p> */}
          <Home/>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
