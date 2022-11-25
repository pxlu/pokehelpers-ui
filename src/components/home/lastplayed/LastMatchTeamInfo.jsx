import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import logo from "../../../static/imgs/arceus.png";

const username = "Euphorics";
const elo = "1431";

const GenerateTeamSprites = () => {
  const teamSprites = [];
  for (let i = 0; i < 6; i++) {
    teamSprites.push(
      <Grid item>
        <Image
          width="60px"
          height="60px"
          src={logo}
          fit="fill"
          duration={0}
        ></Image>
        {/* Want to align the text in the center, but can't figure it out*/}
        <Typography variant="caption">Arceus</Typography>
      </Grid>
    );
  }
  return teamSprites;
};

const teamSprites = GenerateTeamSprites();

const LastMatchTeamInfo = () => {
  return (
    <Grid container direction="column" paddingLeft={3} paddingTop={2}>
      <Grid item>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {username}
        </Typography>
        <Typography>{elo} ELO</Typography>
      </Grid>
      <Grid item paddingTop={2}>
        <Grid container direction="row" spacing={1}>
          {teamSprites.map((sprite) => sprite)}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LastMatchTeamInfo;
