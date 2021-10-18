import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  function handleLogout() {
    setUser();
    history.push("/");
  }

  return (
    <div className="header">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Games">Games</Link>
        </li>
        <li>
          <Link to="/AddGame">AddGame</Link>
        </li>
        <li>
          <Link to="/AccountView">Account</Link>
        </li>
        <li>
          <Link to="/AccountEdit">Account Edit</Link>
        </li>

        {user ? (
          <li onClick={handleLogout}>Logout</li>
        ) : (
          <li>
            <Link to="/Login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
