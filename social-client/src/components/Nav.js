import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from "../actions/postAction";
import { LogOut } from './user/LogOut';
import { logOutUser } from '../actions/userAction';
import Button from '@material-ui/core/Button';



class Nav extends Component {
  componentDidMount = () => {
    this.props.getPosts()
    console.log(this.props.posts);
    // this.props.userLoggedIn()
  }

  render() {
    return (
      <div>
        <Button><Link to="/posts">Posts</Link></Button>
        <Button><Link to="/posts/new">Create Post</Link></Button>
        <Button><Link to="/profile">Profile</Link></Button>
        <LogOut history={this.props.history} currentUser={this.props.currentUser} logOutUser={this.props.logOutUser} />
      </div >
    )
  }
}

export default connect((state => ({ currentUser: state.currentUser, posts: state.posts })), { logOutUser, getPosts })(withRouter(Nav))
