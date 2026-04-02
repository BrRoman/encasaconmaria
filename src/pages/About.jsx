import './About.css'
import Menu from '../components/Menu'
import nico_lady from '../assets/img/nico_lady.png'
import rosario from '../assets/img/rosario.png'
import jabon from '../assets/img/jabon.png'

function About() {
  return (
    <>
      <Menu />
      <div id="about">
        <h2>¿Quienes somos?</h2>
        <div class="foto_text">
          <img src={nico_lady} alt="Foto" width="300px" />
          <div class="text">Somos una pareja joven, católica, que busca hacer las cosas con amor y vivir honestamente del trabajo de sus manos, multiplicando la creatividad que Dios a puesto en ellos.
            Vivimos en Totana (Murcia).</div>
        </div>

        <h2>Nuestros rosarios</h2>
        <div class="foto_text">
          <img src={rosario} alt="Foto" width="300px" />
          <div class="text">Todos nuestros rosarios son fabricados a mano siguiendo metodos tradicionales en uso en los monasterios católicos.
            Trabajamos en un ambiente de ascesis, de oración y de paz.</div>
        </div>

        <h2>Nuestros jabones</h2>
        <div class="foto_text">
          <img src={jabon} alt="Foto" width="300px" />
          <div class="text">Nuestros jabones son 100% naturales, fabricados con pura glicerina y ingredientes de origen natural recogidos en la naturaleza de Dios.</div>
        </div>
      </div>
    </>
  )
}

export default About
