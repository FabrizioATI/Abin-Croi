import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BarraLateral from '../../../components/admin/barra_lateral';
import NavBar from '../../../components/admin/navbar';

export default function Home() {
   /*const [Action, fetchAction] = useState([])
   const [filterAction, setFilterAction] = useState([])
   const [searching, setSearching] = useState(false)
   const [idAction, setidAction] = useState('')
   const [order, setorder] = useState()
   const [created_at, setcreated_at] = useState()
   const [voucher, setvoucher] = useState()
   const [quantity, setquantity] = useState()
   const [sale_price, setsale_price] = useState()
   const [total_price, settotal_price] = useState()
   //   const [tablaAction, setTablaUsuarios]= useState([]);
   //   const [busqueda, fetchBusqueda]= useState("");
   const [pathImage, setPathImage] = useState()

   const getData = () => {
      fetch('http://127.0.0.1:8000/order/my_action/')
         .then((res) => res.json())
         .then((res) => {
            fetchAction(res)
            setFilterAction(res)
            // console.log(res);
         })
   }

   const deleteAction = (idAction) => {
      setSearching(false)
      let rpta = window.confirm('¿Desea eliminar la accion?')
      if (rpta) {
         fetch('http://127.0.0.1:8000/order/my_action/' + idAction + '/', { method: 'DELETE' })
            .then((res) => {
               console.log(res)
               var temp = Action.filter((i) => i.id !== idAction);
               fetchAction(temp)
            }
            )
      }
   }

   var results = [{}]
   const handleChange = e => {
      // console.log(e.target.value)
      setSearching(true)

      //Métodos  que filtran la información
      results = Action.filter((action) => {

         if (action.order.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
            || action.created_at.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
            || action.total_price.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
         ) {
            return action;

         }

      }
      )
      //console.log(results)
      //Se asigna el valor al estado Filtrados
      setFilterAction(results)
      console.log(results)
   }

   //  Metodos de Toggle Modal
   // const abrirmodal = () => {
   //    toggleModal('modal');
   // }
   // const cerrarmodal = () => {
   //    toggleModal('modal', false);
   // }

   //  Metodos de Toggle Modal Edit

   const abrirmodalEdit = (item) => {
      setSearching(false)
      toggleModal('modalEdit');
      setidAction(item.id)
      setorder(item.order)
      console.log(item)
      setcreated_at(item.created_at)
      setvoucher(item.voucher)
      setquantity(item.quantity)
      setsale_price(item.sale_price)
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
   const cambioCantidad = (e) => {
      setquantity(e.target.value)
   }
   const cambioPrecio = (e) => {
      setsale_price(e.target.value)
   }
   const cambioTotal = (e) => {
      settotal_price(e.target.value)
   }


   // const addAction = (e) => {
   //    setSearching(false)
   //    e.preventDefault();
   //    var now = new Date(); // Fri Feb 20 2015 19:29:31 GMT+0530 (India Standard Time) 
   //    var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
   //    let datos = {
   //       // user: {
   //       //    email: email,
   //       //    username: username,
   //       //    //Agreagr fecha dinamica
   //       //    date_joined: isoDate,
   //       //    password: password
   //       // },
   //       order: order,
   //       created_at: isoDate,
   //       voucher: voucher,
   //       quantity: quantity,
   //       sale_price: sale_price,
   //       total_price: total_price
   //    }
   //    axios.post('http://127.0.0.1:8000/order/my_action/', datos)
   //       .then(res => {
   //          Action.push(res.data);
   //          setidAction('')
   //          setorder('')
   //          setcreated_at('')
   //          setvoucher( )
   //          setquantity('')
   //          setsale_price('')
   //          settotal_price('')
   //          console.log("----------------")
   //          console.log(Action)
   //          toggleModal('modal', false);
   //          Array.from(document.getElementById("proyectForm").reset())
   //       }).catch((error) => {
   //          console.log(error.toString());
   //       });
   // }

   const editAction = (e) => {
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
         quantity: quantity,
         sale_price: sale_price,
         total_price: total_price
      }
      console.log(datos);
      axios.put('http://127.0.0.1:8000/order/my_action/' + idAction + '/', datos)
         .then(res => {
            Action.push(datos);
            setidAction('')
            setorder('')
            // setcreated_at('')
            // setvoucher( )
            setquantity('')
            setsale_price('')
            settotal_price('')
            console.log("----------------")
            console.log(Action)
            toggleModal('modalEdit', false);
            //RESET VALOR FORMULARIO ADDUSER
            Array.from(document.querySelectorAll("input")).forEach(
               input => (input.value = "")
            );
         }).catch((error) => {
            console.log(error.toString());
         });
   }


   //  const handleSearchChangeRUC = (e) => {
   //    console.log(e.target.value)

   //    //Métodos  que filtran la información
   //    results = Users.filter((person) => 
   //       person.RUC.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
   //    )
   //    //console.log(results)
   //    //Se asigna el valor al estado Filtrados
   //    setFilterUsers(results)
   // }

   //   const filtrar=(terminoBusqueda)=>{
   //    var resultadosBusqueda=Action.filter((action)=>{
   //      if(action.sale_price.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
   //      || action.quantity.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
   //      ){
   //        return action;
   //      }
   //    });
   //    fetchAction(resultadosBusqueda);
   //  }

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
                     <div class=" bg-red-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>

                     <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">

                        <main>
                           <div class="pt-1 px-4">
                              <div class="w-full ">
                                 <section class="container mx-auto font-mono">
                                    <div class="w-full h-full mb-8 overflow-hidden rounded-lg shadow-lg">
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
                                                   <a href="#" class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Pedido</a>
                                                </div>
                                             </li>
                                             <li>
                                                <div class="flex items-center">
                                                   <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                   <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Pedidos Acciones</span>
                                                </div>
                                             </li>
                                          </ol>
                                       </nav>
                                       <div class="flex flex-col items-center justify-between px-200 py-4 bg-white dark:bg-gray-800 sm:flex-row">
                                          <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Lista de Pedidos de Acciones</a>

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
                                       {/* <div class="flex -mx-2">
                                          <button onClick={abrirmodal} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-80" type="button" data-modal-toggle="authentication-modal">
                                             Añadir pedido de acciones
                                          </button>
                                       </div> */}

                                       {/* modal */}
                                       {/* <div id="modal" aria-hidden="true" class="bg-opacity- hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                                          <div class="relative py-6 px-4 w-full max-w-md h-full md:h-auto">

                                             <div class="relative bg-white rounded-lg shadow">
                                                <div class="flex justify-end p-2">
                                                   <button onClick={cerrarmodal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                   </button>
                                                </div>
                                                <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
                                                   <h3 class="text-center text-xl font-medium text-gray-900 dark:text-white">Ingrese los nuevos datos del pedido de Accion</h3>

                                                   <div>
                                                      <input onChange={cambioOrder} value={order} type="text" name="Pedido" id="order" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   <div>
                                                      <input onChange={cambioFecha} value={created_at} type="text" name="Fecha" id="fecha" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   {/* <div className='input-file input-upload'>
                                                      <input placeholder='File' onChange={cambioVoucher} type='file' name='Voucher' id='voucher' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' required />
                                                      <img src={pathImage} alt='Image' width='150'></img>
                                                   </div> */}
                                       {/* <div>
                                                      <input onChange={cambioCantidad} value={quantity} type="text" name="Cantidad" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   <div>
                                                      <input onChange={cambioPrecio} value={sale_price} type="text" name="Precio" id="sale_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   <div>
                                                      <input onChange={cambioTotal} value={total_price} type="text" name="Total" id="total_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>

                                                   <button onClick={addAction} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir pedido de Acciones</button>

                                                </form>
                                             </div>
                                          </div>
                                       </div> */}
                                       {/* endmodal */}

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
                                                   <h3 class="text-center text-xl font-medium text-gray-900 dark:text-white">Ingrese los nuevos datos del pedido de Accion</h3>

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
                                                   <div>
                                                      <input onChange={cambioCantidad} value={quantity} type="text" name="Cantidad" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   <div>
                                                      <input onChange={cambioPrecio} value={sale_price} type="text" name="Precio" id="sale_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>
                                                   <div>
                                                      <input onChange={cambioTotal} value={total_price} type="text" name="Total" id="total_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                   </div>

                                                   <button onClick={editAction} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar pedido de accion</button>

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
                                                   {/*<th class="px-4 py-3">Voucher</th> */}
                                                   <th class="px-4 py-3">Cantidad</th>
                                                   <th class="px-4 py-3">Precio de venta</th>
                                                   <th class="px-4 py-3">Total</th>
                                                   <th class="px-4 py-3">Acciones</th>
                                                </tr>
                                             </thead>
                                             <tbody class="bg-white">
                                                {searching
                                                   ?
                                                   <>
                                                      {filterAction.map((item, i) => {
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
                                                               <td class="px-4 py-3 text-sm border">{item.quantity}</td>
                                                               <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.sale_price} </span>
                                                               </td>
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

                                                                  <button onClick={(e) => deleteAction(item.id)} class="hidden sm:inline-flex ml-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-4 py-2 text-center items-center mr-7">
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
                                                      {Action.map((item, i) => {
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
                                                               {/*<td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.voucher} </span>
                                                               </td> */}
                                                               <td class="px-4 py-3 text-sm border">{item.quantity}</td>
                                                               <td class="px-4 py-3 text-xs border">
                                                                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{item.sale_price} </span>
                                                               </td>
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

                                                                  <button onClick={(e) => deleteAction(item.id)} class="hidden sm:inline-flex ml-1 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-4 py-2 text-center items-center mr-7">
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