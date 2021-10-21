import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core//Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

export default function MenuGames() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
        Jogos
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
          <Link to="/Games">Todos os Jogos</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/FavoriteGames">Jogos Favoritos</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/AddGame">Adicionar Jogo</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
