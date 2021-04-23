import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 2000,
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
        {/* <div>
          {this.getTags(tags)}
        </div> */}
      </Card>
    </div >
  )
}

//   getTags(tags) {
//     let html = '';
//     if (tags.length) {
//       for (let i = 0; i < tags.length; {
//         let tag = tags[i];
//         html += tag + ' ';
//       }
//       return html;
//     }
//   }
// }

export default Post
