// import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import axios from "axios";
// import { getPosts } from './actions/postAction';
// import { checkLoginStatus } from './actions/user'
import Nav from './components/Nav';
import Posts from './components/post/Posts';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp';
import { connect } from 'react-redux';

const App = (props) => {
  const loggedIn = () => {
    if (props.loggedIn === false) {
      return true
    }
  }

  return (
    <div className="App">
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
        </Switch>
      </Router>
      <Footer />
    </div >
  );
}


export default connect()(App);

