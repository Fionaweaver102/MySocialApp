import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
      <div className="Home" >
        <h1>Welcome to my app</h1>
        <ButtonGroup>
          <Button><Link to={`/login`}>Login</Link></Button>
          <Button><Link to={`/signup`}> Signup</Link></Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Home
