import { Route, Routes } from 'react-router-dom'
import './App.css'
import './style/imgBanderaThema.scss'

// Estilos
import './style/main.scss'
import './style/footer.scss'
import './style/cards.scss'
import './style/paginacion.scss'
import './style/auth.scss'

// Rutas
import HomePages from './Pages/Home/HomePages'
import AboutPages from './Pages/About/AboutPages'
import NotFoundPages from './Pages/404/NotFoundPages'
import Menu from './Components/Pure/Menu'

// CustonHooks
import { useLocalStorage } from './hooks/useLocalStorage'

// Importaciones de componentes de clasificación
import Deportivos from './Components/Pure/classificationComponents/Deportivos'
import Suv from './Components/Pure/classificationComponents/Suv'
import PickUp from './Components/Pure/classificationComponents/PickUp'
import Sedan from './Components/Pure/classificationComponents/Sedan'
import Electrico from './Components/Pure/classificationComponents/Electrico'
import Cupe from './Components/Pure/classificationComponents/Cupe'
import KeiCar from './Components/Pure/classificationComponents/KeiCar'
import ProtectedProvaider from './Components/Pure/protectedProvaider/ProtectedProvaider'
// const imgGif = require.context('./assets/img/gif', true)

// auth0
import { useAuth0 } from '@auth0/auth0-react'
import AuthPage from './Pages/Auth/AuthPage'

function App () {
  // propiedades del objeto auth0
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  const [thema, setThema] = useLocalStorage('thema-dark', true)
  // const [loading, setLoading] = useState(false)

  /* Loading */
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [])

  return (
    <div className='content-main' style={thema ? { background: '#242424', color: 'whiteSmoke' } : { background: 'white' }}>
      <Menu
        thema={thema}
        color={thema ? { color: 'white' } : { color: 'black' }}
        setThema={setThema}
        login={loginWithRedirect}
        logout={logout}
      />
      <Routes>
        <Route element={<ProtectedProvaider isAllowed={isAuthenticated} redirect='/home' />}>
          <Route path='/auth' element={<AuthPage />} />
        </Route>
        <Route path='/' element={<HomePages thema={thema} />} />
        <Route path='/deportivos' element={<Deportivos thema={thema} />} />
        <Route path='/suv' element={<Suv thema={thema} />} />
        <Route path='/sedan' element={<Sedan thema={thema} />} />
        <Route path='/cupe' element={<Cupe thema={thema} />} />
        <Route path='/kei_car' element={<KeiCar thema={thema} />} />
        <Route path='/electrico' element={<Electrico thema={thema} />} />
        <Route path='/pick_up' element={<PickUp thema={thema} />} />
        <Route path='/about' element={<AboutPages />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>
      <footer className='footer' style={thema ? { background: '#202020', color: 'whiteSmoke' } : { background: '#f1f1f1' }}>
        <p className='copyright'>Copyright 'C'</p>
      </footer>
    </div>
  )
}

export default App
