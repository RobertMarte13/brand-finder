import React from 'react'
import '../../style/imgBanderaThema.css'
import { MoonFill, SunFill } from 'react-bootstrap-icons'

const BotonThemas = ({ thema, getThemas }) => {
  console.log(thema)

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        {thema
          ? <SunFill onClick={() => getThemas()} className='icons-thema-sun' style={{ fontSize: '20px', cursor: 'pointer' }} />
          : <MoonFill onClick={() => getThemas()} className='icons-thema-moon' style={{ fontSize: '20px', cursor: 'pointer' }} />}
      </div>
    </div>
  )
}

export default BotonThemas
