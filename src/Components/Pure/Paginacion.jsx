import React from 'react'
import 'bootstrap'

const Paginacion = ({ obtainPagesCards, thema }) => {
  return (
    <div className='content-paginacion'>
      <div className='page-navigation'>
        <button
          onClick={() => obtainPagesCards(0)}
          class='page-button'
          style={thema ? { color: 'white', border: '1px solid white' } : { color: '#242424', border: '1px solid #242424' }}
        >
          Previous
        </button>
        <button
          onClick={() => obtainPagesCards(1)}
          class='page-button'
          style={thema ? { color: 'white', border: '1px solid white' } : { color: '#242424', border: '1px solid #242424' }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Paginacion
