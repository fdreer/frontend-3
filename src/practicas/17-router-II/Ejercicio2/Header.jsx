import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <ul style={{display: 'flex', listStyle: 'none', gap: '1rem'}}>
          <li>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li>
            <Link to={'/todos-los-juegos'}>Lista de Juegos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
