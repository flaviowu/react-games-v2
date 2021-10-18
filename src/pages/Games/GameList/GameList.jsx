import React, { useEffect, useState } from "react";
import GameCard from '../../../components/GameCard/GameCard'
import { api } from "../../../util/api/api"

function GameList() {
  const [games, setGames] = useState([]);
    
    useEffect(() => {
        const loadGamesList = async () => {
            const response = await api.buildApiGetRequest(api.readAllGamesUrl())

            const results = await response.json();

            setGames(results)
            console.log(games)
        }
        
        loadGamesList()

    }, [])

    return (
        <div className="gameList">
            {games.map(game => <GameCard key={game.id} gameData={game} />)}
        </div>
    )
}

export default GameList;