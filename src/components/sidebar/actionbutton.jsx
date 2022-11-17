import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ActionButton = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "10%",
        paddingBottom: "5%",
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "75%",
          boxShadow: 3,
        }}
      >
        Create New Team
      </Button>
    </Box>
  );
};

export default ActionButton;
