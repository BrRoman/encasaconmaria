"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Menu from "../components/Menu";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let params = useSearchParams();

  const displayMessage = () => {
    return (
      params.get("status") === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 text-center rounded relative m-4">
          <p>¡Enhorabuena! Su mensaje fue enviado con éxito.</p>
          <p>Nos pondremos en contacto con Usted lo antes posible.</p>
        </div>
      )
    );
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Menu />

      <div
        id="contact"
        className="w-full md:w-2/3 lg:w-1/2 mx-auto md:rounded-md"
      >
        {displayMessage()}

        <h1>¡Contáctenos!</h1>

        <form
          method="post"
          action="https://forms.un-static.com/forms/539fb9910b700b58d2a033a92ac3723d73fe553e"
          className="flex flex-col items-start gap-4 px-8"
        >
          {/* Nombre */}
          <div className="form-group">
            <label htmlFor="firstname">Nombre:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Apellidos */}
          <div className="form-group">
            <label htmlFor="lastname">Apellidos:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <small className="text-gray-500">
              Nunca compartiremos su correo electrónico con nadie más.
            </small>
          </div>

          {/* Mensaje */}
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe aquí su mensaje, su pregunta o su pedido."
              required
              rows={10}
            />
          </div>

          <div className="flex justify-center gap-4 w-full">
            {/* Cancel */}
            <button
              type="reset"
              value="reset"
              onClick={() => handleReset()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-600 rounded"
            >
              Cancelar
            </button>

            {/* Submit */}
            <button
              type="submit"
              value="Submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border border-blue-600 rounded"
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="mt-8 mb-2">
          <small className="text-gray-500 text-center w-full block">
            Powered by{" "}
            <a
              rel="nofollow"
              href="https://un-static.com/"
              className="text-blue-500 hover:text-blue-700"
            >
              Un-static Forms
            </a>
          </small>
        </div>
      </div>
    </>
  );
}
