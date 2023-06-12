import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Perfil = () => {
  const { user, isAuthenticated } = useAuth0()
  return (

    isAuthenticated && (
      <div className='content-main-perfil'>
        <h1>Perfil</h1>
        <div className='content-details-perfil'>
          <img src={user.picture} alt='Portada' className='img-perfil' />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.locale}</p>
          <p>{user.nickname}</p>
        </div>
        <div className='content-cards-favorite'>
          <h2>Mis Cards</h2>
        </div>
      </div>
    )

  )
}

export default Perfil
