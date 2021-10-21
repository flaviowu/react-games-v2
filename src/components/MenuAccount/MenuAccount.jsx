import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core//Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import "./MenuAccount.css";

export default function MenuAccount() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(localStorage.getItem("userId"))  
    
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setUserId(localStorage.getItem("userId"));
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Conta
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={`/AccountView/${userId}`}>Minha Conta</Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Link to="/Profiles">Perfis</Link>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
