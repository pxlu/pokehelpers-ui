import Grid from "@mui/material/Grid";
import LastPlayed from "./lastplayed/lastplayed";

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
      <Grid
        item
        xs={12}
        sx={{
          paddingBottom: 2,
        }}
      >
        <Welcome />
      </Grid>
      <Grid item xs={6}>
        <LastPlayed />
      </Grid>
      <Grid item>
        <LastPlayed />
      </Grid>
      <Grid
        item
        sx={{
          marginTop: 2,
        }}
      >
        <LastPlayed />
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
