import React from "react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (

    <header className="flex items-center p-3 flex-wrap text-white bg-gradient-to-r from-red-600 to-gray-900">
      <div
        id="logo"
        className="lg:text-xl p-3 mr-4 inline-flex items-center font-sans font-bold"
      >
        <Link href="/">
          <a>Croi</a>
        </Link>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>

      <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
        <div
          className={
            "lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " +
            (showNav ? "" : "hidden")
          }
        >
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              Inicio
            </a>
          </Link>

          <Link href="/nosotros">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              Nosotros
            </a>
          </Link>
          <Link href="/Proyectos">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              Proyectos
            </a>
          </Link>
          <Link href="/contact">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              Financiar mi proyecto
            </a>
          </Link>
          <Link href="/contact">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900">
              Cerrar Sesion
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;