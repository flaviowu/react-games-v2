import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Home() {
    const {user, setUser} = useContext(UserContext)
  return (
    <div className="home">
      <h2>Página Home</h2>
      <p>{user}</p>
    </div>
  );
}

export default Home;
