import { Link, NavLink } from 'react-router-dom'
import mariaImg from '../assets/img/maria.png'
import './Menu.css'

const pages = [
  {
    id: 1,
    slug: "about",
    title: "¿Quienes somos?",
  }, {
    id: 2,
    slug: "products",
    title: "Productos",
  }, {
    id: 3,
    slug: "contact",
    title: "Contáctanos",
  },
]

const pagesHtml = pages.map(page => {
  return (
    <li key={page.id} className="nav-item">
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to={"/encasaconmaria/" + page.slug}>
        {page.title}
      </NavLink>
    </li>
  )
})

function Menu(props) {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary p-0" data-bs-theme="dark">
        <div className="container-fluid">
          <img src={mariaImg} alt="Virgen María" width="40px" className="me-3" />
          <Link className="navbar-brand fs-1" to={"/encasaconmaria/"}>En casa con María</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
            <ul className="navbar-nav">
              {pagesHtml}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menu
