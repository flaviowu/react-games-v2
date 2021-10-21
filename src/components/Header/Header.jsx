import React, { useEffect, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { JwtHandler } from "../../util/JwtHandler/JwtHandler";
import MenuAccount from "../MenuAccount/MenuAccount";
import MenuGames from "../MenuGames/MenuGames";
import Button from "@material-ui/core/Button";

function Header() {
  const { setAccount, isLogged, setIsLogged } =
    useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const handleOnJwtChange = () => {
      setIsLogged(JwtHandler.isJwtValid());
    };

    window.addEventListener("onJwtChange", handleOnJwtChange);

    // Função de limpeza
    return () => {
      window.removeEventListener("onJwtChange", handleOnJwtChange);
    };
  }, []);

  function handleLogout() {
    setAccount("");
    setIsLogged(!isLogged);
    localStorage.removeItem("userId");
    JwtHandler.clearJwt();
    history.push("/Login");
  }

  return (
    <div className="header">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </li>

        {isLogged ? (
          <>
            <li>
              <MenuGames />
            </li>
            <li>
              <MenuAccount />
            </li>
            <li>
              <Button onClick={handleLogout}>Logout</Button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/Login">
              <Button type="button">Login</Button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
