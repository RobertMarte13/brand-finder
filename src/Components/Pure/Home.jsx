import React, { useEffect, useRef, useState } from 'react'

// Datos de coches.
// import { cardsList } from '../../Models/cards.list'
// import { cardsListDetails } from '../../Models/card.list.detail'
import getCardsListDetails from '../../service/cards.list.details'
import getCardsList from '../../service/cards.list'

// Importaciones de estilos.
import '../../style/home.scss'
import '../../style/inputSearch.scss'

// componentes generadores
import CarsDetails from './generatingComponents/CarsDetails'
import TodoCards from './generatingComponents/TodoCards'
import CardsMain from './generatingComponents/CardsMain'
import { getAllCardsPages } from '../../service/cards.list.page'
import Paginacion from './Paginacion'

// variables para poder ver las imagenes.
const carrosImg = require.context('../../assets/img/carros', true)
const banderaImg = require.context('../../assets/img/bandera', true)

const Home = ({ thema }) => {
  const [resultSearch, setResultSearch] = useState([])
  const [selectCard, setSelectCard] = useState({})

  // Estados de las cards tanto de listDetails como de List
  const [cardsListDetails, setCardsListDetails] = useState(null)
  const [cardsListt, setCardsList] = useState(null)

  const [allPageCards, setALLPageCards] = useState(null)
  const [pageCards, setPageCards] = useState(null)

  // Esto es para que inmediatamente se carga la pagina se ejecuten estas funciones.
  useEffect(() => {
    getCardsDetailsRequest()
    getCardsListRequest()
    getAllPageCards()
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
        // console.log(res)
        setCardsList(res)
      })
  }

  // Aqui estoy mandando a llamar a mi api con getAllPages()
  // Esta me devulve las paginas y yo tengo dos estados, uno
  // guarda un arreglo de todas las paginas y el otro guarda por
  // defecto la primera.
  function getAllPageCards () {
    getAllCardsPages()
      .then(res => {
        // console.log(res)
        setALLPageCards(res)
        setPageCards(res[0].data)
      })
  }

  // Esta funcion lo que hace es cambiar la pagina alterando el numero
  // del objeto al que quiero acceder y luego pido la data para poder pintar
  // con un map lo que tengo dentro del map que son 12 objetos con la info
  // prncipal de las cards
  function obtainPagesCards (page) {
    setPageCards(allPageCards[page].data)
  }

  // console.log(allPageCards)
  // console.log(pageCards) // me devuelve los 12 elementos de la page
  // console.log(cardsListt)

  // Desestructuracion para obtener el valor de img de selectCard
  const { img } = selectCard

  // useRef para tener la referencia de lo que escribo en el input para compararlo despues
  // y obtener la carta que busco.
  const search = useRef('')

  // Esta funcion lo que hace es buscar la carta parecida al valor que introduje en el input
  // si esto es cierto se me devolvera la cards que encontro ya sea una o varias.
  function getSearchDetail () {
    const getSearch = cardsListt !== null
      ? cardsListt.map(cards => (
        cards.marca.toLowerCase() === search.current.value.toLowerCase() ||
        cards.modelo.toLowerCase() === search.current.value.toLowerCase() ||
        `${cards.marca.toLowerCase()} ${cards.modelo.toLowerCase()}` === search.current.value.toLowerCase()
          ? cards
          : null
      ))
      : null

    // Esto esta actualizando con todos los valores diferentes de null.
    setResultSearch(getSearch.filter(el => el !== null))
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
    <div>
      <div className='content-search'>
        <input className='input-search' onChange={() => getSearchDetail()} ref={search} type='text' placeholder='buscar' />
        <h1>Are you looking for information on any car?</h1>
        <h4>Well this is your perfect website!</h4>
        <h6>Navigate to, what are you waiting for?</h6>
      </div>
      <div className='content-portadas'>
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
        {resultSearch.length === 0
          ? (
            <div className='content-preview'>
              <div className='cards-content-father'>
                {
                  pageCards !== null
                    ? <CardsMain
                        cardsListt={pageCards}
                        obtainCardsDetails={obtainCardsDetails}
                        carrosImg={carrosImg}
                        banderaImg={banderaImg}
                      />
                    : (<h1>Cargando...</h1>)
                }
              </div>
            </div>)
          : (<TodoCards resultSearch={resultSearch} obtainCar={obtainCardsDetails} />)}
        {/* El componente de arriba es para buscar y pintar lo encontrado. */}
        <Paginacion
          obtainPagesCards={obtainPagesCards}
          // Encontrar la manera de pasarle el numero de la pagina
          // dinamicamente!
          thema={thema}
        />
      </div>
    </div>
  )
}

export default Home
