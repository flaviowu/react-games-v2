import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { api } from "../../util/api/api";
import { JwtHandler } from "../../util/JwtHandler/JwtHandler";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import "./login.css";

function Login(props) {
  const { setIsLogged } =
    useContext(UserContext);
  const [errorFlag, setErrorFlag] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await api.buildApiPostRequest(api.loginUrl(), payload);
    const body = await response.json();

    if (response.status === 200) {
      const accessToken = body.accessToken;

      localStorage.setItem("JWT", accessToken);

      JwtHandler.setJwt(accessToken);

      localStorage.setItem("userId", JwtHandler.getJwtPayload(JwtHandler.getJwt()).sub)

      setIsLogged(JwtHandler.isJwtValid());
      setErrorFlag(!JwtHandler.isJwtValid());

      props.history.push(`/`);
    } else {
      setErrorFlag(!errorFlag);
    }
  };

  return (
    <div className="login-form">
      <form name="login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="login-inputs">
          <label htmlFor="email">E-mail de login</label>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </div>
        <div className="login-button">
          <Button type="submit">Login</Button>
          {errorFlag ? <span>Erro no Login</span> : <></>}
        </div>
        <div className="login-account-register">
          <Link to="/AccountCreate">Criar Conta</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
