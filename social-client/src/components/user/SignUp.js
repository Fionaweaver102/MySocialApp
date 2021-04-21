import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';



const SignUp = (props) => {
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
        history.push("/home")
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>

      <h1>Sign Up</h1>

      <form onSubmit={signupFetch} className="SignupForm" noValidate>

        <TextField
          autoComplete="fname"
          name="firstName"
          id="firstName"
          label="First Name"
          onChange={handleChange}
          value={values.firstName}
          autoFocus
        />

        <TextField
          id="lastName"
          label="Last Name"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          autoComplete="lname"
        />

        <TextField
          id="email"
          label="Email Address"
          name="email"
          onChange={handleChange}
          value={values.email}
          autoComplete="email"
        />

        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          value={values.birthday}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }} />

        <TextField
          id="gender"
          label="Gender"
          name="gender"
          onChange={handleChange}
          value={values.gender}
          autoComplete="gender"
        />

        <TextField
          id="phone"
          label="Phone Number"
          name="phone"
          onChange={handleChange}
          value={values.phone}
          autoComplete="phone"
        />

        <TextField
          id="picture"
          bordered={true}
          label="Profile Image"
          name="picture"
          onChange={handleChange}
          value={values.picture}
          autoComplete="picture"
        />

        <TextField
          id="username"
          label="Username"
          name="username"
          onChange={handleChange}
          value={values.username}
          autoComplete="username"
        />

        <TextField
          variant="outlined"
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

        <Button type="submit" className="SignupButton" >
          Sign Up
        </Button>
        <RouteLink to={`/login`}>
          Already have an account? Sign in
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

export default connect(null, mapDispatchToProps)(SignUp)


