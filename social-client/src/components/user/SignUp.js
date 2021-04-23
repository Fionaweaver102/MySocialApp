import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    gender: "",
    phone: "",
    picture: "",
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const renderError = (response) => {
    response.json().then(message => {
      console.log(message)
      window.alert(message.errors.join(", "))
    })
  }

  const signupFetch = (event) => {
    event.preventDefault()
    console.log("I'm signing up")
    const inputData = {
      user: {
        username: values.username,
        password: values.password,
        email: values.email,
        birthdday: values.birthday,
        gender: values.gender,
        phone: values.phone,
        picture: values.picture,
        firstName: values.firstName,
        lastName: values.lastName
      }
    }

    console.log(inputData);
    fetch("http://localhost:3001/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(inputData)
    })
      .then(response => {
        if (response.status === 406) {
          renderError(response)
        } else {
          return response.json()
        }
      })
      .then(json => {
        localStorage.setItem('jwt_token', json.jwt)
        const userId = json.user.data.id
        localStorage.setItem('currentUser', userId)
        props.addUser(json.user.data)
        history.push("/users/:id")
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
            SignUp
        </Typography>
          <form onSubmit={signupFetch} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstName"
              id="firstName"
              label="First Name"
              onChange={handleChange}
              value={values.firstName}
              autoComplete="fname"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              autoComplete="lname"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              value={values.email}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="date"
              label="Birthday"
              type="date"
              value={values.birthday}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="gender"
              label="Gender"
              name="gender"
              onChange={handleChange}
              value={values.gender}
              autoComplete="gender"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              autoComplete="phone"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="picture"
              bordered={true}
              label="Profile Image"
              name="picture"
              onChange={handleChange}
              value={values.picture}
              autoComplete="picture"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={handleChange}
              value={values.username}
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
              onChange={handleChange}
              value={values.password}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained color=" primary className={classes.submit} >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <RouteLink to={"/login"} variant="body2">
                  {"Already have an account? Login!"}
                </RouteLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch({ type: 'ADD_USER', payload: user })
  }
}

export default connect(null, mapDispatchToProps)(SignUp)


