import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { DateTime } from "luxon";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Topbar = () => {
  return (
    <Grid container id="top-bar" direction="row" height={0} marginBottom="5%">
      <Grid item xs={7}>
        <Grid
          id="text-bar"
          container
          direction="column"
          spacing={0}
          sx={{
            p: 3,
            color: "white",
          }}
        >
          <Grid item>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Last Played Match
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {DateTime.now().toLocaleString(DateTime.DATETIME_MED)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          p: 3,
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "orange",
            textTransform: "none",
            fontSize: "18px",
            marginTop: "5%",
          }}
        >
          View Match Details →
        </Button>
      </Grid>
    </Grid>
  );
};

export default Topbar;
