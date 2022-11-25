import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "mui-image";
import logo from "../../../static/imgs/arceus.png";
import Grid from "@mui/material/Grid";
import { DateTime } from "luxon";

const format = "UBERS";
const match_result = "WIN";

const LastMatchFormat = () => {
  return (
    <Box
      sx={{
        width: "150px",
        backgroundColor: "white",
        height: "275px",
        marginLeft: 3,
        marginTop: 7,
        borderRadius: "10px 0 0 10px",
        borderRight: "1px solid grey",
      }}
    >
      <Grid container>
        <Grid item p={2}>
          <Image
            src={logo}
            fit="fill"
            duration={0}
            style={{ paddingTop: 5 }}
          ></Image>
        </Grid>
        <Grid item paddingLeft={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            {format}
          </Typography>
          <Typography>
            {DateTime.now().toLocaleString(DateTime.DATE_MED)}
          </Typography>
          <Typography
            sx={{
              color: "#4884FA",
            }}
          >
            {match_result}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LastMatchFormat;
