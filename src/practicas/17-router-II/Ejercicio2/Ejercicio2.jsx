import {Outlet, useRoutes} from 'react-router-dom'
import ListOfGames from './ListOfGames'
import Form from '../Ejercicio1/Form'
import GameDetail from './GameDetail'
import Header from './Header'

function Ejercicio2() {
  const router = useRoutes([
    {
      path: '/',
      element: (
        <>
          <h2>TIENDA DE JUEGOS</h2>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/todos-los-juegos',
          element: (
            <>
              <Form />
              <ListOfGames />
            </>
          ),
        },
      ],
    },
    {path: '/game/:id', element: <GameDetail />},
  ])

  return <>{router}</>
}
export default Ejercicio2
