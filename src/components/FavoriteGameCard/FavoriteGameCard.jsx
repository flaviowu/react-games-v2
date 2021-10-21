import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom"
import { api } from "../../util/api/api";
import { CircularProgress } from "@material-ui/core";
import "./FavoriteGameCard.css";

function GameCard(props) {
  const game = props.gameData;
  const { account } = useContext(UserContext);
  const history = useHistory()

  // useEffect(() => {
  //   console.log(props.isInFavorite + " favorito?");
  // }, []);

  async function handleRemoveFavGame(accountId, gameId) {
    const payload = {
      removeFavoriteGamesId: [+gameId],
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

  if (!game) {
    return <CircularProgress />;
  }

  return (
    <div className="gameCard">
      <p>{game.title}</p>
      <img src={game.cover} alt={game.title} />
      <button
        type="button"
        onClick={() => handleRemoveFavGame(account.id, game.id)}
      >
        Remover
      </button>
      <button type="button" onClick={() => handleGoGameView(game.id)}>
        Detalhes
      </button>
    </div>
  );
}

export default GameCard;
