import { Link } from 'react-router-dom'
import './Home.css'
import mariaImg from '../assets/img/maria.png'
import rosario from '../assets/img/rosario.png'
import jabon from '../assets/img/jabon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <>
      <div id="home" className="container-fluid col-lg-8 mx-auto">
        <img src={mariaImg} alt="Virgen María" style={{ marginTop: "50px" }} />
        <h1 className="fs-sm-5">En casa con María</h1>
        <h2>Tienda casera de productos naturales</h2>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <Link to="/encasaconmaria/about" className="btn btn-outline-primary btn-light">
                <div className="d-flex justify-content-start align-items-center ps-4">
                  <FontAwesomeIcon icon="fa-solid fa-person-circle-question" size="2x" />
                  <span className="fw-bold ms-2">¿Quienes somos?</span>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-4">
              <Link to="/encasaconmaria/products" className="btn btn-outline-primary btn-light">
                <div className="d-flex justify-content-start align-items-center ps-4">
                  <FontAwesomeIcon icon="fa-solid fa-basket-shopping" size="2x" />
                  <span className="fw-bold ms-2">Productos</span>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-4">
              <Link to="/encasaconmaria/contact" className="btn btn-outline-primary btn-light">
                <div className="d-flex justify-content-start align-items-center ps-4">
                  <FontAwesomeIcon icon="fa-solid fa-pen-nib" size="2x" />
                  <span className="fw-bold ms-2">Contáctanos</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div id="categories" className="container">
          <div className="row border rounded-4 my-3 p-2">
            <div className="col-12 col-lg-4">
              <img src={rosario} alt="Foto rosario" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-8">
              <h2>Nuestros rosarios</h2>
              <div className="text">
                Todos nuestros rosarios son fabricados a mano siguiendo métodos tradicionales en uso en la Iglesia católica.<br />
                Trabajamos en un ambiente de ascesis, de oración y de paz.
              </div>
            </div>
          </div>

          <div className="row border rounded-4 my-3 p-2">
            <div className="col-12 col-lg-4">
              <img src={jabon} alt="Foto jabón" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-8">
              <h2>Nuestros jabones</h2>
              <div className="text">
                Nuestros jabones son 100% naturales, fabricados con pura glicerina y ingredientes de origen natural recogidos en la naturaleza de Dios. Garantizados sin pesticidas ni colorantes.<br />
                Los jabones son disponibles o en forma redonda (65mm diametro) o en forma normal (90 x 55 mm).</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
