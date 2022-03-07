import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BarraLateral from '../../../components/admin/barra_lateral';
import NavBar from '../../../components/admin/navbar';

export default function Home() {
   /*const [Users, fetchUsers] = useState([])
   const [filterUsers, setFilterUsers] = useState([])
   const [searching, setSearching] = useState(false)
   const [idUser, setidUser] = useState('')
   const [ruc, setRuc] = useState()
   const [nombre, setNombre] = useState()
   const [gerente, setGerente] = useState()
   const [email, setEmail] = useState()
   const [username, setUsername] = useState()
   const [password, setPassword] = useState()

   //METHOD READ
   const getData = () => {
      fetch('http://127.0.0.1:8000/user/user_juridic/')
         .then((res) => res.json())
         .then((res) => {
            fetchUsers(res)
            setFilterUsers(res)
            console.log(res)
         })
   }
   //METHOD DELETE
   const deleteUser = (idUser) => {
      setSearching(false)
      let rpta = window.confirm('¿Desea eliminar el usuario?')
      if (rpta) {
         fetch('http://127.0.0.1:8000/user/user_juridic/' + idUser + '/', { method: 'DELETE' })
            .then((res) => {
               console.log(res)
               var temp = Users.filter((i) => i.id !== idUser);
               fetchUsers(temp)
            }

            )
      }

   }

   //METHOD FIND
   var results = [{}]
   const handleSearchChangeName = (e) => {
      setSearching(true)
      console.log(e.target.value)

      //Métodos  que filtran la información
      results = Users.filter((person) =>
         person.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      )
      //console.log(results)
      //Se asigna el valor al estado Filtrados
      setFilterUsers(results)
   }

   const handleSearchChangeManager = (e) => {
      setSearching(true)
      console.log(e.target.value)
      //Métodos  que filtran la información
      results = Users.filter((person) =>
         person.manager.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      )
      //console.log(results)
      //Se asigna el valor al estado Filtrados
      setFilterUsers(results)
   }

   const handleSearchChangeEmail = (e) => {
      setSearching(true)
      console.log(e.target.value)
      //Métodos  que filtran la información
      results = Users.filter((person) =>
         person.user.email.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      )
      //console.log(results)
      //Se asigna el valor al estado Filtrados
      setFilterUsers(results)
   }

   const handleSearchChangeRUC = (e) => {
      setSearching(true)
      console.log(e.target.value)

      //Métodos  que filtran la información
      results = Users.filter((person) =>
         person.RUC.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      )
      //console.log(results)
      //Se asigna el valor al estado Filtrados
      setFilterUsers(results)
   }
   //END METHOD FIND

   //CREATEMETHOD
   const addUser = (e) => {
      setSearching(false)
      e.preventDefault();
      var now = new Date(); // Fri Feb 20 2015 19:29:31 GMT+0530 (India Standard Time) 
      var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
      let datos = {
         user: {
            email: email,
            username: username,
            //Agreagr fecha dinamica
            date_joined: isoDate,
            password: password
         },
         RUC: ruc,
         name: nombre,
         manager: gerente
      }
      axios.post('http://127.0.0.1:8000/user/user_juridic/', datos)
         .then(res => {
            Users.push(res.data);
            setRuc('')
            setNombre('')
            setGerente('')
            setEmail('')
            setUsername('')
            setPassword('')
            console.log("----------------")
            console.log(Users)
            toggleModal('modal', false);
            Array.from(document.getElementById("proyectForm").reset())
         }).catch((error) => {
            console.log(error.toString());
         });
   }

   //PUTMETHOD
   const editUser = (e) => {
      setSearching(false)
      //no nesesidad de refrescar
      //e.preventDefault();
      //Funcion fecha dinamica en formato ISO
      var now = new Date();
      var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();   
      let datos = {
         user: {
            email: email,
            username: username,
            //Agreagr fecha dinamica
            date_joined: isoDate,
            password: password
         },
         RUC: ruc,
         name: nombre,
         manager: gerente
      }
      axios.put('http://127.0.0.1:8000/user/user_juridic/' + idUser + '/', datos)
         .then(res => {
            Users.push(datos);
            setidUser('')
            setRuc('')
            setNombre('')
            setGerente('')
            setEmail('')
            setUsername('')
            setPassword('')
            console.log("----------------")
            console.log(Users)
            toggleModal('modalEdit', false);
            //RESET VALOR FORMULARIO ADDUSER
            Array.from(document.querySelectorAll("input")).forEach(
               input => (input.value = "")
             );
         }).catch((error) => {
            console.log(error.toString());
         });
   }

   //  Metodos de Toggle Modal
   const abrirmodal = () => {
      toggleModal('modal');
   }
   const cerrarmodal = () => {
      toggleModal('modal', false);
   }

   //  Metodos de Toggle Modal Edit
   const abrirmodalEdit = (item) => {
      toggleModal('modalEdit');
      setidUser(item.id)
      setRuc(item.RUC)
      console.log(item)
      setNombre(item.name)
      setGerente(item.manager)
      setEmail(item.user.email)
      setUsername(item.user.username)
      setPassword(item.user.password)
   }
   const cerrarmodalEdit = () => {
      toggleModal('modalEdit', false);
   }

   //Funciones hanleChange
   const cambioRUC = (e) => {
      setRuc(e.target.value)
   }
   const cambioNombre = (e) => {
      setNombre(e.target.value)
   }
   const cambioGerente = (e) => {
      setGerente(e.target.value)
   }
   const cambioEmail = (e) => {
      setEmail(e.target.value)
   }
   const cambioUsername = (e) => {
      setUsername(e.target.value)
   }
   const cambioPassword = (e) => {
      setPassword(e.target.value)
   }

   //funciones que realizaran despues del renderizado
   useEffect(() => {
      getData()
   }, [])*/

   return (
      <div className="">
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="bg-black">
            <body>

               <div>
                  <NavBar/>
                  <div class="flex overflow-hidden bg-white pt-16">
                     <BarraLateral/>
                     <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                     <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                        <main>
                           <div class="pt-6 px-4">
                              <div class="w-full">
                                 <section class="container mx-auto p-6 font-mono">
                                    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                                       <nav class="flex mb-5" aria-label="Breadcrumb">
                                          <ol class="inline-flex items-center space-x-1 md:space-x-2">
                                             <li class="inline-flex items-center">
                                                <a href="#" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                                   <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                                   Inicio
                                                </a>
                                             </li>
                                             <li>
                                                <div class="flex items-center">
                                                   <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                   <a href="#" class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Usuarios</a>
                                                </div>
                                             </li>
                                             <li>
                                                <div class="flex items-center">
                                                   <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                   <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Usuarios Jurídicos</span>
                                                </div>
                                             </li>
                                          </ol>
                                       </nav>
                                       <div class="w-full grid grid-cols-1">
                                          <div class="w-full overflow-x-auto px-4">
                                             <div class="bg-gray-300 flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
                                                <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Búsqueda de Usuarios</a>
                                             </div>
                                             <form class="bg-gray-100 shadow-md rounded px-8 pt-2 pb-8 mb-2 grid grid-cols-2">
                                                <div class="mb-2 px-2">
                                                   <label class="block text-gray-700 text-sm font-bold mb-2" for="Nombre">
                                                      RUC
                                                   </label>
                                                   <input  /*onChange={handleSearchChangeRUC}*/ class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                                                </div>
                                                <div class="mb-2 px-2">
                                                   <label class="block text-gray-700 text-sm font-bold mb-2" for="Empresa">
                                                      Email
                                                   </label>
                                                   <input /*onChange={handleSearchChangeEmail}*/ class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" />
                                                </div>
                                                <div class="mb-2 px-2">
                                                   <label class="block text-gray-700 text-sm font-bold mb-2" for="Correo">
                                                   Empresa o Nombre Jurídico
                                                   </label>
                                                   <input  /*onChange={handleSearchChangeName}*/  class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                                                </div>
                                                <div class="mb-2 px-2">
                                                   <label class="block text-gray-700 text-sm font-bold mb-2" for="RUC o DNI">
                                                      Gerente
                                                   </label>
                                                   <input /*onChange={handleSearchChangeManager}*/  class="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" />
                                                </div>

                                             </form>
                                          </div>

                                          <div class="">
                                             <div class="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
                                                <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Lista de Usuarios Jurídicos</a>

                                                <div class="flex -mx-2">
                                                   <button /*onClick={abrirmodal}*/ class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-80" type="button" data-modal-toggle="authentication-modal">
                                                      Agregar Usuario
                                                   </button>
                                                </div>
                                             </div>

                                             <div id="modal" aria-hidden="true" class="bg-opacity-70 hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                                                <div class="relative px-4 w-full max-w-md h-full md:h-auto">

                                                   <div class="relative bg-white rounded-lg shadow">
                                                      <div class="flex justify-end p-2">
                                                         <button /*onClick={cerrarmodal}*/ type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                         </button>
                                                      </div>
                                                      <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                                         <h3 class="text-xl font-medium text-gray-900 dark:text-white">Ingrese los datos del usuario</h3>

                                                         <div>
                                                            <input /*onChange={cambioRUC}*/ placeholder="RUC" type="text" name="RUC" id="RUC" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioNombre}*/ placeholder="Nombre Jurídico o Empresa" type="text" name="nombre" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioGerente}*/ placeholder="Gerente" type="text" name="gerente" id="gerente" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioEmail}*/ placeholder="Email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioUsername}*/ placeholder="Username" type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioPassword}*/ placeholder="Password" type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>

                                                         <button /*onClick={addUser}*/ class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar Usuario</button>

                                                      </form>
                                                   </div>
                                                </div>
                                             </div>
                                             <div id="modalEdit" aria-hidden="true" class="bg-opacity- hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                                                <div class="relative py-6 px-4 w-full max-w-md h-full md:h-auto">

                                                   <div class="relative bg-white rounded-lg shadow">
                                                      <div class="flex justify-end p-2">
                                                         <button /*onClick={cerrarmodalEdit}*/ type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                         </button>
                                                      </div>
                                                      <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                                         <h3 class="text-center text-xl font-medium text-gray-900 dark:text-white">Ingrese los nuevos datos del usuario</h3>

                                                         <div>
                                                            <input /*onChange={cambioRUC} value={ruc}*/ type="text" name="RUC" id="RUC" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioNombre} value={nombre}*/ type="text" name="nombre" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioGerente} value={gerente}*/ type="text" name="gerente" id="gerente" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioEmail} value={email}*/ type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioUsername} value={username}*/ type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>
                                                         <div>
                                                            <input /*onChange={cambioPassword}*/ placeholder="Nueva contraseña" type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                         </div>

                                                         <button /*onClick={editUser}*/ class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar Usuario</button>

                                                      </form>
                                                   </div>
                                                </div>
                                             </div>

                                             {/*TABLE*/}
                                             {/*
                                             <div class="w-full overflow-x-auto">
                                                <table class="w-full">
                                                   <thead>
                                                      <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                                         <th class="px-4 py-3">Empresa</th>
                                                         <th class="px-4 py-3">Gerente</th>
                                                         <th class="px-4 py-3">RUC</th>
                                                         <th class="px-4 py-3">Email</th>
                                                         <th class="px-4 py-3">Date_Joined</th>
                                                         <th class="px-4 py-3">Acciones</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody class="bg-white">
                                                   {searching 
                                                      ?
                                                      <>
                                                      {filterUsers.map((item, i) => {
                                                         return (
                                                            <tr class="text-gray-700">

                                                               <td class="px-4 py-3 border">
                                                                  <div class="flex items-center text-sm">

                                                                     <div>
                                                                        <p class="font-semibold text-black">{item.name}</p>
                                                                     </div>
                                                                  </div>
                                                               </td>
                                                               <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-sm">{item.manager} </span>
                                                               </td>
                                                               <td class="px-4 py-3 text-ms border">{item.RUC}</td>
                                                               <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.user.email} </span>
                                                               </td>
                                                               <td class="px-4 py-3 text-sm border">{item.user.date_joined}</td>
                                                               <td class="px-4 py-3 text-xs border">

                                                                  <button onClick={(e) => deleteUser(item.id)} class="mb-5 hidden sm:inline-flex ml-5 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash -ml-1 mr-2 h-4 w-4" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                     </svg>
                                                                     ELIMINAR
                                                                  </button>
                                                                  <button onClick={(e) => abrirmodalEdit(item)} class="mb-5 hidden sm:inline-flex ml-5 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-trash -ml-1 mr-2 h-4 w-4 white" width="16" height="16" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>EDITAR 
                                                                  </button>
   
                                                               </td>
                                                            </tr>
                                                         )
                                                      })}
                                                      </>
                                                      :
                                                      <>
                                                      {Users.map((item, i) => {
                                                         return (
                                                            <tr class="text-gray-700">

                                                               <td class="px-4 py-3 border">
                                                                  <div class="flex items-center text-sm">

                                                                     <div>
                                                                        <p class="font-semibold text-black">{item.name}</p>
                                                                     </div>
                                                                  </div>
                                                               </td>
                                                               <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-sm">{item.manager} </span>
                                                               </td>
                                                               <td class="px-4 py-3 text-ms border">{item.RUC}</td>
                                                               <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.user.email} </span>
                                                               </td>
                                                               <td class="px-4 py-3 text-sm border">{item.user.date_joined}</td>
                                                               <td class="px-4 py-3 text-xs border">

                                                                  <button onClick={(e) => deleteUser(item.id)} class="mb-5 hidden sm:inline-flex ml-5 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash -ml-1 mr-2 h-4 w-4" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                     </svg>
                                                                     ELIMINAR
                                                                  </button>
                                                                  <button onClick={(e) => abrirmodalEdit(item)} class="mb-5 hidden sm:inline-flex ml-5 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-trash -ml-1 mr-2 h-4 w-4 white" width="16" height="16" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>EDITAR 
                                                                  </button>
   
                                                               </td>
                                                            </tr>
                                                         )
                                                      })}
                                                      </>
                                                      }
                                                   
                                                   </tbody>
                                                </table>
                                             </div>
                                             */}
                                          </div>
                                          

                                       </div>

                                    </div>
                                 </section>
                              </div>
                           </div>
                        </main>
                     </div>
                  </div>
                  <script async defer src="https://buttons.github.io/buttons.js"></script>
                  <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
               </div>
            </body>
         </main>
      </div>
   )
}