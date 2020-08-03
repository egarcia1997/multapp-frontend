const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(5),
        right: theme.spacing(5),
    },
  }));

  export default useStyles;