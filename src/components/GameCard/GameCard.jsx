import React, { useContext, useEffect } from "react";
import "./GameCard.css";
import { UserContext } from "../../context/UserContext";
import { api } from "../../util/api/api";
// import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom"

function GameCard(props) {
  const game = props.gameData;
  const isInFavorite = props.isInFavorite
  const { account } = useContext(UserContext);
  const history = useHistory()

  // useEffect(() => {
  //   console.log(props.isInFavorite + " favorito?");
  // }, []);

  async function handleAddFavGame(accountId, gameId) {
    const payload = {
      favoriteGamesId: [+gameId],
    };
    console.log(gameId, accountId);
    console.log(account);

    const response = await api.buildApiPatchRequest(
      api.updateAccountUrl(accountId),
      payload,
      true
    );

    const body = await response.json();
    console.log(body);
  }

  function handleGoGameView(gameId){
    history.push(`/Games/${gameId}`)
  }

  if (game === undefined) {
    return <CircularProgress />;
  }

  return (
    <div className="gameCard">
      <p>{game.title}</p>
      <img src={game.cover} alt={game.title} />
      <button
        type="button"
        onClick={() => handleAddFavGame(account.id, game.id)}
        disabled={isInFavorite}
      >
        Adicionar
      </button>
      <button type="button" onClick={() => handleGoGameView(game.id)}>
        Detalhes
      </button>
    </div>
  );
}

export default GameCard;
