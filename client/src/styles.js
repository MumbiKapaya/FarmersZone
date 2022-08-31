import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px , 0",
        borderRadius: "30px",
        backgroundImage: 'linear-gradient(to right, #27dd9f, #00e28a, #00e670, #00e94f, #12eb13)',
    },
    Heading: {
        color: "white",
        fontWeight: "800",
        fontSize:"20px"
    },

    image: {
        borderRadius: "10px",
        marginLeft: "10px",
    },
    Grid: {
        marginTop: "10px",
        diplay: "flex",
        justifyContent: "space-between",
    },
    InnerGrid1: {
        flex: 3,
    },
    InnerGrid2: {
        flex: 2,
    }
}));