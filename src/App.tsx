// System / Package Imports
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

// Component Imports
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import HomeScreen from "./components/home/homescreen";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <HomeScreen />
    </Box>
  );
}

export default App;
