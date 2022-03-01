import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Home() {
    const [Login, fetchLogin] = useState([])
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [Category, fetchCateory] = useState([])
  
    const cambioEmail = (e) => {
        setEmail(e.target.value)
     }

     const cambioPassword = (e) => {
        setPassword(e.target.value)
     }

    const login = (e) => {
            e.preventDefault();
            let datos = {
                email: email,
                password: password
            }
    axios.post('http://localhost:3001/api/v1/auth/login', datos)
        .then(res => {
            Login.push(res.data);
            setEmail('')
            setPassword('')
            console.log("----------------")
            console.log(Login)
            console.log(res)
            console.log(res.data.token)
            document.cookie = `${res.data.token}; max-age=${60 * 1}; path=/; samesite=strict`
            console.log(document.cookie)
        }).catch((error) => {
            console.log(error.toString());
        });
    }

    
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

        <body className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <header className="max-w-lg mx-auto">
                <a href="#">
                    <h1 className="text-4xl font-bold text-white text-center">Startup</h1>
                </a>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to Startup</h3>
                    <p className="text-gray-600 pt-2">Sign in to your account.</p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col" method="POST" action="#">
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Email</label>
                            <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Password</label>
                            <input type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div className="flex justify-end">
                            <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
                    </form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">Don't have an account? <a href="#" className="font-bold hover:underline">Sign up</a>.</p>
            </div>

            <footer className="max-w-lg mx-auto flex justify-center text-white">
                <a href="#" className="hover:underline">Contact</a>
                <span className="mx-3">•</span>
                <a href="#" className="hover:underline">Privacy</a>
            </footer>
        </body>
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