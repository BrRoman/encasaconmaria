import { Link } from 'react-router-dom'
import mariaImg from '../assets/img/maria.png'
import './Menu.css'

const pages = [
  {
    id: 1,
    slug: "",
    title: "Inicio",
  },
  {
    id: 2,
    slug: "about",
    title: "¿Quienes somos?",
  }, {
    id: 3,
    slug: "products",
    title: "Productos",
  }, {
    id: 4,
    slug: "contact",
    title: "Contáctanos",
  },
]

const pagesHtml = pages.map(page => {
  return (
    <li key={page.id} className="nav-item">
      <Link className="nav-link active" aria-current="page" to={"/encasaconmaria/" + page.slug}>
        {page.title}
      </Link>
    </li>
  )
})

function Menu(props) {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <img src={mariaImg} alt="Virgen María" width="30px" />
          <Link className="navbar-brand" to={"/encasaconmaria/"}>En casa con María</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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
