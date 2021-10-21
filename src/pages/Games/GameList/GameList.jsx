import React, { useEffect, useState, useContext } from "react";
import GameCard from "../../../components/GameCard/GameCard";
import { UserContext } from "../../../context/UserContext";
import { api } from "../../../util/api/api";
import "./GameList.css";

function GameList() {
  const { account } = useContext(UserContext);
  const [games, setGames] = useState([]);
  const [favGamesId, setFavGamesId] = useState([]);

  useEffect(() => {
    const loadGamesList = async () => {
      const response = await api.buildApiGetRequest(
        api.readAllGamesUrl(),
        true
      );

      const results = await response.json();

      setGames(results);
    };


    setFavGamesId(account.favoriteGames.map((favGame) => favGame.id));
    loadGamesList();
  }, []);


  return (
    <div className="gameList">
      {games.map((game) => (
        <GameCard key={game.id} gameData={game} isInFavorite={favGamesId.includes(game.id)}/>
      ))}
    </div>
  );
}

export default GameList;
