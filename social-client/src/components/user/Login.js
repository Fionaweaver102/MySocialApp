import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';


const Login = (props) => {
  let history = useHistory()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const renderError = (response) => {
    response.json().then(message => {
      console.log(message)
      window.alert(message.errors[0])
    })
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const loginFetch = (e) => {
    e.preventDefault()
    console.log("logging in")
    const loginData = {
      user: {
        username: username,
        password: password
      }
    }

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(loginData)
    })
      .then(resp => {
        if (resp.status === 401) {
          renderError(resp)
        }
        else {
          return resp.json()
        }
      })
      .then(json => {
        console.log(json)
        localStorage.setItem('jwt_token', json.jwt)
        const userId = json.user.data.id
        localStorage.setItem('currentUser', userId)
        props.addUser(json.user.data)
        history.push("/posts")
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginFetch} className='LoginForm' noValidate>
        <TextField
          id="username"
          label="Username"
          name="username"
          onChange={handleUsername}
          value={username}
          autoComplete="username"
          autoFocus
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          onChange={handlePassword}
          value={password}
          autoComplete="password"
          autoFocus
        />
        <Button
          type="submit"
          className="LoginSubmit"
        >Login</Button>
        <RouteLink to={'/signup'}>
          {"SignUp"}
        </RouteLink>

      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch({ type: 'ADD_USER', payload: user })
  }
}


export default connect(null, mapDispatchToProps)(Login)

