import React from "react";

const ComoInvertir = () =>{
    const acciones = [
        {
            id: 1,
            name: 'Inversiones',
            imageSrc: 'https://www.eleconomista.com.mx/__export/1609367650942/sites/eleconomista/img/2020/12/30/inversion.jpg_105389409.jpg',
            decripcion: 'Esto es una inversion',
        },
        {
            id: 2,
            name: 'Acciones',
            imageSrc: 'https://www.eleconomista.com.mx/__export/1609367650942/sites/eleconomista/img/2020/12/30/inversion.jpg_105389409.jpg',
            decripcion: 'Esto es una accion',
        },
        {
            id: 3,
            name: 'Bonos',
            imageSrc: 'https://www.eleconomista.com.mx/__export/1609367650942/sites/eleconomista/img/2020/12/30/inversion.jpg_105389409.jpg',
            decripcion: 'Esto es un bono',
        },
        {
            id: 4,
            name: 'Prestamos',
            imageSrc: 'https://www.eleconomista.com.mx/__export/1609367650942/sites/eleconomista/img/2020/12/30/inversion.jpg_105389409.jpg',
            decripcion: 'Esto es un prestamo',
        },
        
        ];
    return(
        <div className="mt-10 bg-white-100 lg:text-center">

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black text-center">¿Como invertir?</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {acciones.map((acciones) => (
                <div key={acciones.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                    src={acciones.imageSrc}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <a >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {acciones.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{acciones.decripcion}</p>
                    </div>
                    
                </div>
                </div>
            ))}
            </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
};

export default ComoInvertir;