import React, { useEffect, useState } from 'react'

// Importacion del componente que da todo el detalle del carro cuando damos click
import CarsDetails from '../generatingComponents/CarsDetails'

// Mis APIS
import getCardsListDetails from '../../../service/cards.list.details'
import getCardsList from '../../../service/cards.list'

// Import CardsMain componente generador de cards.
import CardsMain from '../generatingComponents/CardsMain'
import CarList from '../NavCarList'

// variables para poder ver las imagenes.
const carrosImg = require.context('../../../assets/img/carros', true)
const banderaImg = require.context('../../../assets/img/bandera', true)

const Electrico = ({ thema }) => {
  const [selectCard, setSelectCard] = useState({})
  const { img } = selectCard

  // Estados de las cards tanto de listDetails como de List
  const [cardsListDetails, setCardsListDetails] = useState(null)
  const [cardsListt, setCardsList] = useState(null)

  // Esto es para que inmediatamente se carga la pagina se ejecuten estas funciones.
  useEffect(() => {
    getCardsDetailsRequest()
    getCardsListRequest()
  }, [])

  // Esta funcion es para obtener toda la informacion de la respuesta de mi Api
  // que contiene toda la informacion cuando le damos click
  function getCardsDetailsRequest () {
    getCardsListDetails()
      .then(res => {
        setCardsListDetails(res)
      })
  }

  // Esta funcion es la que me da la informacion mediante una api propia para crear
  // la presentacion de las cartas
  function getCardsListRequest () {
    getCardsList()
      .then(res => {
        // Antes de actualizar el estado que mostrara las cartas o presentacion de las cartas
        // lo que estoy asiendo aqui es buscar en la res en la clasificacion de los objetos
        // todas las que sean igual a deportivo, para luego mandar la respuesta de los objetos
        // que la tenga.
        const newRes = res.map(res => res.clasificacion === 'electrico' ? res : null)
        // Aqui para que solo me filtre los objetos que son distintos de null ya que map
        // manda todos los objetos hasta los objetos aunque no considan.
        const filtradoRes = newRes.filter(res => res != null)
        // Por ultimo actualizo el estado.
        setCardsList(filtradoRes)
      })
  }

  // Esta funcion lo que hace es obtener el id de la carta a la que yo le di click y pintarla.
  function obtainCardsDetails (id) {
    cardsListDetails.map(cards =>
      cards.id === id
        ? setSelectCard(cards)
        : {}
    )
  }

  // Esta funcion cuando es llamada lo que hace es limpiar o remover la carta que e obtenido al
  // hacer click.
  function removeCardsDetails () {
    setSelectCard({})
  }

  return (
    <div className='content-Home'>
      <CarList thema={thema} />
      <h1>Electrico</h1>
      {/* Aqui estoy pintando un componente que es el que me pinta toda la informacion de la cards.
      la condicion lo que dise es que si la img es diferente de undefined entonces me pintara el
      componente. */}
      {
          img !== undefined
            ? (
              <CarsDetails
                selectCard={selectCard}
                remover={removeCardsDetails}
                thema={thema}
              />)
            : null
      }
      {/* Este html lo que esta haciendo es pintar todas las cartas filtradas dentro del then() y mandadas
      al cardsListt. */}
      {
        cardsListt !== null && cardsListt.length !== 0
          ? <CardsMain
              cardsListt={cardsListt}
              obtainCardsDetails={obtainCardsDetails}
              carrosImg={carrosImg}
              banderaImg={banderaImg}
            />
          : (<h1>Cargando...</h1>)
      }
    </div>
  )
}

export default Electrico
