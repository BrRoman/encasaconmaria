import './Contact.css'
import Menu from '../components/Menu'
import constructionImg from '../assets/img/construction.png'

function Contact() {
  return (
    <>
      <Menu />
      <div id="contact">
        <h1>Contáctanos</h1>
        <h3>Pagina en construcción…</h3>
        <img src={constructionImg} alt="Obra" width="400px" />
      </div>
    </>
  )
}

export default Contact
