import React from 'react'
import ContainerHome from '../../Components/Container/ContainerHome'

const HomePages = ({ thema }) => {
  return (
    <div className='content-Home'>
      <h1 className='title'>Home</h1>
      <ContainerHome thema={thema} />
    </div>
  )
}

export default HomePages
