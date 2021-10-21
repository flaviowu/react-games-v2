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
        <h4>Carregando...</h4>
      </div>
    );
  }
  
  return (
    <div>
      <h3>{game.title}</h3>
      <img src={game.cover} alt={`${game.title}'s cover`}/>
      <p>{game.description}</p>
      <p><a href={game.trailer} >Trailer</a></p>
      <p><a href={game.gameplay} >Gameplay</a></p>
      <Link to={`/GameEdit/${id}`}>
        <button type="button">Editar</button>
      </Link>
    </div>
  );
}

export default GameView;
