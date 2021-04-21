import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from "../actions/postAction";
import { LogOut } from "./user/LogOut";
// import Button from '@material-ui/core/Button';



class Nav extends Component {
  componentDidMount = () => {
    this.props.getPosts()
    console.log(this.props.posts);
    // this.props.userLoggedIn()
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <LogOut history={this.props.history} currentUser={this.props.currentUser} logOutUser={this.props.logOutUser} />

        </ul>
      </div>
    )
  }
}


export default connect((state => ({ currentUser: state.currentUser, posts: state.posts })), { getPosts })(withRouter(Nav))
