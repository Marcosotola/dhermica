import React from 'react'
import './Inicio.css';
import { Link } from 'react-router-dom';
import Tratamientos from './Tratamientos.png';
import Turnos from './Turnos.png';
import Llamanos from '../Inicio/Llamanos.png';
import Slider from '../Slider/Slider';
import Mimate from './Mimate.png';
import Regalate from './Regalate.png';
import Productos from './productos.png';
import Title from './Title.png';


export const Inicio = () => {
  return (
    <div className='container'>
      <main className='main'>
        <img className='title' src={Title} alt="titulo promos" />
<Slider />
      </main>
      <aside className='aside'>
      <Link to='/Tratamientos'>
        <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
        </Link>
        <img className='turnos' src={Turnos} alt="" />
        <Link to='/Productos'>
        <img className='productos' src={Productos} alt="productos" />
        </Link>
      
        <img className='mimate' src={Mimate} alt="" />
      </aside>
      <section className='section'>
<img className='llamanos' src={Llamanos} alt="informacion redes" />
      </section>
      <article className='article'>
        <img className='regalate' src={Regalate} alt="descripcion somos" />
      </article>

    </div>

  )
}

export default Inicio