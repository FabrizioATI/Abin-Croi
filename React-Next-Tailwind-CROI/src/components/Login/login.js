import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaRegEnvelope, FaUserAlt } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Header from '../header';
import Link from "next/link";

const Login = (props) => {

    const [Login, fetchLogin] = useState([])
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showModal, setShowModal] = useState(false);


    const cambioEmail = (e) => {
        setEmail(e.target.value)
    }

    const cambioPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        router.push('/user/project')
      }

    const login = async(e) => {
        e.preventDefault();
        let datos = {
            email: email,
            password: password
        }
        await axios.post('http://localhost:3001/api/v1/auth/login', datos)
            .then(res => {
                Login.push(res.data);
                setEmail('')
                setPassword('')
                console.log("----------------")
                console.log(Login)
                console.log(res)
                document.cookie = `${res.data.token}; max-age=${60 * 1}; path=/; samesite=strict`
                window.location = "/user/project"
            }).catch((error) => {
                console.log(error.toString());
                setShowModal(true)
            });
    }
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                        <div className="w-3/5 p-5">
                            <div className="text-left font-bold">
                                <span className="text-red-500">CROI</span> Investment
                            </div>
                            <div className="py-10">
                                <h2 className="text-3xl font-bold text-gray-700 mb-2">
                                    Inicie su Sesion
                                </h2>
                                <div className="border-2 w-10 border-red-500 inline-block mb-2"></div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                        <FaRegEnvelope className="text-gray-400 m-2" />
                                        <input onChange={cambioEmail} type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                                    </div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                        <MdLockOutline className="text-gray-400 m-2" />
                                        <input onChange={cambioPassword}  type="password" name="password" placeholder="Contraseña" className="bg-gray-100 outline-none text-sm flex-1" />
                                    </div>
                                    <div className="flex justify-between w-64 mb-5">
                                        <label className="flex items-center text-xs">
                                            <input type="checkbox" name="remember" className="mr-1" />
                                            Recuerda me
                                        </label>
                                        <a href="#" className="text-xs">Olvido su Contraseña?</a>
                                    </div>
                                    <Link href="/user/project">
                                        <a
                                            onClick={login}
                                            className="border-2 border-red-500 text-gray-900 rounded-full shadow-xl px-12 py-2 inline-block font-semibold hover:bg-red-500
                    hover:text-white transition-colors duration-500 ease-in-out">
                                            Ingresar
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5 bg-gradient-to-br from-red-500 to-gray-900 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                            <h2 className="text-3xl font-bold mb-2">Hola, Amigo!</h2>
                            <div className="border-2 w-10 border-white inline-block mb-2"></div>
                            <p className="mb-2">Ingresa tus datos personales y comienza tu viaje con nosotros</p>
                            <Link href="/user/register">
                                <a
                                    className="border-2 border-white rounded-full shadow-xl px-12 py-2 inline-block font-semibold hover:bg-white
                hover:text-red-500 transition-colors duration-500 ease-in-out">
                                    Registrarse
                                </a>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>


            <>
                {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
                <button onClick={() => setShowModal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <div className="p-6 pt-0 text-center">
                <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={() => setShowModal(false)}>
                    Yes, I'm sure
                </button>
            </div>
        </div>
    </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

            </>



        </div>
    );


}

export default Login;