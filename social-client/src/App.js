import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Index from './components/index';
import PostForm from './components/PostForm';
import Profile from './components/Profile';
import EditPost from './components/EditPost';
import Post from './components/Post';
import ErrorPage from './components/Error';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Post" component={Login} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
