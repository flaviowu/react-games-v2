import React, { useContext } from "react";
import "./GameCard.css";
import { UserContext } from "../../context/UserContext";
import { api } from "../../util/api/api";

function GameCard(props) {
  const game = props.gameData;
  const { user } = useContext(UserContext);
  console.log(game);
  
  async function handleAddFavGame(userId, gameId) {
    const payload = {
      favoriteGamesId: [+gameId],
    };
		console.log(gameId, userId)

    const response = api.buildApiPatchRequest(
      api.updateAccountUrl(userId),
      payload
    );

		// const results = await response.json();
		// console.log(results)
  }

  return (
    <div className="gameCard">
      <p>{game.title}</p>
      <img src={game.cover} alt={game.title} />
    	<button type="button" onClick={() => handleAddFavGame(user.id, game.id)} >Adicionar</button>
    </div>
  );
}

export default GameCard;
