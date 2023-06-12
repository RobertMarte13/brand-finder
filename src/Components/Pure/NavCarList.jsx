import { Link } from 'react-router-dom'

// Estilos para NavCarList
import '../../style/NavCarList.scss'

const CarList = ({ thema }) => {
  return (
    <header className='header-filter'>
      <nav>
        <h1>Filters</h1>
        <ul>
          <li>
            <Link
              to='/deportivos'
              style={thema ? { color: 'white' } : { color: 'black' }}
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              to='/suv'
              style={thema ? { color: 'white' } : { color: 'black' }}
            >
              Suv
            </Link>
          </li>
          <li>
            <Link
              to='/sedan'
              style={thema ? { color: 'white' } : { color: 'black' }}
            >
              Sedán
            </Link>
          </li>
          <li>
            <Link
              to='/cupe'
              style={thema ? { color: 'white' } : { color: 'black' }}
            >
              Cupé
            </Link>
          </li>
          <li>
            <Link
              to='/kei_car'
              style={thema ? { color: 'white' } : { color: 'black' }}
            >
              Kei car
            </Link>
          </li>
          <li>
            <Link
              to='/pick_up'
              style={thema ? { color: 'white' } : { color: 'black' }}
            >
              Pick up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default CarList
