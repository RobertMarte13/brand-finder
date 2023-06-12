import React from 'react'
import Home from '../Pure/Home'
import CarList from '../Pure/NavCarList'

const ContainerHome = ({ thema }) => {
  return (
    <div>
      <CarList thema={thema} />
      <Home thema={thema} />
    </div>
  )
}

export default ContainerHome
