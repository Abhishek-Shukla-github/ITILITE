import sizes from "../../sizes";
export default {
    root: {
        display: "flex",
        border: "1px solid rgba(0, 0, 0, 0.35)",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
        //Responsiveness
        [sizes.down("xl")]: {
            width: "100%",
        },
        [sizes.down("md")]: {
            width: "100%",
        },
    },
    checked: {
        marginBottom: "4rem",
        //Responsiveness
        [sizes.down("xl")]: {
            marginBottom: "2rem",
        },
        [sizes.down("md")]: {
            marginBottom: "1rem",
        },
    },
    image: {
        width: "50px",
        height: "50px",
        borderRadious: "100%",
        marginRight: "10px",
        //Responsiveness
        [sizes.down("xl")]: {
            marginRight: "5px",
        },
        [sizes.down("md")]: {
            marginRight: "5px",
        },
    },
    planeName: {
        margin: "0"
    },
    model: {
        margin: "0"
    },
    planeInfo: {
        marginRight: "3rem",
        //Responsiveness
        [sizes.down("xl")]: {
            marginRight: "2rem",
        },
        [sizes.down("md")]: {
            marginRight: "1rem",
        },
    },
    // slider: {
    //     width: "10rem",
    //     //Responsiveness
    //     [sizes.down("xl")]: {
    //         width: "8rem",
    //     },
    //     [sizes.down("md")]: {
    //         width: "5rem",
    //     },
    // },
    timeLeft: {
        margin: "0"
    },
    flightTime: {
        marginBottom: "0"
    },
    startTime: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "4rem",
        marginRight: "4rem",
        //Responsiveness
        [sizes.down("xl")]: {
            marginLeft: "2rem",
            marginRight: "2rem",
        },
        [sizes.down("md")]: {
            marginLeft: "1rem",
            marginRight: "1rem",
        },
    },
    from: {
        margin: "0"
    },
    date: {
        margin: "0",
        color: "#eb7140",
    },
    departureInfo: {
        marginTop: "10px",
        color: "#eb7140",
    },
    slider: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: "2rem",
        //Responsiveness
        [sizes.down("xl")]: {
            marginRight: "1rem",
        },
        [sizes.down("md")]: {
            marginRight: "0.5rem",
        },
    },
    luggage: {
        marginTop: "2rem",
        color: "#eb7140",
        //Responsiveness
        [sizes.down("xl")]: {
            marginTop: "1rem",
        },
        [sizes.down("md")]: {
            marginTop: "0.4rem",
        },
    },
    endTime: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "4rem",
        marginRight: "4rem",
        //Responsiveness
        [sizes.down("xl")]: {
            marginLeft: "2rem",
            marginRight: "2rem",
        },
        [sizes.down("md")]: {
            marginLeft: "1rem",
            marginRight: "1rem",
        },
    },
    priceDiv: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "4rem",
        marginRight: "4rem",
        //Responsiveness
        [sizes.down("xl")]: {
            marginLeft: "2rem",
            marginRight: "2rem",
        },
        [sizes.down("lg")]: {
            marginLeft: "1rem",
            marginRight: "1rem",
        },
        [sizes.down("md")]: {
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
        },

    },
    price: {
        margin: "0",
        //Responsiveness
        [sizes.down("xl")]: {
            fontSize: "1.25rem"
        },
        [sizes.down("lg")]: {
            fontSize: "1rem"
        },
        [sizes.down("md")]: {
            fontSize: "0.8rem"
        }
    },
    policy: {
        margin: "0",
        color: "#eb7140",
        //Responsiveness
        [sizes.down("lg")]: {
            fontSize: "1rem"
        },
        [sizes.down("md")]: {
            fontSize: "0.8rem"
        }
    },
    flightDetails: {
        marginTop: "1rem",
        color: "rgb(8,146,208)",
        cursor: "pointer",
        //Responsiveness
        [sizes.down("xl")]: {
            marginTop: "0.5rem",
        },
        [sizes.down("md")]: {
            marginTop: "0rem",
        }
    },
}