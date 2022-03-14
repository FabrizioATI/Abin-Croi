import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/Modales/modal_compra_acciones";
import ModalPrueba from "../components/Modales/modalprueba"

export default function compra_acciones() {
    return (
        <div>
            <Header />
            <div className="m-10 grid grid-cols-6">
                <div className="col-start-2">
                    <img src="https://corporacionamagi.com/wp-content/uploads/2020/02/bienesraices.jpg" className="my-10" />
                </div>
                <div className="col-span-2  ml-10 leading-loose text-xl ">
                    <h1 className="text-2xl">Proyecto Name</h1>
                    <h4 className="text-base">Por: nombreEmpresa</h4>
                    <br />
                    <h2>Cantidad de Acciones: 3000</h2>
                    <h2>Precio de venta/accion: 100</h2>
                    <h2>Acciones restantes: 1500</h2>
                    <br />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-10" type="button" data-modal-toggle="authentication-modal">
                        Comprar acciones
                    </button>
                    <Modal />
                </div>
            </div>
            <Footer />
        </div>
    );
}