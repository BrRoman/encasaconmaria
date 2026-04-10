import './Contact.css'
import Menu from '../components/Menu'
import constructionImg from '../assets/img/construction.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <>
      <Menu />
      <div id="contact">
        <h1>Contáctanos</h1>
        <div className="d-flex align-items-center bg-light text-primary border rounded my-3 p-3">
          <FontAwesomeIcon icon="fa-solid fa-cog" spin size="3x" />
          <h3 className="fw-bold ms-2">Pagina en construcción…</h3>
        </div>
        <img src={constructionImg} alt="Obra" width="400px" />
      </div>
    </>
  )
}

export default Contact
