import React from 'react'

const carrosImg = require.context('../../../assets/img/carros', true)
const banderaImg = require.context('../../../assets/img/bandera', true)

const CarsDetails = (selectCard) => {
  const {
    img,
    bandera,
    marca,
    modelo,
    anno,
    precio,
    hp,
    cilindrada,
    motor,
    ancho,
    altura,
    peso
  } = selectCard.selectCard
  return (
    <div>
      <div className='content-details-father'>
        <div className='content-details' style={selectCard.thema ? { background: '#242424', color: 'whiteSmoke' } : { background: 'white' }}>
          <div className='content-img-info'>
            <div className='content-img'>
              <img src={carrosImg(`./${img}`)} alt='Carro' loading='lazy' />
            </div>
            <div className='content-info-primary'>
              <div className='content-info-btn'>
                <div className='content-info'>
                  <img src={banderaImg(`./${bandera}`)} alt='Carro' loading='lazy' />
                  <div className='marca-modelo'>
                    <h1 className='marca-cards'>{marca}</h1>
                    <p className='modelo-cards'>{modelo}</p>
                    <p className='modelo-cards'>{anno}</p>
                  </div>
                </div>
                <div className='content-btn'>
                  <button className='btn-remove' onClick={() => selectCard.remover()}>x</button>
                </div>
              </div>
              <p className='details-precie'>
                <span style={{ fontWeight: 'bold', padding: '0px 8px 0px 0px' }}>PRECIO:</span>
                {precio !== '' ? precio : 'Sin datos'}
              </p>
            </div>
          </div>
          <div>
            <h3 style={{ textAlign: 'center', fontSize: '24px', textTransform: 'uppercase' }}>Details:</h3>
            <div className='content-info-secundary'>
              <div>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>HP: </span>
                  {hp !== '' ? hp : 'Sin datos'}
                </p>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>CC: </span>
                  {cilindrada !== '' ? cilindrada : 'Sin datos'}
                </p>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>MOTOR: </span>
                  {motor !== '' ? motor : 'Sin datos'}
                </p>
              </div>
              <div>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>TORCIÓN MAXIMA: </span>
                  {selectCard.selectCard.torsion_maxima !== '' ? selectCard.selectCard.torsion_maxima : 'Sin datos'}
                </p>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>VELOCIDAD MAXIMA: </span>
                  {selectCard.selectCard.velocida_maxima !== '' ? selectCard.selectCard.velocida_maxima : 'Sin datos'}
                </p>
              </div>
              <div>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>ANCHO: </span>
                  {ancho !== '' ? ancho : 'Sin datos'}
                </p>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>ALTURA: </span>
                  {altura !== '' ? altura : 'Sin datos'}
                </p>
                <p className='details'>
                  <span style={{ fontWeight: 'bold' }}>PESO: </span>
                  {peso !== '' ? peso : 'Sin datos'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarsDetails
