import './About.css'
import Menu from '../components/Menu'
import nico_lady from '../assets/img/nico_lady.png'

function About() {
  return (
    <>
      <Menu />
      <div id="about">
        <h2>¿Quienes somos?</h2>
        <div class="foto_text">
          <img src={nico_lady} alt="Foto" width="300px" />
          <div className="text">Somos una pareja joven, católica, amantes de la naturaleza. Buscamos hacer las cosas con amor y vivir honestamente del trabajo de nuestras manos, multiplicando la creatividad que Dios ha puesto en nosotros.
            Vivimos en Totana (Murcia), España.</div>
        </div>
      </div>
    </>
  )
}

export default About
