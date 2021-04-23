import React from 'react'
import { makeStyles, Card, CardContent, CardHeader, Avatar, Typography, Grid } from '@material-ui/core';
import red from '@material-ui/core/colors/red';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 1000,
    backgroundColor: red[500],
    'margin-left': '8%',
    width: "90%",

  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const { description, img } = props;

  return (
    <div>
      <br />
      <Grid item xs={12} >
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
            </Avatar>
            }
          />
          <img src={img} alt={'blah'} />
          <CardContent>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <br />
    </div >
  )
}

export default Post
