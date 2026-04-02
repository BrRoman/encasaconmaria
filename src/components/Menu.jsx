import { Link } from 'react-router-dom'
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
    <Link key={page.id} to={"/encasaconmaria/" + page.slug}>
      {page.title}
    </Link>
  )
})

function Menu(props) {
  return (
    <>
      <div id="menu">
        <h1>En casa con María</h1>
        <div>{pagesHtml}</div>
      </div>
    </>
  )
}

export default Menu
