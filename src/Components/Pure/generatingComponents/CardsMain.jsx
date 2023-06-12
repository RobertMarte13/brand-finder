import React from 'react'

const CardsMain = ({ cardsListt, obtainCardsDetails, carrosImg, banderaImg }) => {
  return (
    <div className='cards-content-father'>
      {cardsListt.map(cards => (
        <div key={cards.id} className='cards-content' onClick={() => obtainCardsDetails(cards.id)}>
          <div className='img-portada-content'>
            <img className='img-portadas' loading='lazy' src={carrosImg(`./${cards.img}`)} alt='Portadas' />
          </div>
          <div className='content-info-cards'>
            <h3 className='title-cards'>{cards.marca}</h3>
            <h6 className='models-cards'>{cards.modelo}</h6>
            <p className='anno-cards'>{cards.anno}</p>
            <img className='img-banderas-p' loading='lazy' src={banderaImg(`./${cards.bandera}`)} alt='Portadas' />
          </div>
        </div>))}
    </div>
  )
}

export default CardsMain
