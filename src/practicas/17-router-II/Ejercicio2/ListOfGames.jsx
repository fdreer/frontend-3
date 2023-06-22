import {Link, useSearchParams} from 'react-router-dom'
import gamesData from '../../../fakeApi/games.json'
import GameItem from '../UI/GameItem'
import GameList from '../UI/GameList'
import {useEffect, useMemo, useState} from 'react'

function ListOfGames() {
  const [games, setGames] = useState([])
  const [searchParams] = useSearchParams()

  async function fetchData(filters) {
    let filteredGames = [...gamesData]
    if (filters.genero) {
      filteredGames = filteredGames.filter(game =>
        game.tags.includes(filters.genero)
      )
    }
    if (filters.minPlayed) {
      filteredGames = filteredGames.filter(
        game => game.playedTime >= filters.minPlayed
      )
    }
    setGames(filteredGames)
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams)
    fetchData(params)
  }, [searchParams])

  return (
    <GameList>
      {games.map(game => (
        <GameItem key={game.id}>
          <img
            style={{width: '100%'}}
            src={game.imgUrl}
            alt="Portada del juego"
          />
          <h3>{game.name}</h3>
          <Link to={`/game/${game.id}`}>
            <button>Ver detalles</button>
          </Link>
        </GameItem>
      ))}
    </GameList>
  )
}
export default ListOfGames
