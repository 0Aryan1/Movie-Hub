import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        sx={{ backgroundColor: "#2d313a" }}
      >
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="TV Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
