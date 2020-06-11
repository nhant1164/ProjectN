
import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
// import auth0Client from '../Auth';
import AuthService from "../../services/auth.service";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { drawerWidth } from '../../constant/constant'
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  headerBar:{
    justifyContent:'space-between'
  }
}));
function NavBar(props: any) {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.openSidebar,
      })}
    >
      <Toolbar className={clsx(classes.headerBar)}>
        <div className="btn-title-container">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, props.openSidebar && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Giáo xứ Quảng Biên
        </Typography>
        </div>
        {
          !props.loggedIn &&
          <div className="d-flex flex-row-reverse">
            <NavLink to="/login" className="btn btn-dark" style={{ margin: 3, borderRadius: 15 }}> Sign In </NavLink>
            <NavLink to="/register" className="btn btn-dark" style={{ margin: 3, borderRadius: 15 }}> Sign Up </NavLink>
          </div>
          // <button className="btn btn-dark" onClick={()=>console.log('login')}>Sign In</button>
        }
        {
          props.loggedIn &&
          <div>
            <label className="mr-2 text-white">{AuthService.getCurrentUser().username}</label>
            <button className="btn btn-dark" onClick={props.logOut} style={{ margin: 3, borderRadius: 15 }} >Sign Out</button>

          </div>
        }
      </Toolbar>

    </AppBar>
  );
}

export default withRouter(NavBar);