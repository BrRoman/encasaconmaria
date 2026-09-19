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
      <h1 className="site-title">En casa con María</h1>
      <h2 className="mx-4">Tienda cristiana de productos naturales</h2>

      <hr className="my-8 border-gray-300" />

      <div
        id="menu"
        className="flex flex-col items-start gap-8 ml-4 my-5 md:flex-row md:flex-wrap md:justify-center md:mx-0"
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
            <span>Contáctenos</span>
          </div>
        </Link>
      </div>

      <hr className="my-8 border-gray-300" />

      <div id="categories" className="flex flex-col my-8 md:w-2/3 md:mx-auto">
        <div className="flex flex-col md:flex-row gap-8 my-8">
          <Image
            src={imgRosario}
            alt="Foto rosario"
            width={300}
            height={300}
            className="w-full m-0 md:max-w-64 md:rounded-md"
          />

          <div>
            <h2>Nuestros rosarios</h2>
            <div className="text m-4 md:font-xl">
              Todos nuestros rosarios son fabricados a mano siguiendo métodos
              tradicionales en uso en la Iglesia católica.
              <br />
              Trabajamos en un ambiente de ascesis, de oración y de paz.
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-500" />

        <div className="flex flex-col md:flex-row gap-8 my-8">
          <Image
            src={imgJabon}
            alt="Foto jabón"
            width={300}
            height={300}
            className="w-full m-0 md:max-w-64 md:rounded-md"
          />

          <div>
            <h2>Nuestros jabones</h2>
            <div className="text m-4 md:font-xl">
              Nuestros jabones son 100% naturales, fabricados con pura glicerina
              y ingredientes de origen natural recogidos en la naturaleza de
              Dios. Garantizados sin pesticidas ni colorantes.
              <br />
              Los jabones son disponibles o en forma redonda (65mm diametro) o
              en forma normal (90 x 55 mm).
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-500" />

        <button className="btn btn-white">
          <Link href="/products">Ver los productos</Link>
        </button>
      </div>
    </div>
  );
}
