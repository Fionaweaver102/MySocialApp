// import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import axios from "axios";
import { getPosts } from './actions/postAction';
// import { checkLoginStatus } from './actions/user'
import Nav from './components/Nav';
import Posts from './components/post/Posts';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/user/Profile';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import PostForm from './components/post/PostForm';
import { connect } from 'react-redux';
import { Component } from 'react';


// componentDidMount = () => {
//   this.props.getPosts()
//   console.log(this.props.posts);
//   // this.props.userLoggedIn()
// }

class App extends Component {
  componentDidMount = () => {
    this.props.getPosts()
    console.log(this.props.posts);
    // this.props.userLoggedIn()
  }

  render() {
    const loggedIn = () => {
      if (this.props.loggedIn === false) {
        return true
      }
    }
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/posts" render={() => (
              loggedIn() ? (
                <Redirect to="/" />
              ) : (
                <>
                  <Nav />
                  <Posts />
                </>
              )
            )} />
            <Route exact path="/add-post" render={() => (
              loggedIn() ? (
                <Redirect to="/" />
              ) : (
                <>
                  <Nav />
                  <PostForm />
                </>
              )
            )} />
            < Route exact path="/profile" render={() => (
              loggedIn() ? (
                <Redirect to="/" />
              ) : (
                <>
                  <Nav />
                  <Profile />
                </>
              )
            )} />
          </Switch>
        </Router>
        <Footer />
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, { getPosts })(App);

