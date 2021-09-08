import React from 'react';
import sizes from "./sizes";
import { Filter } from './components/Filter/Filter';
import { Schedule } from './components/Schedule/Schedule';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    margin: "1rem",
    //Responsiveness
    [sizes.down("lg")]: {
      width: "95%",
    },
    [sizes.down("md")]: {
      width: "100%",
    },
  },
  filter: {
    width: "20%",
    marginRight: "5rem",
    //Responsiveness
    [sizes.down("lg")]: {
      width: "15%",
    },
    [sizes.down("md")]: {
      width: "10%",
    },
  },
  schedule: {
    width: "60%",
    marginRight: "2rem",
    //Responsiveness
    [sizes.down("lg")]: {
      width: "75%",
      marginRight: "1rem",
    },
    [sizes.down("md")]: {
      width: "90%",
      marginRight: "0",
    },
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
