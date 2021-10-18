import React, {useEffect, useState} from 'react';
import { api } from '../../util/api/api'
import GameCard from '../GameCard/GameCard';
import './GameList.css';

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

export default GameList
