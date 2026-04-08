import { Link } from 'react-router-dom'
import './Home.css'
import mariaImg from '../assets/img/maria.png'
import rosario from '../assets/img/rosario.png'
import jabon from '../assets/img/jabon.png'

function Home() {
  return (
    <>
      <div id="home">
        <img src={mariaImg} alt="Virgen María" />
        <h1>En casa con María</h1>
        <h2>Tienda casera de productos naturales</h2>
        <Link to="/encasaconmaria/about">¿Quienes somos?</Link>
        <Link to="/encasaconmaria/products">Productos</Link>
        <Link to="/encasaconmaria/contact">Contáctanos</Link>

        <div id="categories">
          <h2>Nuestros rosarios</h2>
          <div className="foto_text">
            <img src={rosario} alt="Foto rosario" width="300px" />
            <div className="text">Todos nuestros rosarios son fabricados a mano siguiendo métodos tradicionales en uso en la Iglesia católica.
              Trabajamos en un ambiente de ascesis, de oración y de paz.
            </div>
          </div>

          <h2>Nuestros jabones</h2>
          <div className="foto_text">
            <img src={jabon} alt="Foto jabón" width="300px" />
            <div className="text">Nuestros jabones son 100% naturales, fabricados con pura glicerina y ingredientes de origen natural recogidos en la naturaleza de Dios. Garantizados sin pesticidas ni colorantes. Los jabones son disponibles o en forma rotunda (65mm diametro) o en forma normal (90 x 55 mm).</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
