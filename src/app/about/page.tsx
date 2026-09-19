import Menu from "../components/Menu";
import Image from "next/image";
import imgNicoLady from "../../static/img/nico_lady.png";

export default function About() {
  return (
    <>
      <Menu />

      <div id="about">
        <h1>¿Quiénes somos?</h1>

        <div className="flex-column gap-8 my-8 md:w-2/3 md:mx-auto">
          <Image
            src={imgNicoLady}
            alt="Foto"
            width={450}
            className="w-full md:max-w-64 md:rounded-md md:mx-auto"
          />

          <div className="text text-lg m-4">
            Somos una pareja joven, católica, amantes de la naturaleza. Buscamos
            hacer las cosas con amor y vivir honestamente del trabajo de
            nuestras manos, multiplicando la creatividad que Dios ha puesto en
            nosotros. Vivimos en Totana (Murcia), España.
          </div>

          <div className="text text-lg m-4">
            Nuestra misión es proporcionar productos que ayuden a nuestros
            clientes a vivir una vida más saludable y equilibrada, mientras
            fomentamos valores cristianos y promovemos la conexión con la fe.
          </div>
        </div>
      </div>
    </>
  );
}
