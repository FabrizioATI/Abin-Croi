import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BarraLateral from '../../../components/admin/barra_lateral';
import NavBar from '../../../components/admin/navbar';

export default function Home() {
   /*const [Investment, fetchInvestment] = useState([])
   const [filterInvestment, setFilterInvestment] = useState([])
   const [searching, setSearching] = useState(false)
   const [idInvestment, setidInvestment] = useState('')
   const [order, setorder] = useState()
   const [created_at, setcreated_at] = useState()
   const [voucher, setvoucher] = useState()
   const [total_price, settotal_price] = useState()

   //   const [tablaInvestment, setTablaUsuarios]= useState([]);
   //   const [busqueda, fetchBusqueda]= useState("");

   const getData = () => {
      fetch('http://127.0.0.1:8000/order/my_investment/')
         .then((res) => res.json())
         .then((res) => {
            fetchInvestment(res)
            setFilterInvestment(res)
            console.log(res);
         })
   }

   const deleteInvestment = (idInvestment) => {
      setSearching(false)
      let rpta = window.confirm('¿Desea eliminar el pedido de inversión?')
      if (rpta) {
         fetch('http://127.0.0.1:8000/order/my_investment/' + idInvestment + '/', { method: 'DELETE' })
            .then((res) => {
               console.log(res)
               var temp = Investment.filter((i) => i.id !== idInvestment);
               fetchInvestment(temp)
            }

            )
      }

   }

   var results = [{}]
   const handleChange = e => {
      console.log(e.target.value)
      setSearching(true)

      //Métodos  que filtran la información
      results = Investment.filter((investment) => {
         if (investment.order.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
            || investment.created_at.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
            || investment.total_price.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
         ) {
            return investment;
         }
      }
      )
      //console.log(results)
      //Se asigna el valor al estado Filtrados
      setFilterInvestment(results)
   }

   //   const handleChange=e=>{
   //    fetchBusqueda(e.target.value);
   //    // console.log("Búsqueda:" +e.target.value);
   //    filtrar(e.target.value);
   //  }

   //   const filtrar=(terminoBusqueda)=>{
   //    var resultadosBusqueda=Investment.filter((investment)=>{
   //       if(investment.created_at.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
   //       || investment.total_price.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
   //      ){
   //        return investment;
   //      }
   //    });
   //    fetchInvestment(resultadosBusqueda);
   //  }


   const abrirmodalEdit = (item) => {
      setSearching(false)
      toggleModal('modalEdit');
      setidInvestment(item.id)
      setorder(item.order)
      console.log(item)
      setcreated_at(item.created_at)
      setvoucher(item.voucher)
      settotal_price(item.total_price)

   }
   const cerrarmodalEdit = () => {
      toggleModal('modalEdit', false);
   }

   //Funciones hanleChange
   const cambioOrder = (e) => {
      setorder(e.target.value)
   }
   const cambioFecha = (e) => {
      setcreated_at(e.target.value)
   }
   const cambioVoucher = (e) => {
      setvoucher(e.target.value)
   }
   const cambioTotal = (e) => {
      settotal_price(e.target.value)
   }

   const editInvestment = (e) => {
      setSearching(false)
      //no nesesidad de refrescar
      //e.preventDefault();
      //Funcion fecha dinamica en formato ISO
      var now = new Date();
      var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
      let datos = {
         // action: {
         //    email: email,
         //    username: username,
         //    //Agreagr fecha dinamica
         //    date_joined: isoDate,
         //    password: password
         // },
         order: order,
         created_at: isoDate,
         // voucher: voucher,
         total_price: total_price
      }
      console.log(datos);
      axios.put('http://127.0.0.1:8000/order/my_investment/' + idInvestment + '/', datos)
         .then(res => {
            Investment.push(datos);
            setidInvestment('')
            setorder('')
            // setcreated_at('')
            // setvoucher( )
            settotal_price('')
            console.log("----------------")
            console.log(Investment)
            toggleModal('modalEdit', false);
            //RESET VALOR FORMULARIO ADDUSER
            Array.from(document.querySelectorAll("input")).forEach(
               input => (input.value = "")
            );
         }).catch((error) => {
            console.log(error.toString());
         });
   }

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
                  <NavBar />
                  <div class="flex overflow-hidden bg-white pt-5">
                     <BarraLateral />
                     <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                     <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                        <main>
                           <div class="pt-6 px-4">
                              <div class="w-full">
                                 <section class="container mx-auto font-mono w-full">
                                    <div class="w-200 mb-8 overflow-hidden rounded-lg shadow-lg">
                                       <nav class="flex mb-8" aria-label="Breadcrumb">
                                          <ol class="inline-flex items-center space-x-1 md:space-x-2">
                                             <li class="inline-flex items-center">
                                                <a href="#" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                                   <svg class="w-5 h-12 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                                   Inicio
                                                </a>
                                             </li>
                                             <li>
                                                <div class="flex items-center">
                                                   <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                   <a href="#" class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Pedidos</a>
                                                </div>
                                             </li>
                                             <li>
                                                <div class="flex items-center">
                                                   <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                   <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Pedidos Inversiones</span>
                                                </div>
                                             </li>
                                          </ol>
                                       </nav>
                                       <div class="flex flex-col items-center justify-between px-200 py-4 bg-white dark:bg-gray-800 sm:flex-row">
                                          <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Lista de Pedidos de Inversiones</a>

                                          <div class="flex -mx-60">
                                          <form action="#" method="GET" class="w-full pl-20 mr-80 ml-80">
                                          <label for="topbar-search" class="sr-only">Buscar</label>
                                          <div class="mt-1 relative lg:w-80">
                                             <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                   <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                                </svg>
                                             </div>
                                             <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" onChange={handleChange} />
                                          </div>
                                       </form>
                                          </div>
                                       </div>                                       
                                       {/* modalEdit */}
                                       <div id="modalEdit" aria-hidden="true" class="bg-opacity- hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                                          <div class="relative py-6 px-4 w-full max-w-md h-full md:h-auto">

                                             <div class="relative bg-white rounded-lg shadow">
                                                <div class="flex justify-end p-2">
                                                   <button onClick={cerrarmodalEdit} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                   </button>
                                                </div>
                                                <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                                   <h3 class="text-center text-xl font-medium text-gray-900 dark:text-white">Ingrese los nuevos datos del pedido de Inversiones</h3>

                                                   <div>
                                                      <input onChange={cambioOrder} value={order} type="text" name="Pedido" id="order" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   {/* <div>
                                                      <input onChange={cambioFecha} value={created_at} type="text" name="Fecha" id="fecha" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div> */}
                                                   {/* <div className='input-file input-upload'>
                                                      <input placeholder='File' onChange={cambioVoucher} type='file' name='Voucher' id='voucher' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required />
                                                      <img src={pathImage} alt='Image' width='150'></img>
                                                   </div> */}
                                                   {/* <div>
                                                      <input onChange={cambioCantidad} value={quantity} type="text" name="Cantidad" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   <div>
                                                      <input onChange={cambioPrecio} value={sale_price} type="text" name="Precio" id="sale_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div> */}
                                                   <div>
                                                      <input onChange={cambioTotal} value={total_price} type="text" name="Total" id="total_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>

                                                   <button onClick={editInvestment} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar pedido de inversión</button>

                                                </form>
                                             </div>
                                          </div>
                                       </div>
                                       {/* endmodalEdit */}



                                       <div class="w-full overflow-x-auto">
                                    
                                          <table class="w-full h-full">
                                             <thead>
                                                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                                   <th class="px-4 py-3">Pedido</th>
                                                   {/* <th class="px-4 py-3">Acción</th> */}
                                                   <th class="px-4 py-3">Fecha de creación</th>
                                                   {/* <th class="px-4 py-3">Voucher</th> */}
                                                   <th class="px-4 py-3">Total</th>
                                                   <th class="px-4 py-3">Acciones</th>
                                                </tr>
                                             </thead>
                                             <tbody class="bg-white">
                                                {searching
                                                   ?
                                                   <>
                                                      {filterInvestment.map((item, i) => {
                                                         return (
                                                            <tr class="text-gray-700">

                                                               <td class="px-4 py-3 border">
                                                                  <div class="flex items-center text-sm">

                                                                     <div>
                                                                        <p class="font-semibold text-black">{item.order}</p>
                                                                     </div>
                                                                  </div>
                                                               </td>
                                                               <td class="px-4 py-3 text-ms border">{item.created_at}</td>
                                                               {/* <td class="px-4 py-3 text-xs border">
                                                            <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.voucher} </span>
                                                         </td> */}
                                                               <td class="px-4 py-3 text-sm border">{item.total_price}</td>

                                                               <td class="px-1 py-1 text-xs border">
                                                                  {/* <button onClick={(e) => readBond(item.id)} class="hidden sm:inline-flex ml-1 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2 text-center items-center mr-3">
                                                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                                               </svg>
                                                            </button> */}

                                                                  <button onClick={(e) => abrirmodalEdit(item)} class="hidden sm:inline-flex ml-1 text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2 text-center items-center mr-3">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                                     </svg>
                                                                     EDITAR
                                                                  </button>

                                                                  <button onClick={(e) => deleteInvestment(item.id)} class="hidden sm:inline-flex ml-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-4 py-2 text-center items-center mr-7">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash  mr-1 h-5 w-5" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                     </svg>
                                                                     ELIMINAR
                                                                  </button>
                                                               </td>
                                                            </tr>
                                                         )
                                                      })}
                                                   </>
                                                   :
                                                   <>
                                                      {Investment.map((item, i) => {
                                                         return (
                                                            <tr class="text-gray-700">

                                                               <td class="px-4 py-3 border">
                                                                  <div class="flex items-center text-sm">

                                                                     <div>
                                                                        <p class="font-semibold text-black">{item.order}</p>
                                                                     </div>
                                                                  </div>
                                                               </td>
                                                               {/* <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-sm">{item.action} </span>
                                                               </td> */}
                                                               <td class="px-4 py-3 text-ms border">{item.created_at}</td>
                                                               {/* <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.voucher} </span>
                                                               </td> */}
                                                               <td class="px-4 py-3 text-sm border">{item.total_price}</td>

                                                               <td class="px-1 py-1 text-xs border">
                                                                  {/* <button onClick={(e) => readBond(item.id)} class="hidden sm:inline-flex ml-1 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2 text-center items-center mr-3">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                                                     </svg>
                                                                  </button> */}

                                                                  <button onClick={(e) => abrirmodalEdit(item)} class="hidden sm:inline-flex ml-1 text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2 text-center items-center mr-3">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                                     </svg>
                                                                     EDITAR
                                                                  </button>

                                                                  <button onClick={(e) => deleteInvestment(item.id)} class="hidden sm:inline-flex ml-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-4 py-2 text-center items-center mr-7">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash  mr-1 h-5 w-5" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                     </svg>
                                                                     ELIMINAR
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
                                    </div>
                                 </section>
                              </div>
                           </div>
                        </main>
                        <footer class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
                           <ul class="flex items-center flex-wrap mb-6 md:mb-0">
                              <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
                              <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
                              <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li>
                              <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie Policy</a></li>
                              <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
                           </ul>
                           <div class="flex sm:justify-center space-x-6">
                              <a href="#" class="text-gray-500 hover:text-gray-900">
                                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900">
                                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900">
                                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                 </svg>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900">
                                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                              <a href="#" class="text-gray-500 hover:text-gray-900">
                                 <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                           </div>
                        </footer>
                        <p class="text-center text-sm text-gray-500 my-10">
                           &copy; 2019-2021 <a href="https://themesberg.com" class="hover:underline" target="_blank">Themesberg</a>. All rights reserved.
                        </p>
                     </div>
                  </div>
                  <script async defer src="https://buttons.github.io/buttons.js"></script>
                  <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
               </div >
            </body >
         </main >

         <footer className="">
            <a
               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
               target="_blank"
               rel="noopener noreferrer"
            >

               <span className="">
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
               </span>
            </a>
         </footer>
      </div >
   )
}