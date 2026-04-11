import { React, useState } from "react";
import './Contact.css'
import Menu from '../components/Menu'

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      message
    );
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Menu />
      <div id="contact" className="d-flex flex-column align-items-center">
        <h1>Contáctanos</h1>

        <form method="post" action="https://forms.un-static.com/forms/539fb9910b700b58d2a033a92ac3723d73fe553e" className="col-10 col-lg-4">
          {/* Nombre */}
          <div className="form-group">
            <label for="firstname" className="form-label">Nombre:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              required
              className="form-control"
            />
          </div>

          {/* Apellidos */}
          <div className="form-group">
            <label for="lastname" className="form-label">Apellidos:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              required
              className="form-control"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label for="email" className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="form-control"
            />
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label for="mensaje" className="form-label">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Escribe aquí tu mensaje, tu pregunta o tu pedido."
              required
              className="form-control"
              rows="10"
            />
          </div>

          <div className="d-flex justify-content-center mt-2 mb-5">
            {/* Cancel */}
            <button
              type="reset"
              value="reset"
              onClick={() => handleReset()}
              className="btn btn-secondary mx-2"
            >
              Cancelar
            </button>

            {/* Submit */}
            <button
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
              className="btn btn-primary mx-2"
            >
              Enviar
            </button>
          </div>
        </form>
        <div align="center">
          <p><small>(Powered by <a rel="nofollow" href="Un-static Forms">Un-static Forms</a>)</small></p>
        </div>
      </div>
    </>
  )
}

export default Contact
