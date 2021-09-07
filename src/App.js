import React from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter';
import { Schedule } from './components/Schedule/Schedule';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "red"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={8} >
          <Grid item>
            <Filter />
          </Grid>
          <Grid container item xs={12} sm>
            <Schedule />
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}

export default App;
