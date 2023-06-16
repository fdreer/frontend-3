import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <button>
          <Link to="/inicio">Home</Link>
        </button>
        <button>
          <Link to="/shorts">Shorts</Link>
        </button>
        <button>
          <Link to="/suscripciones">Suscripciones</Link>
        </button>
        <button>
          <Link to="/explorar">Explorar</Link>
        </button>
      </nav>
    </header>
  )
}

export default Header
