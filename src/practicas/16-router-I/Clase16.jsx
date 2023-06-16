import {Outlet, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import SubSectionsExplorar from './routes/SubSectionsExplorar'

export default function Clase16() {
  return (
    <>
      <h1>Clase 16</h1>
      <Header />
      <Routes>
        <Route path="/inicio" element={<h3>Inicio</h3>} />
        <Route path="/shorts" element={<h3>Shorts</h3>} />
        <Route path="/suscripciones" element={<h3>Suscripciones</h3>} />
        <Route
          path="/explorar"
          element={
            <>
              <h3>Explorar</h3>
              <Outlet />
            </>
          }
        >
          <Route index element={<SubSectionsExplorar />} />
          <Route path="tendencias" element={<h3>Tendencias</h3>} />
          <Route path="musica" element={<h3>Musica</h3>} />
          <Route path="peliculas" element={<h3>Peliculas</h3>} />
        </Route>
      </Routes>
    </>
  )
}
