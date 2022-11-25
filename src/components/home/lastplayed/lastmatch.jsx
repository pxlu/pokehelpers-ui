import Grid from "@mui/material/Grid";
import LastMatchFormat from "./lastmatchformat";
import LastMatchInfo from "./LastMatchInfo";

const LastMatch = () => {
  return (
    <Grid container direction="row" id="lastmatchhistory" display="flex">
      <Grid item>
        <LastMatchFormat />
      </Grid>
      <Grid item>
        <LastMatchInfo />
      </Grid>
    </Grid>
  );
};

export default LastMatch;
