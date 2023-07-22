import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        py: "1rem",
        bgcolor: "rgba(0, 0, 0, 0.12)",
      }}
    >
      <Typography variant="body1" fontSize="medium" fontWeight={"bold"}>
        <Link to="/">Register</Link>
      </Typography>
      <Typography variant="body1" fontSize="medium" fontWeight={"bold"}>
        <Link to="/page2">Page2</Link>
      </Typography>
      <Typography variant="body1" fontSize="medium" fontWeight={"bold"}>
        <Link to="/page3">Page3</Link>
      </Typography>
    </Box>
  );
};

export default Navbar;
