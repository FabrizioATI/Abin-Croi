import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap h-20 bg-gradient-to-r from-red-600 to-gray-900">
      <div class="px-8 pl-10 mr-1 flex items-center flex-shrink-0 text-white">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span class="font-semibold text-xl tracking-tight">Croii</span>
      </div>
      <form action="#" method="GET" class="px-20 hidden lg:block lg:pl-10 ml-1 mr-20 ">
        <label for="topbar-search" class="sr-only">Buscar</label>
        <div class="mt-1 relative lg:w-64">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
        </div>
      </form>

      <div class="mt-10 flex lg:mt-0 lg:ml-8">
        <div class="text-sm lg:flex-grow px-10">
          <Link href="/">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
              Inicio
            </a>
          </Link>
          <Link href="/nosotros">
            <a class="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
              Nosotros
            </a>
          </Link>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
            Proyectos
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
            Financiar mi proyecto
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-white mr-4">
            User
          </a>
          <a href="#responsive-header" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">
            Cerrar Sesion
          </a>
        </div>
      </div>

    </nav>
  )
}

export default NavBar;

