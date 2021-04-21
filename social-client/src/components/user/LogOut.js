import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export class LogOut extends Component {

  handleLogOut = e => {
    this.props.logOutUser(this.props.history)
  }

  render() {

    return (
      <div className="logout">
        <Button onClick={this.handleLogOut} color="inherit">LogOut</Button>
      </div>
    )
  }
}

export default LogOut