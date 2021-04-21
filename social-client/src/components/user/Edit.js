import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Button } from '@material-ui/core'
import { editUser, deleteUser } from "../../actions/userAction";

const EditUser = (props) => {

  const [values, setValues] = useState({
    id: props.user.id,
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    email: props.user.email,
    birthday: props.user.birthday,
    gender: props.user.gender,
    phone: props.user.phone,
    picture: props.user.picture,
    username: props.user.username,
    password: props.user.password
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editUser(values);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    props.history.push('/')
    props.deleteUser(values)
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="EditForm" noValidate>

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

        {/* <TextField
          id="picture"
          bordered={true}
          label="Profile Picture"
          onChange={handleChange}
          value={values.picture}
          autoComplete="picture"
        /> */}

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

        <Button type="submit" className="EditButton">
          Edit Profile
        </Button>

        <Button type="delete" className="deleteProfile" onSubmit={handleDelete}>
          Delete Profile
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { editUser, deleteUser })(EditUser)