import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* Estilos */
import '../../style/home.scss'
import { MoonFill, SunFill, List, ListNested } from 'react-bootstrap-icons'
// import BotonThemas from './BotonThemas'
// import Search from './Search'

import { useAuth0 } from '@auth0/auth0-react'

const Menu = ({ thema, color, setThema, login, logout }) => {
  const { user, isAuthenticated } = useAuth0()
  const [openMenu, setOpenMenu] = useState(false)

  function getOpenMenu () {
    setOpenMenu(!openMenu)
  }
  return (
    <div>
      <header className='header' style={openMenu ? { visibility: 'visible', opacity: '1', transition: 'all 0.3s ease' } : { visibility: 'hidden', opacity: '0', transition: 'all 0.3s ease' }}>
        <nav className='navbar' style={thema ? { background: '#242424' } : { background: 'white' }}>
          <ul className='content-links'>
            <li>
              <Link to='/' style={color}>Home</Link>
            </li>
            <li>
              <Link to='/about' style={color}>About</Link>
            </li>
            <div style={{ display: 'flex', justifyContent: 'end', padding: '10px' }}>
              {thema
                ? <SunFill onClick={() => setThema(false)} className='icons-thema-sun' style={{ fontSize: '20px', cursor: 'pointer' }} />
                : <MoonFill onClick={() => setThema(true)} className='icons-thema-moon' style={{ fontSize: '20px', cursor: 'pointer' }} />}
            </div>
          </ul>
          <div className='content-logout-login'>
            {
              isAuthenticated
                ? (
                  <button className='logout' onClick={() => logout()}>Logout</button>
                  )
                : (
                  <button className='login' onClick={() => login()}>Login</button>
                  )
            }
          </div>
          {
            isAuthenticated
              ? (
                <div className='content-auth'>
                  <Link to='/auth' style={color}>
                    <img className='img-perfil-menu' src={user.picture} alt='Portada perfil' />
                  </Link>
                  <p>{user.name}</p>
                </div>
                )
              : null
          }
        </nav>
      </header>
      <div className='main-btn-menu'>
        <div className='content-btn-menu'>
          <button className='btn-menu' style={thema ? { color: 'white' } : { color: '#242424' }} onClick={() => getOpenMenu()}>{openMenu ? <ListNested /> : <List />}</button>
        </div>
      </div>
    </div>
  )
}

export default Menu
