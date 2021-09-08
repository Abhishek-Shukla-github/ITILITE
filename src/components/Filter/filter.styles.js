import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/styles";
import { orange } from "@material-ui/core/colors";

export default {
    updateItinerary: {
        color: "#eb7140",
    },
    clear: {
        cursor: "pointer",
    },
    filterDiv: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
        color: "#eb7140",
    },
    filter: {
        color: "#eb7140",
    },
    policy: {
        display: "flex",
        justifyContent: "space-between",
    },
    policyText: {
        marginRight: "2rem",
    },
    divFilters: {
        display: "flex",
    },
    divFilter: {
        margin: "0",
        padding: "10px",
        border: "1px solid grey",
        cursor: "pointer",
    },
    divFilterActive: {
        color: "#eb7140",
        border: "1px solid #eb7140",
        backgroundColor: "rgba(235, 113, 64,0.15)",
        margin: "0",
        padding: "10px",
        cursor: "pointer",
    },
    departure: {
        marginTop: "2rem"
    },
    duration: {
        marginTop: "0.7rem"
    },
    time: {
        color: "grey"
    }
}

export const OrangeSwitch = withStyles({
    switchBase: {
        color: orange[800],
        "&$checked": {
            color: orange[800]
        },
        "&$checked + $track": {
            backgroundColor: orange[800]
        }
    },
    checked: {},
    track: {}
})(Switch);