import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 200,
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(-3, 0, 3, 0),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  // let user = localStorage.getItem('jwt_token')
  // console.log(user)
  return (
    <div>
      <div className={classes.root} >
        <br />
        <br />
        <h1>Welcome to The Social Clone!</h1>
        <ButtonGroup size="large">
          <Button><Link to={`/login`}>Login</Link></Button>
          <Button><Link to={`/signup`}> Signup</Link></Button>
        </ButtonGroup>
      </div>
    </div >
  )
}

export default Home
