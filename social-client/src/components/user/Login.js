import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
// import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
        </Typography>
          <form onSubmit={loginFetch} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={handleUsername}
              value={username}
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePassword}
              value={password}
              autoComplete="password"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit" fullWidth variant="contained color=" primary className={classes.submit}
            >Login</Button>
            <Grid container>
              <Grid item xs>
                <RouteLink to={'/signup'}>
                  {"SignUp"}
                </RouteLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div >
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch({ type: 'ADD_USER', payload: user })
  }
}


export default connect(null, mapDispatchToProps)(Login)

