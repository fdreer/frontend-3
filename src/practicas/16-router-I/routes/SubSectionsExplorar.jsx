import {Link, Route, Routes} from 'react-router-dom'

function SubSectionsExplorar(params) {
  return (
    <>
      <button>
        <Link to="tendencias">Tendencias</Link>
      </button>
      <button>
        <Link to="musica">Musica</Link>
      </button>
      <button>
        <Link to="peliculas">Peliculas</Link>
      </button>
    </>
  )
}
export default SubSectionsExplorar
