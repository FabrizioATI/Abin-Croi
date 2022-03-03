export default function Bono() {
    return (
      <>
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
          <div className='block w-full overflow-x-auto'>
            {/* titulo de bonos */}
            <title>Mis Bonos</title>
            {/* Projects table */}
  
            <h1 class='text-2xl md:text-4xl text-gray-900 leading-relaxed'>
              Proyecto:
            </h1>
            <br />
            <div class='container' style={{ marginLeft: "3%" }}>
              <div class='row'>
                <div class='col'>
                  <a class='text-2xl md:text-2xl text-gray-900 leading-relaxed'>
                    Total de Bonos Emitidos:
                  </a>
                </div>
                <div class='col'>
                  <a
                    class='text-2xl md:text-2xl text-gray-900 leading-relaxed'
                    style={{ marginLeft: "45%" }}>
                    1000
                  </a>
                </div>
              </div>
            </div>
            <br />
            <div class='container' style={{ marginLeft: "3%" }}>
              <div class='row'>
                <div class='col'>
                  <a class='text-2xl md:text-2xl text-gray-900 leading-relaxed'>
                    Total de Bonos Restantes:
                  </a>
                </div>
                <div class='col'>
                  <a
                    class='text-2xl md:text-2xl text-gray-900 leading-relaxed'
                    style={{ marginLeft: "45%" }}>
                    350
                  </a>
                </div>
              </div>
            </div>
            <br />
            <button
              style={{ marginLeft: "45%" }}
              class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Detalles
            </button>
          </div>
        </div>
      </>
    );
  }