import React, { useContext } from "react";
import "./GameCard.css";
import { UserContext } from "../../context/UserContext";
import { api } from "../../util/api/api";
import { Link } from "react-router-dom";

function GameCard(props) {
  const game = props.gameData;
  const { user } = useContext(UserContext);

  async function handleAddFavGame(userId, gameId) {
    const payload = {
      favoriteGamesId: [+gameId],
    };
    console.log(gameId, userId);

    const response = await api.buildApiPatchRequest(
      api.updateAccountUrl(userId),
      payload
    );

    const body = await response.json();
    console.log(body);
  }

  return (
    <div className="gameCard">
      <p>{game.title}</p>
      <img src={game.cover} alt={game.title} />
      <button type="button" onClick={() => handleAddFavGame(user.id, game.id)}>
        Adicionar
      </button>
      <Link to={`/Games/${game.id}`}>
        <button type="button">Detalhes</button>
      </Link>
    </div>
  );
}

export default GameCard;
