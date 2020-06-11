
import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { drawerWidth } from '../../constant/constant'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ChildCareIcon from '@material-ui/icons/ChildCare';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));
function SideBar(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const [roles,] = React.useState(props.roles);
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.openSidebar}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <h5 style={{
                    position: 'absolute',
                    width: '100%',
                    left: '35%'
                }}>Menu</h5>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            {roles && roles.includes('ROLE_ADMIN') && <List>
                <ListItem button key={'class-list'}>
                    <ListItemIcon><ListAltIcon /></ListItemIcon>
                    <ListItemText primary={'Danh sách lớp'} />
                </ListItem>
                <ListItem button key={'users-list'}>
                    <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                    <ListItemText primary={'Quản lý Users'} />
                </ListItem>
            </List>
            }
            <Divider />
            <List>
                <ListItem button key={'student'}>
                    <ListItemIcon><ChildCareIcon /></ListItemIcon>
                    <ListItemText primary={'Học viên'} />
                </ListItem>
                <ListItem button key={'library'}>
                    <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                    <ListItemText primary={'Thư viện đề'} />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideBar