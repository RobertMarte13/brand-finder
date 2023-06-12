import React from 'react'

const carrosImg = require.context('../../../assets/img/carros', true)
const banderaImg = require.context('../../../assets/img/bandera', true)

const TodoCards = ({ resultSearch, obtainCar }) => {
  return (
    <div>
      {/* Este es el componente que renderiza cuando hago una busqueda. */}
      {resultSearch !== null
        ? resultSearch.map(cards => (
          cards
            ? (
              <div key={cards.id} className='cards-content' onClick={() => obtainCar(cards.id)}>
                <div className='img-portada-content'>
                  <img className='img-portadas' loading='lazy' src={carrosImg(`./${cards.img}`)} alt='Portadas' />
                </div>
                <div className='content-info-cards'>
                  <h3 className='title-cards'>{cards.marca}</h3>
                  <h6 className='models-cards'>{cards.modelo}</h6>
                  <p className='anno-cards'>{cards.anno}</p>
                  <img className='img-banderas-p' loading='lazy' src={banderaImg(`./${cards.bandera}`)} alt='Portadas' />
                </div>
              </div>)
            : null))
        : (<h1>cargando</h1>)}
    </div>
  )
}

export default TodoCards
