import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./event.styles";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Grid } from '@material-ui/core';

export const Event = ({ event }) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <div>
                <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleChecked />}
                    className={classes.checked}
                />
            </div>
            <img className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/AirAsia_NewLogo.svg/1200px-AirAsia_NewLogo.svg.png" />
            <div className={classes.planeInfo}>
                <h3 className={classes.planeName}>Air Asia</h3>
                <p className={classes.model}>i5-424</p>
            </div>
            <div className={classes.startTime}>
                <h3 className={classes.flightTime}>{event.flightTime}</h3>
                <p className={classes.from}>{event.from}</p>
                <p className={classes.date}>{event.date}</p>
                <p className={classes.departureInfo}>Departs Next Day</p>
            </div>
            <div className={classes.slider}>
                <p className={classes.timeLeft}>{event.timeLeft}</p>
                <Slider dots min={0} max={100} marks={{ 50: "1 stop" }} step={null} defaultValue={20}
                    handleStyle={{
                        backgroundColor: "#eb7140",
                        border: "#eb7140"
                    }}
                    trackStyle={[{ backgroundColor: "#eb7140" }, { backgroundColor: "#eb7140" }]}
                    activeDotStyle={{ backgroundColor: "#eb7140" }} />
                <p className={classes.luggage}>{event.onlyHandbags && 'Handbags Only'}</p>
            </div>
            <div className={classes.endTime}>
                <h3 className={classes.flightTime}>{event.endTime}</h3>
                <p className={classes.from}>{event.to}</p>
                <p className={classes.date}>{event.endDate}</p>
                <p className={classes.departureInfo}>SME Fare</p>
            </div>
            <div className={classes.priceDiv}>
                <h2 className={classes.price}>{event.price} INR</h2>
                <p className={classes.policy}>Outside policy</p>
                <div>
                    <p className={classes.flightDetails}>Flight Details <FontAwesomeIcon icon={faAngleDown} /></p>
                </div>
            </div>
        </Grid>
    )
}
