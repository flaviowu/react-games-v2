import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../util/api/api";

function GameView(props) {
  const id = props.match.params.id;
  const [game, setGame] = useState();

  useEffect(() => {
    const loadGame = async () => {
      const response = await api.buildApiGetRequest(api.readGameByIdUrl(id), true);
      const results = await response.json();
      console.log(results);
      setGame(results);
    };

    loadGame();
  }, [id]);
  
  if (!game) {
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    );
  }
  
  return (
    <div>
      <h2>Game</h2>
      <p>{game.title}</p>
      <Link to={`/GameEdit/${id}`}>
        <button type="button">Editar</button>
      </Link>
    </div>
  );
}

export default GameView;
