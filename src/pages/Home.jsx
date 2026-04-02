import { Link } from 'react-router-dom'
import './Home.css'
import mariaImg from '../assets/img/maria.png'

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
      </div>
    </>
  )
}

export default Home
