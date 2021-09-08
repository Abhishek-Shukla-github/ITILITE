import React from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter';
import { Schedule } from './components/Schedule/Schedule';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    margin: "1rem"
  },
  filter: {
    width: "20%",
    marginRight: "5rem",
  },
  schedule: {
    width: "60%",
    marginRight: "2rem",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.filter}>
        <Filter />
      </div>
      <div className={classes.schedule}>
        <Schedule />
      </div>
    </div>
  );
}

export default App;
