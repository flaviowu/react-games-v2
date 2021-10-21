import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import "./Home.css";
// import { api } from "../../util/api/api";

function Home() {
  const { account, setAccount, isLogged, setIsLogged } =
    useContext(UserContext);

  // useEffect(() => {
  //   if (isLogged) {
  //     const loadAccount = async (id) => {
  //       const response = await api.buildApiGetRequest(api.readAccountByIdUrl(id), true);
  //       const accountData = await response.json();
  //       setAccount(accountData);
  //       console.log(accountData)
  //     };
  //     loadAccount(account);
  //   }
  // }, [isLogged]);

  return (
    <div className="home">
      <h2>Página Home</h2>
      {isLogged ? (
        <></>
      ) : (
        <>
          <Link to="/Login">
            <p>Faça Login</p>
          </Link>
          <Link to="/AccountCreate">
            <p>Ou crie uma conta</p>
          </Link>
        </>
      )}
    </div>
  );
}

export default Home;
