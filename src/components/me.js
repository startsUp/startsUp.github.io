import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
	container: {
        paddingLeft: theme.spacing(6),
        padding: theme.spacing(2)
    }
}));

export default function AboutMe(props) {
  const classes = useStyles();
  return (
      <Box className={classes.container}>
          3rd year Software Engineering and Embedded Systems Student from McMaster University. Experienced in full stack development with <b>Java (Spring), .NET (Entity Framework)</b>  in the backend 
          and <b>Angular/React</b> in the frontend as well as DevOps - primiarily in <b>Jenkins</b>. Interested in AI, Cloud computing and DevOps. Outside of the tech world, I love music, soccer and snowboarding. 
      </Box>

  );
}