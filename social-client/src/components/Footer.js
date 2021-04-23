import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
  render() {
    return (
      <div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
            Property of Fiona
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </div>
    )
  }
}

export default Footer
