import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import "./Home.css";
// import { api } from "../../util/api/api";

function Home() {
  const { isLogged } =
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
      <img src="https://i.kym-cdn.com/photos/images/original/001/792/665/5cb.png" alt="Polystattion logo"/>
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
