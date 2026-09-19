"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import imgMaria from "../../static/img/maria.png";

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
  },
  {
    id: 3,
    slug: "products",
    title: "Tienda",
  },
  {
    id: 4,
    slug: "contact",
    title: "Contáctanos",
  },
];

const pagesHtml = (pathname: string) =>
  pages.map((page) => {
    return (
      <li key={page.id} className="text-gray-200 text-lg hover:text-white">
        <Link
          className={
            pathname === "/" + page.slug ? "nav-link active" : "nav-link"
          }
          href={"/" + page.slug}
        >
          {page.title}
        </Link>
      </li>
    );
  });

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="menu" className="md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center py-4">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              alt="En casa con María logo"
              src={imgMaria}
              width={40}
              height={40}
              className="mx-4"
            />

            <p className="m-0 text-2xl">En casa con María</p>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "hidden" : "block md:hidden"}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="fa-solid fa-bars"
            size="2x"
          />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "block md:hidden" : "hidden"}
        >
          <FontAwesomeIcon
            icon={faClose}
            className="fa-solid fa-close"
            size="2x"
          />
        </button>
      </div>

      <nav className={isOpen ? "block" : "hidden md:block"}>
        <ul className="flex-column md:flex md:items-center md:space-x-4 text-left ml-4 md:mr-4">
          {pagesHtml(pathname)}
        </ul>
      </nav>
    </div>
  );
}
