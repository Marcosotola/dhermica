
import React from 'react'
import Card from '../Cards/Card';
import DataTratamientos from '../Cards/DataTratamientos';
import './Tratamientos.css';





export const Tratamientos = () => {
  return (
  <div className='body'>
    <Card details={DataTratamientos} />
    </div>
  )
}

export default Tratamientos;