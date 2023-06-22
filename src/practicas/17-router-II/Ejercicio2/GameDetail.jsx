import {useParams} from 'react-router-dom'
import GameItem from '../UI/GameItem'
import {useEffect, useState} from 'react'
import games from '../../../fakeApi/games.json'

function GameDetail() {
  const [game, setGame] = useState()
  const params = useParams()

  useEffect(() => {
    const gameWithId = games.find(game => game.id === params.id)
    setGame(gameWithId)
  }, [])

  if (!game) {
    return <p>Cargando...</p>
  }

  return (
    <GameItem>
      <img style={{width: '100%'}} src={game.imgUrl} alt="Portada del juego" />
      <h3>{game.name}</h3>
      <p>Tiempo jugado {game.playedTime} horas</p>
      <p>Puntaje: {game.score}</p>
    </GameItem>
  )
}
export default GameDetail
