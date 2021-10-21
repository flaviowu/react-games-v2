import React, { useEffect, useState, useContext } from "react";
import FavoriteGameCard from "../../../components/FavoriteGameCard/FavoriteGameCard";
import { UserContext } from "../../../context/UserContext";

function FavoriteGamesList() {
  const { account } = useContext(UserContext);
  const [games, setGames] = useState([]);
  // const [favGames, setFavGames] = useState([]);

  useEffect(() => {
    setGames(account.favoriteGames);
  }, []);

  return (
    <div className="gameList">
      {games.map((game) => (
        <FavoriteGameCard key={game.id} gameData={game} />
      ))}
    </div>
  );
}

export default FavoriteGamesList;
