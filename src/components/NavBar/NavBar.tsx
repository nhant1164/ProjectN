// import React from 'react';
// import {Link} from 'react-router-dom';

// function NavBar() {
//   return (
//     <nav className="navbar navbar-dark bg-primary fixed-top">
//       <Link className="navbar-brand" to="/">
//         Giáo xứ Quảng Biên
//       </Link>
//     </nav>
//   );
// }

// export default NavBar;
import React from 'react';
import {Link, withRouter,NavLink} from 'react-router-dom';
// import auth0Client from '../Auth';
import AuthService from "../../services/auth.service";

function NavBar(props:any) {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Giáo xứ Quảng Biên
      </Link>
      {
        !props.loggedIn &&
        <div>
        <NavLink to="/login"  className="btn btn-dark" style={{margin:3}}> Sign In </NavLink>
        <NavLink to="/register"  className="btn btn-dark" style={{margin:3}}> Sign Up </NavLink>
        </div>
        // <button className="btn btn-dark" onClick={()=>console.log('login')}>Sign In</button>
      }
      {
        props.loggedIn &&
        <div>
          <label className="mr-2 text-white">{AuthService.getCurrentUser().username}</label>
          <button className="btn btn-dark" onClick={props.logOut}>Sign Out</button>
          
        </div>
      }
    </nav>
  );
}

export default withRouter(NavBar);