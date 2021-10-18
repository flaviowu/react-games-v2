import React from 'react'

function GameCard(props) {
    const game = props.gameData 

    return (
        
        <div className="gameCard">
            <p>{game.title}</p>
            <img src={game.cover} alt={game.title}/>
        </div>
    )
}

export default GameCard
