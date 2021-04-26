import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
// import EditUser from './components/user/Edit';
import { getPosts } from './actions/postAction';


class App extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  }

  render() {
    const loggedIn = () => {
      if (this.props.loggedIn === false) {
        return false
      }
    }
    return (
      <div className="App" >
        <Router >
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
            <Route exact path="/logout" component={Login} />
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
            <Route exact path="/posts/new" render={() => (
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
            {/* < Route exact path="/users/:id/edit" render={() => (
              loggedIn() ? (
                <Redirect to="/" />
              ) : (
                <>
                  <Nav />
                  <EditUser />
                </>
              )
            )} /> */}
          </Switch>
        </Router>
        <Footer />
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, { getPosts })(App);


