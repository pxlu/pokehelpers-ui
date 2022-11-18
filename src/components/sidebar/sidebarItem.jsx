import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ScienceIcon from "@mui/icons-material/Science";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import CalculateIcon from "@mui/icons-material/Calculate";

const renderIcon = (text) => {
  switch (text) {
    case "Home":
      return <HomeIcon />;
    case "Teambuilder":
      return <BuildIcon />;
    case "Laboratory":
      return <ScienceIcon />;
    case "Matches":
      return <HistoryToggleOffIcon />;
    case "Calculator":
      return <CalculateIcon />;
  }
};

const SidebarItem = ({ text }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon
          sx={{
            paddingLeft: "10px",
          }}
        >
          {renderIcon(text)}
        </ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={{
            fontWeight: "500",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
