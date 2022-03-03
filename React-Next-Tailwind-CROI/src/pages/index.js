import React, { useEffect, useState } from 'react'
import axios from "axios";
import Footer from '../components/footer';
import Body from '../components/body';
import Header from '../components/header';
import Link from 'next/link'

export default function Home() {
    //Get Data

    const getData = () => {
        const config = {
            headers: { Authorization: `Bearer ${document.cookie}` }
        };
        fetch('http://localhost:3001/api/v1/category', config)
            .then((res) => res.json())
            .then((res) => {
                fetchCateory(res)
                console.log(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <div>
            <div className="relative">
                <Header />
            </div>
            <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 pb-5 pt-24 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">CROI</h1>
                        <h5 class="text-2xl md:text-4xl text-gray-400 leading-relaxed">Investment</h5>
                        <br />
                        {/* cards */}
                        <div className="flex flex-wrap -m-4">

                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Inversiones</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            {/*<Link href={{
                                                pathname: "/Project",
                                                query: { financing: "INVESTMENT" },
                                            }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </Link>*/}
                                            <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Acciones</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            {/*<Link href={{
                                                pathname: "/Project",
                                                query: { financing: "ACTION" },
                                            }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </Link>*/}
                                            <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Bonos</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            {/*<Link href={{
                                                pathname: "/Project",
                                                query: { financing: "BOND" },
                                            }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </Link>*/}
                                            <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Prestamos</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            {/*<Link href={{
                                                pathname: "/Project",
                                                query: { financing: "LOANS" },
                                            }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </Link>*/}
                                            <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:w-2/3 lg:w-2/2">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <div className="py-10 item-center justify-center">
                                        <div className="bg-white rounded-lg shadow-2x1 w-4/4">
                                            <div className="flex">
                                                <div className="px-10">
                                                    <h1 className="text-3xl font-semibold mb-3">¿Como funciona?</h1>
                                                    <h2 className="text-2xl leading-relaxed mb-3">Qué es el crowdlending y crowfonding con CROI</h2>
                                                    <div className="h-full border-2 broder-black-200 border-opacity-100 rounded-lg overflow-hidden">
                                                        <h3 className="text-2xl leading-relaxed mb-3">El crowdlending y crowfonding permite a todo tipo
                                                            de personas naturales, empresas puedan financiarse directamente por un grupo grande y diverso
                                                            de personas (crowd=multitud, lending=prestar dinero), personas (crowd=multitud, fonding=fondos dinero)
                                                            sin tener que pedir el dinero bajo las condiciones de la banca tradicional.</h3>
                                                        <Link href="/nosotros">
                                                            <button className="bg-red-600 text-blue-50 rounded-lg py-2 px-4 mt-5">Get started</button>
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
            {/* EndAbout CEO */}

            <Footer />
        </div>
    );
}



{/*<form>
            <div>
                <label >Email</label>
                <input onChange={cambioEmail} type="text" />
            </div>
            <div >
                <label  >Password</label>
                <input onChange={cambioPassword} />
            </div>
            <div>
                <a href="#" classNameName="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
            </div>
            <button onClick={login} >Sign In</button>
        </form>*/}