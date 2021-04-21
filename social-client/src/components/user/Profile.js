import React from 'react'
import { Link } from 'react-router-dom';
import { ListItemText, Button } from '@material-ui/core'

import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <div>
      <Button><Link to="/user/edit">Edit Profile</Link></Button>
      <h1>Profile</h1>
      <ListItemText primary="First Name" />
      <ListItemText primary={props.user.firstName} />
      <ListItemText primary="Last Name" />
      <ListItemText primary={props.user.lastName} />
      <ListItemText primary="Email" />
      <ListItemText primary={props.user.email} />
      <ListItemText primary="Phone Number" />
      <ListItemText primary={props.user.phone} />
      <ListItemText primary="Bithday" />
      <ListItemText primary={props.user.bithday} />

    </div >
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.attributes
  }
}

export default connect(mapStateToProps)(Profile);
