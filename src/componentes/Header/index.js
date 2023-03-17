import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import "./header.css";

export default function Header(props) {
  const [active, setactive] = React.useState("1");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav" className="appbar">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" id="contAnunUbica">
            CURSO
          </Typography>

          <Box className="contMenuRight">
            <Button
              id={active == "1" ? "activee" : "white"}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
