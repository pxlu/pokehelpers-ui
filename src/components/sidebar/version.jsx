import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const Version = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: 75,
        backgroundColor: "black",
        border: 1,
      }}
    >
      <Grid container spacing={0} style={{ paddingLeft: "10%", paddingTop: 5 }}>
        <Grid item>
          <span style={{ color: "white", fontWeight: 600, fontSize: 25 }}>
            Version 1.0.0
          </span>
        </Grid>
        <Grid item>
          <span style={{ color: "white", fontSize: 12 }}>
            Last Release: November 14th, 2022
          </span>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Version;
