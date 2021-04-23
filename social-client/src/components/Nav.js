import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut } from './user/LogOut';
import { logOutUser } from '../actions/userAction';
import { Button, AppBar, Toolbar, Fab, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Fab from "@material-ui/core/Fab";
// import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

const Nav = (props) => {

  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <Avatar alt="profilePhoto" src={props.user.picture} className={classes.large} />
          </Fab>
          <Button variant="outlined" color="secondary" className={classes.button}>
            <Link to="/posts">Posts</Link>
          </Button>
          <Button variant="outlined" color="secondary" className={classes.button}>
            <Link to="/posts/new">Create Post</Link>
          </Button>
          <Button variant="outlined" color="secondary" className={classes.button}>
            <Link to="/users/:id">Profile</Link>
          </Button>
          <Button variant="outlined" color="secondary" className={classes.button}>
            <LogOut history={props.history} user={props.user} logOutUser={props.logOutUser} />
          </Button>
        </Toolbar>
      </AppBar>
    </div >
  )
}


export default connect((state => ({ user: state.user })), { logOutUser })(withRouter(Nav))
