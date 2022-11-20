import Grid from "@mui/material/Grid";

// Component Imports
import Welcome from "./welcome";

const HomeScreen = () => {
  return (
    <Grid
      container
      sx={{
        marginTop: "64px",
        p: 3,
      }}
    >
      <Grid item>
        <Welcome />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default HomeScreen;
