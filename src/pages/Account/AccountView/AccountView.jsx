import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";

function AccountView() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h2>Página Usuário</h2>
          <h4>{user.name}</h4>
          <h4>{user.lastname}</h4>
        </>
      ) : (
        <>
          <h2>Não há Usuário Logado</h2>
        </>
      )}
    </div>
  );
}

export default AccountView;
