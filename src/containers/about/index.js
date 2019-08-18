import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#107dac',
    padding: 0,
    color: '#fff',
    fontFamily: 'Open Sans, Lato, Arial, sans-serif',
    fontWeight: 500,
    fontSize: '20px',
    textRendering: 'optimizeLegibility',
    overflowX: 'hidden',
    height: '100vh',
    width: 'auto',
  },
  message: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-180px',
    textAlign: 'center',
  },
}); 

const About = () => {
  const classes = useStyles();
  return (<div className={classes.root}>
    <div className={classes.message}>
      <h1>404</h1>
      <p>What are you trying to access? Hmmmmmmm??</p>
    </div>
  </div>)
}

export default About
