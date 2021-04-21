// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

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

  const loginFetch = async (e) => {
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
        <RouteLink to={'/singup'}>
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
// import React, { Component } from 'react'
// import { logInUser } from '../actions/user'
// import { connect } from 'react-redux'
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// export class LoginInForm extends Component {
//   state = {
//     username: "",
//     password: ""
//   }

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     this.props.logInUser(this.state, this.props.history)
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <TextField id="standard-basic" name="username" label="Username" value={this.state.username} onChange={this.handleChange} /><br />
//           <TextField id="standard-password-input" name="password" type="password" label="Password" value={this.state.password} onChange={this.handleChange} /><br /> <br />
//           <Button type="submit" variant="contained" >Log In</Button>
//         </form>

//       </div>
//     )
//   }
// }

// export default connect(null, { logInUser })(LoginInForm)
