import Link from 'next/link';
import React from 'react'
import Header from '../header';
import { FaRegEnvelope, FaUserAlt } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const Register = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center pt-10">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-2/5 bg-gradient-to-bl from-red-500 to-gray-900 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">Bienvenido de nuevo!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-2">Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
              <Link href="/user">
                <a
                  className="border-2 border-white rounded-full shadow-xl px-12 py-2 inline-block font-semibold hover:bg-white
                hover:text-red-500 transition-colors duration-500 ease-in-out">
                  Ingresar
                </a>
              </Link>
            </div>
            <div className="w-3/5 p-5">
              <div className="text-right font-bold">
                <span className="text-red-500">CROI</span> Investment
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-gray-700 mb-2">
                  Cree su cuenta
                </h2>
                <div className="border-2 w-10 border-red-500 inline-block mb-2"></div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <FaUserAlt className="text-gray-400 m-2" />
                    <input type="user" name="user" placeholder="Usuario" className="bg-gray-100 outline-none text-sm flex-1" />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input type="password" name="password" placeholder="Contraseña" className="bg-gray-100 outline-none text-sm flex-1" />
                  </div>
                  <a
                    href="/user"
                    className="border-2 border-red-500 rounded-full shadow-xl px-12 py-2 inline-block font-semibold hover:bg-red-500
                hover:text-white transition-colors duration-500 ease-in-out">
                    Registrar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}

export default Register;