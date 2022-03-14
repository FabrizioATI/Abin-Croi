import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Header from '../header';
import axios from "axios";
import { FaEnvelope, FaUserAlt, FaPhoneAlt, FaIdCard, FaIdBadge, FaLock, FaChalkboardTeacher } from 'react-icons/fa';

const Register = () => {
  const [showMannager, setShowManagers] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [Register, fetchRegister] = useState([])
  
  const [lastName, setLastName] = useState()
  const [firstName, setFirstName] = useState()
  const [phoneNumber, sePhoneNumber] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [ruc, setRuc] = useState()
  const [mannager, setManager] = useState()
  const [cui, setCui] = useState()
  const [role, setRole] = useState()


  const cambioLastName = (e) => {
    setLastName(e.target.value)
  }

  const cambioFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const cambioPhoneNunber = (e) => {
    const number = parseInt(e.target.value)
    sePhoneNumber(number)
  }
  
  const cambioEmail = (e) => {
      setEmail(e.target.value)
  }

  const cambioPassword = (e) => {
      setPassword(e.target.value)
  }
  const cambioRuc = (e) => {
    setRuc(e.target.value)
  }

  const cambioManager = (e) => {
    //setManager(e.target.value)
    if(e.target.value === ""){
      setManager(" ")
    }
    else{
      setManager(e.target.value)
    }
  }

  const cambioCui = (e) => {
    setCui(e.target.value)
  }

  const cambioRole = (e) => {
    setRole(e.target.value)
    if (e.target.value === 'Juridic') {
      setShowManagers(true)
    }
    if (e.target.value === 'Natural') {
      setShowManagers(false)
    }
  }


  const register = async (e) => {
      e.preventDefault();
      let datos = {
        lastName: lastName,
        firstName: firstName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        ruc: ruc,
        mannager: mannager,
        cui: cui,
        role: role
      }
      await axios.post('http://localhost:3001/api/v1/user', datos)
          .then(res => {
              Register.push(res.data);
              setLastName('')
              setFirstName('')
              sePhoneNumber('')
              setEmail('')
              setPassword('')
              setRuc('')
              setManager('')
              setCui('')
              setRole('')
              console.log(Register)
              console.log(res)
              window.location = "/user"
          }).catch((error) => {
              console.log(error.toString());
              setShowModal(true)
          });
  }

  return (

  <div>
    <Header />
    <div className="items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="items-center justify-center w-full flex-1 px-20 text-center pt-36">
        <div className="bg-white rounded-2xl shadow-2xl flex w-full">
          <div className="w-2/5 bg-gradient-to-bl from-red-500 to-gray-900 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Bienvenido de nuevo!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
            <Link href="/user">
              <a
                className="border-2 border-white rounded-full shadow-xl px-12 py-2 inline-block font-semibold hover:bg-white
              hover:text-red-500 transition-colors duration-500 ease-in-out">
                Ya tengo cuenta
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
              
                <div className="flex flex-col">

                  <div className="flex flex-row items-center">
                    <div className="bg-gray-100 w-96 h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md hover:border-rose-700">
                      <FaUserAlt className="text-gray-400 m-2" />
                      <input onChange={cambioFirstName} type="text" placeholder="First Name" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-96 h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md hover:border-rose-700">
                      <FaUserAlt className="text-gray-400 m-2" />
                      <input onChange={cambioLastName} type="text" placeholder="Last Name" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-96 h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md hover:border-rose-700">
                      <FaPhoneAlt className="text-gray-400 m-2" />
                      <input onChange={cambioPhoneNunber} type="number" placeholder="Phone Number" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                  </div>
                
                  <div className="flex flex-row items-center">
                    <div className="bg-gray-100 w-96 h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md hover:border-rose-700">
                      <FaIdCard className="text-gray-400 m-2" />
                      <input onChange={cambioCui} type="text"  placeholder="CUI" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-96 h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md hover:border-rose-700">
                      <FaIdBadge className="text-gray-400 m-2" />
                      <input onChange={cambioRuc} type="text"  placeholder="RUC" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-96 h-10  flex items-center mb-3 mr-3 border-2">
                    <select onChange={cambioRole} class="form-select appearance-none block w-full px-3 py-1.5 border-2 border-rose-300 rounded-m text-base font-normal text-gray-400 bg-white bg-clip-padding bg-no-repeat border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-700 focus:outline-none" aria-label="Default select example">
                        <option selected>Select Role</option>
                        <option value="Natural">Natural</option>
                        <option value="Juridic">Juridic</option>
                    </select>
                    </div>
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="bg-gray-100 w-96 h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md hover:border-rose-700"> 
                      <FaEnvelope className="text-gray-400 m-2" />
                      <input onChange={cambioEmail} type="email"  placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-96 h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md hover:border-rose-700">
                      <FaLock className="text-gray-400 m-2" />
                      <input onChange={cambioPassword} type="password"  placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                  </div>
                </div>
              <>
                {showMannager ? (
                    <>
                        <div className="bg-gray-100 w-auto h-10 p-2 flex items-center mb-3 mr-3 border-2 border-rose-300 rounded-md">
                          <FaChalkboardTeacher className="text-gray-400 m-2" />
                          <input onChange={cambioManager} type="text" placeholder="Mannager" className="bg-gray-100 outline-none text-sm flex-1" />
                        </div>
                    </>
                ) : null}
              </>
              {/*ERRO MODAL LOGIN*/}
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
                                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">SU registro no a terminado reviselo de nuevo..</h3>
                                          <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={() => setShowModal(false)}>
                                              Volver a Revisar
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                  ) : null}
              </>
              <Link href="/user/project">
                  <a
                      onClick={register}
                      className="border-2 border-red-500 text-gray-900 rounded-full shadow-xl px-12 py-2 inline-block font-semibold hover:bg-red-500
hover:text-white transition-colors duration-500 ease-in-out">
                      Ingresar
                  </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}

export default Register;