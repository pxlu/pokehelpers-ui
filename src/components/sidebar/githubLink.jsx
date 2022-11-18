import Image from "mui-image";
import logo from "../../static/imgs/GitHub-Mark-120px-plus.png";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/FavoriteSharp";

const GithubLink = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      paddingTop="25px"
    >
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          wrap="nowrap"
        >
          <Grid item paddingRight="5px">
            <Typography align="center">Made with</Typography>
          </Grid>
          <Grid item>
            <FavoriteIcon style={{ color: "red" }} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xd={12}>
        <Image
          src={logo}
          // width="128x"
          // height="128px"
          fit="contain"
          duration={0}
          style={{ paddingTop: 5 }}
        ></Image>
      </Grid>
    </Grid>
  );
};

export default GithubLink;