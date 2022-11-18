import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

// Component Imports
import Logo from "./logo";
import Greeting from "./greeting";
import Version from "./version";
import ActionButton from "./actionButton";
import SidebarItem from "./sidebarItem";
import GithubLink from "./githubLink";

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#F2F2F2",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Logo />
      <Greeting />
      <Version />
      <ActionButton />
      <List>
        {["Home", "Teambuilder", "Laboratory", "Matches", "Calculator"].map(
          (text, index) => (
            <SidebarItem key={index} text={text} />
          )
        )}
      </List>
      <GithubLink />
    </Drawer>
  );
};

export default Sidebar;
