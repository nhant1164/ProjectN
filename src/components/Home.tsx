import React from 'react'
import NavBar from "../components/NavBar/NavBar"

class Home extends React.PureComponent<any,any>{
    render(){
        return <div>
            <NavBar  logOut={this.props.logOut} loggedIn={this.props.loggedIn}/>
        </div>
    }
}
export default Home