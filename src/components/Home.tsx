import React from 'react'
import NavBar from "../components/NavBar/NavBar"
import Sidebar from "../components/Sidebar/Sidebar"
import MainBody from "../components/MainBody/MainBody"
// import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthService from "../services/auth.service";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

export default function Home(props: any) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [currentUser, ] = React.useState(AuthService.getCurrentUser())
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar openSidebar={open} handleDrawerOpen={handleDrawerOpen} logOut={props.logOut} loggedIn={props.loggedIn} />
            <Sidebar openSidebar={open} handleDrawerClose={handleDrawerClose} roles={currentUser&&currentUser.roles} />
            <MainBody openSidebar={open} roles={currentUser&&currentUser.roles}/>
        </div>
    );
}
// class Home extends React.PureComponent<any, any>{
//     render() {
//         return (
//             <div className="wrapper">
//                 <Sidebar />
//                 <div id="content" className="header">
//                     <NavBar logOut={this.props.logOut} loggedIn={this.props.loggedIn} />

//                 </div>
//             </div>
//         )
//     }
// }
// export default Home