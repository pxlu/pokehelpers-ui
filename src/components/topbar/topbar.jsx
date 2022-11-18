import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

// Component Imports
import MaterialUISwitch from "./customSwitch";

const drawerWidth = 240;

const Appbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "#000000",
      }}
    >
      <Toolbar>
        <Grid container direction="row" spacing={1}>
          <Grid item>
            <Link
              href="#"
              color="#ffffff"
              underline="hover"
              sx={{
                borderRight: "0.10em solid grey",
                padding: "0.5em",
              }}
            >
              About
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" color="#ffffff" underline="hover">
              Contact
            </Link>
          </Grid>
        </Grid>
        <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
