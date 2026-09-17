import Image from "next/image";
import imgNicoLady from "../../static/img/nico_lady.png";

export default function About() {
  return (
    <div id="about">
      <h1>¿Quiénes somos?</h1>

      <div className="flex flex-col md:flex-row gap-8 my-8 px-4">
        <Image
          src={imgNicoLady}
          alt="Foto"
          className="w-full md:w-1/2 md:rounded-md img-fluid"
        />

        <div className="text">
          Somos una pareja joven, católica, amantes de la naturaleza. Buscamos
          hacer las cosas con amor y vivir honestamente del trabajo de nuestras
          manos, multiplicando la creatividad que Dios ha puesto en nosotros.
          Vivimos en Totana (Murcia), España.
        </div>

        <p>
          En casa con María es una tienda cristiana de productos naturales que
          busca ofrecer a nuestros clientes artículos de calidad que promuevan
          el bienestar físico, emocional y espiritual. Nos esforzamos por
          brindar un servicio excepcional y crear un ambiente acogedor para
          todos los que nos visitan.
        </p>
        <p>
          Nuestra misión es proporcionar productos que ayuden a nuestros
          clientes a vivir una vida más saludable y equilibrada, mientras
          fomentamos valores cristianos y promovemos la conexión con la fe.
        </p>
      </div>
    </div>
  );
}
