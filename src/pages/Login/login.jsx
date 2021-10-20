import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { api } from "../../util/api/api";
import { JwtHandler } from "../../util/JwtHandler/JwtHandler"
import { Link } from "react-router-dom";

function Login(props) {
  const { isLogged, setIsLogged } = useContext(UserContext)

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

      // console.log({ accessToken });
      
      setIsLogged(JwtHandler.isJwtValid());

      // props.history.push(`/`);
    
    } else {
      // Error
    }
  };

  return (
    <div className="login-form">
      <form name="login" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </div>
        <div className="login-account-register">
          <Link to="/AccountCreate">
            <span>Criar Conta</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
