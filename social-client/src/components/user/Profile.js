import React from 'react'
import { ListItemText } from '@material-ui/core'

import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <div>
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

    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.attributes
  }
}

export default connect(mapStateToProps)(Profile);
