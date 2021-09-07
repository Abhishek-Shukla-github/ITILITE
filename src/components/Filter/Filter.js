import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';
import styles, { OrangeSwitch } from "./filter.styles";
import Typography from '@material-ui/core/Typography';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css'

export const Filter = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [toggle, setToggle] = useState(true)
    const [noStopFilter, setNoStopFilter] = useState(true)
    const [oneStopFilter, setOneStopFilter] = useState(false)
    const [twoStopFilter, setTwoStopFilter] = useState(false)
    const [time, setTime] = useState([0, 24])
    const [duration, setDuration] = useState([0, 24])

    const handleTime = (newTime) => {
        console.log(newTime)
        setTime(newTime)
    }
    const { createSliderWithTooltip } = Slider;
    const Range = createSliderWithTooltip(Slider.Range);
    return (
        <div>
            <div>
                <h3 className={classes.updateItinerary}><FontAwesomeIcon icon={faEdit} />  Update Itinerary</h3>
                <div className={classes.filterDiv}>
                    <h3 className={classes.filter}><FontAwesomeIcon icon={faSlidersH} /> Filters</h3>
                    <p className={classes.clear}>Clear all</p>
                </div>
                <div className={classes.policy}>
                    <p className={classes.policyText}> Include Outside policy </p>
                    <OrangeSwitch checked={toggle} onChange={() => setToggle(!toggle)} />
                </div>
                <div>
                    <p>Maximum Stops</p>
                    <div className={classes.divFilters}>
                        <div className={noStopFilter ? classes.divFilterActive : classes.divFilter} onClick={() => setNoStopFilter(!noStopFilter)}> Non Stop</div>
                        <div className={oneStopFilter ? classes.divFilterActive : classes.divFilter} onClick={() => setOneStopFilter(!oneStopFilter)}>Upto Stop</div>
                        <div className={twoStopFilter ? classes.divFilterActive : classes.divFilter} onClick={() => setTwoStopFilter(!twoStopFilter)} >2+ Stop</div>
                    </div>
                </div>
                <div className={classes.departure}>
                    <Typography id="departure-slider" gutterBottom>Departure Time</Typography>
                    <Range min={0} max={24} step={0.5} value={time} onChange={(newTime) => setTime(newTime)} defaultValue={time} tipFormatter={time => `${time}`}
                        handleStyle={{
                            backgroundColor: "#eb7140",
                            border: "#eb7140"
                        }}
                        trackStyle={[{ backgroundColor: "#eb7140" }, { backgroundColor: "#eb7140" }]}
                        activeDotStyle={{ backgroundColor: "#eb7140" }}
                    />
                    <p>{time[0]} hrs - {time[1]} hrs</p>
                </div>
                <div className={classes.duration}>
                    <Typography id="duration-slider" gutterBottom>Duration</Typography>
                    <Range min={0} max={24} step={0.5} value={duration} onChange={(newDuration) => setDuration(newDuration)} defaultValue={duration} tipFormatter={duration => `${duration}`}
                        handleStyle={{
                            backgroundColor: "#eb7140",
                            border: "#eb7140"
                        }}
                        trackStyle={[{ backgroundColor: "#eb7140" }, { backgroundColor: "#eb7140" }]}
                        activeDotStyle={{ backgroundColor: "#eb7140" }}
                    />
                    <p>{duration[0]} hrs - {duration[1]} hrs</p>
                </div>
            </div>
        </div>
    )
}
