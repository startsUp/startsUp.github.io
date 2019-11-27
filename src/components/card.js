import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css'

const styles = {
  card: {
    maxWidth: 320,
    height: 400,
    backgroundImage: 'linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);'
  },
  media: {
    height: 180,
  },
  content: {
      height: 140,
  },
  typography: {
    fontFamily: "\"Hammersmith One\", sans-serif"
  },
}

function MediaCard(props) {
  const { classes } = props
  return (
      <div className='card'> 
        <Card className={classes.card}>
            <CardActionArea >
                <CardMedia wide
                className={classes.media}
                image={props.info.image}
                title={props.info.title}
                />
                <CardContent className={classes.content}>
                <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
                    {props.info.title}
                </Typography>
                <Typography component="p">
                    {props.info.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button size="small" color="primary" href={props.info.link} target="_blank">
                    View
                </Button>
                <Button size="small" color="primary">
                    More Info
                </Button>
            </CardActions>
        </Card>
      </div>

  );
}
