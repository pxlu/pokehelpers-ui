import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LastMatchTeamInfo from "./LastMatchTeamInfo";

const LastMatchInfo = () => {
  return (
    <Box
      sx={{
        width: "550px",
        backgroundColor: "#F2F2F2",
        height: "275px",
        marginTop: 7,
        borderRadius: "0 10px 10px 0",
      }}
    >
      <Grid container direction="row">
        <Grid item xs={6}>
          <LastMatchTeamInfo />
        </Grid>
        <Grid item xs={6}>
          <LastMatchTeamInfo />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LastMatchInfo;
