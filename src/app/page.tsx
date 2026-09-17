import Link from "next/link";
import Image from "next/image";
import imgMaria from "../static/img/maria.png";
import imgRosario from "../static/img/rosario.png";
import imgJabon from "../static/img/jabon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faBasketShopping,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div id="home">
      <Image
        src={imgMaria}
        alt="Logo de En casa con María"
        width={200}
        height={200}
        className="mx-auto my-8"
      />
      <h1>En casa con María</h1>
      <h2>Tienda cristiana de productos naturales</h2>

      <div
        id="menu"
        className="flex flex-col items-start gap-8 md:flex-row md:flex-wrap md:justify-center my-5"
      >
        <Link href="/about">
          <div>
            <FontAwesomeIcon
              icon={faPersonCircleQuestion}
              className="fa-solid fa-person-circle-question"
              size="2x"
            />
            <span>¿Quienes somos?</span>
          </div>
        </Link>

        <Link href="/products">
          <div>
            <FontAwesomeIcon icon={faBasketShopping} size="2x" />
            <span>Tienda</span>
          </div>
        </Link>

        <Link href="/contact">
          <div>
            <FontAwesomeIcon icon={faPenNib} size="2x" />
            <span>Contáctanos</span>
          </div>
        </Link>
      </div>

      <div id="categories">
        <div className="flex flex-col md:flex-row gap-8 my-8">
          <Image
            src={imgRosario}
            alt="Foto rosario"
            className="w-full md:rounded-md img-fluid"
          />

          <div>
            <h2>Nuestros rosarios</h2>
            <div className="text">
              Todos nuestros rosarios son fabricados a mano siguiendo métodos
              tradicionales en uso en la Iglesia católica.
              <br />
              Trabajamos en un ambiente de ascesis, de oración y de paz.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 my-8">
          <Image
            src={imgJabon}
            alt="Foto jabón"
            className="w-full md:rounded-md img-fluid"
          />

          <div>
            <h2>Nuestros jabones</h2>
            <div className="text">
              Nuestros jabones son 100% naturales, fabricados con pura glicerina
              y ingredientes de origen natural recogidos en la naturaleza de
              Dios. Garantizados sin pesticidas ni colorantes.
              <br />
              Los jabones son disponibles o en forma redonda (65mm diametro) o
              en forma normal (90 x 55 mm).
            </div>
          </div>
        </div>

        <button className="btn btn-white">
          <Link href="/products">Ver los productos</Link>
        </button>
      </div>
    </div>
  );
}
