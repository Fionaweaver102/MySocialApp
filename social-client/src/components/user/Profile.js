import React from "react";
import { ListItemText } from '@material-ui/core'
import { connect } from "react-redux";
import { Paper, List, ListItem, Divider } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Post from '../post/Post';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(60),
      height: theme.spacing(60),
    },
  },
  listRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    flexGrow: 1,
    flexDirection: 'column',
    textAlign: 'center',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const posts = () => {
    let postData = props.userPosts.map(
      (post) => <Post key={post.id} description={post.description} img={post.img} />)
    return postData
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        {/* <Button><Link to="/users/:id/edit">Edit Profile</Link></Button> */}
        <List component="nav" className={classes.listRoot}>
          <ListItem className={classes.listItem}>
            <Avatar alt="profilePhoto" src={props.user.picture} className={classes.large} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary={props.user.firstName} />
          </ListItem>
          <Divider />

          <ListItem className={classes.listItem}>
            <ListItemText primary={props.user.lastName} />
          </ListItem>
          <Divider />


          <ListItem className={classes.listItem}>
            <ListItemText primary={props.user.email} />
          </ListItem>
          <Divider />

          <ListItem className={classes.listItem}>
            <ListItemText primary={props.user.bithday} />
          </ListItem>
          <Divider />

          <ListItem className={classes.listItem}>
            <ListItemText primary={props.user.phone} />
          </ListItem>
          <Divider />


          <br />
          <h2>Your Posts</h2>
          <ListItemText primary={posts()} />
        </List>
      </Paper>
    </div >
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.attributes,
    userPosts: state.user.attributes.posts
  }
}

export default connect(mapStateToProps)(Profile);




