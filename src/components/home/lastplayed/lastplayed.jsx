import Grid from "@mui/material/Grid";
import Topbar from "./topbar";
import LastMatch from "./lastmatch";

const LastPlayed = () => {
  return (
    <Grid
      container
      id="container-box"
      direction="row"
      sx={{
        backgroundColor: "#000000",
        height: 400,
        width: 750,
        borderRadius: "10px",
      }}
    >
      <Topbar />
      <LastMatch />
    </Grid>
  );
};

export default LastPlayed;
