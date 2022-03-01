import React, {useEffect, useState} from 'react'
import Link from 'next/link'
const Body = () => {
 
    var results = [{}]
    const handleSearchChangeName = (e) => {
        results = e.target.value
        console.log(results)
    }

     

    return (
        <body>
            <section class="md:h-full flex items-center text-gray-600">
                <div class="container px-5 py-5 mx-auto">
                    <div class="text-center mb-12">
                        <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">CROI</h1>
                        <h5 class="text-2xl md:text-4xl text-gray-400 leading-relaxed">Investment</h5>
                        <br />
                        {/* cards */}
                        <div class="flex flex-wrap -m-4">

                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" class="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div class="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 class="text-2xl font-semibold mb-3">Inversiones</h1>
                                        <p class="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div class="flex items-center flex-wrap">
                                            <a href="#" class="text-white  inline-flex items-center md:mb-2 lg:mb-0"> 
                                                <button type="submit" onClick={handleSearchChangeName} value="I">View More</button>
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" class="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div class="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 class="text-2xl font-semibold mb-3">Acciones</h1>
                                        <p class="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div class="flex items-center flex-wrap">
                                            <a href="#" class="text-white  inline-flex items-center md:mb-2 lg:mb-0"> 
                                                <button type="submit" onClick={handleSearchChangeName} value="A">View More</button>
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" class="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div class="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 class="text-2xl font-semibold mb-3">Bonos</h1>
                                        <p class="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div class="flex items-center flex-wrap">
                                            <a href="#" class="text-white  inline-flex items-center md:mb-2 lg:mb-0"> 
                                                <button type="submit" onClick={handleSearchChangeName} value="B">View More</button>
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 sm:w-1/2 lg:w-1/4">
                                <div class="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" class="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div class="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 class="text-2xl font-semibold mb-3">Prestamos</h1>
                                        <p class="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div class="flex items-center flex-wrap">
                                            <a href="#" class="text-white  inline-flex items-center md:mb-2 lg:mb-0"> 
                                                <button type="submit" onClick={handleSearchChangeName} value="L">View More</button>
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                        stroke-width="2"
                                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div class="p-4 sm:w-2/3 lg:w-2/2">
                                <div class="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <div class="py-10 item-center justify-center">
                                        <div class="bg-white rounded-lg shadow-2x1 w-4/4">
                                            <div class="flex">
                                                <div class="px-10">
                                                    <h1 class="text-3xl font-semibold mb-3">¿Como funciona?</h1>
                                                    <h2 class="text-2xl leading-relaxed mb-3">Qué es el crowdlending y crowfonding con CROI</h2>
                                                    <div class="h-full border-2 broder-black-200 border-opacity-100 rounded-lg overflow-hidden">
                                                        <h3 class="text-2xl leading-relaxed mb-3">El crowdlending y crowfonding permite a todo tipo
                                                            de personas naturales, empresas puedan financiarse directamente por un grupo grande y diverso
                                                            de personas (crowd=multitud, lending=prestar dinero), personas (crowd=multitud, fonding=fondos dinero)
                                                            sin tener que pedir el dinero bajo las condiciones de la banca tradicional.</h3>
                                                        <Link href="/nosotros">
                                                            <button class="bg-red-600 text-blue-50 rounded-lg py-2 px-4 mt-5">Get started</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* EndCards */}
                    </div >
                </div >
            </section >
            {/* About CEO */}
            <section class="md:h-full flex items-center text-gray-600">
                <div class="container px-5 py-5 mx-auto">
                    <figure class="md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                        <div class="flex flex-col items-center justify-between px-10 py-4 bg-white dark:bg-gray-800 sm:flex-row">
                            <img class="w-300 h-300 md:w-580 md:h-auto md:rounded-none rounded-full mx-auto"
                                src="https://croii.com/wp-content/uploads/2020/05/author-1-free-img.png" alt=""
                                width="390" height="530" />
                            <div class="md:p-5 text-center md:text-left space-y-4">
                                <h1 class="text-4xl md:text-6xl text-gray-600 font-semibold">Acerca del CEO</h1>
                                <h2 class="text-2xl md:text-4xl text-gray-600 font-semibold">Culpa qui officia
                                    deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.</h2>
                                <blockquote>
                                    <p class="text-lg font-medium">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                </blockquote>
                                <div class="flex items-center flex-wrap">
                                    <a href="#" class="text-gray-600  inline-flex items-center md:mb-2 lg:mb-0">View more
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </section>
            {/* EndAbout CEO */}
        </body>
    );
};
export default Body;