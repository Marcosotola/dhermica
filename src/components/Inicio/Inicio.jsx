import React from 'react'
import './Inicio.css';
import Tratamientos from './Tratamientos.png';
import Turnos from './Turnos.png';
import promo1 from '../Slider/promoDepi.png';
import Llamanos from '../Inicio/Llamanos.png';


export const Inicio = () => {
  return (
    <div className='container'>
      <main className='main'>
        <h3 className='promo'>PROMOCIONES!!!</h3>
        <img src={promo1} alt="promo 1" />
      </main>
      <aside className='aside'>
        <img className='turnos' src={Turnos} alt="" />
        <h3 className='mimate'>Mimate, te lo mereces</h3>
        <img className='trata' src={Tratamientos} alt="todos los tratamientos" />
      <p className='somos'>
      Somos un centro de estética con profesionales altamente capacitado, con tecnología avanzada para brindar un tratamiento seguro y confiable para cada uno de nuestros pacientes que merece y requiere en su atención.
      </p>
      </aside>
      <section className='section'>
<img className='llamanos' src={Llamanos} alt="informacion redes" />
      </section>
      <article className='article'>Article</article>

    </div>

  )
}

export default Inicio