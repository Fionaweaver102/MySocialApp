import React from "react";
import { Link } from 'react-router-dom';
import { ListItemText, Button } from '@material-ui/core'
import { connect } from "react-redux";
// import Image from 'material-ui-image'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Post from '../post/Post';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Profile = (props) => {
  const classes = useStyles();


  const userPosts = props.user.posts.map((post) => <Post key={post.id} description={post.description} img={post.img} />)

  return (
    <div>
      <Button><Link to="/users/:id/edit">Edit Profile</Link></Button>
      <h1>Profile</h1>
      <Avatar alt="profilePhoto" src={props.user.picture} className={classes.large} />
      <ListItemText primary="First Name" />
      <ListItemText primary={props.user.firstName} />
      <ListItemText primary="Last Name" />
      <ListItemText primary={props.user.lastName} />
      <ListItemText primary="Email" />
      <ListItemText primary={props.user.email} />
      <ListItemText primary="Phone Number" />
      <ListItemText primary={props.user.phone} />
      <ListItemText primary="Bithday" />
      <ListItemText primary={props.user.bithday} />
      <br />
      <h2>Your Posts</h2>
      <ListItemText primary={userPosts} />
    </div >
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.attributes
  }
}

export default connect(mapStateToProps)(Profile);
