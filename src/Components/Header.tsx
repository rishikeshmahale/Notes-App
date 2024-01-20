import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { logo } from "../Constants/Constants.js";

const Header: React.FC = () => {
  return (
    <>
      <AppBar color="transparent" position="static" >
        <Toolbar>
          <img src={logo} alt="logo" style={{ width: "30px" }} />
          <Typography>EverNote</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
