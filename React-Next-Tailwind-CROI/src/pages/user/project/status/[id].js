import React, {useEffect, useState} from 'react'
import Footer from '../../../../components/footer';
import Header from '../../../../components/header';
import dynamic from 'next/dynamic'

export default function DetailsProject(){

      /*Se crean las variables de estado que se usaran*/
  const [Project, fetchProject] = useState([])



  const getData = () => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    };
    fetch('http://localhost:3001/api/v1/project', config)
      .then((res) => res.json())
      .then((res) => {
        fetchProject(res)
      })
  }



  useEffect(() => {
    getData()
  }, [])

    return(
    <>  
        <Header />
        <div className="flex h-auto flex-wrap mx-10 mb-14 mt-8">
        {Project.map((item, i) => {
                            return (
                                    <>
                                    <div className="w-full lg:w-2/5 shadow-2xl">
            <img src={item.imgURL} className="w-full 2xl:w-5/6 inset-0 object-cover object-center rounded-md lg:rounded-lg shadow-2xl lg:block h-96 lg:h-full" />
            </div>

            <div id="profile" className="w-full lg:w-3/5">
                <div className="p-4 md:p-12 text-center lg:text-left">
                    <h1 className="text-3xl font-bold pt-8 lg:pt-0">{item.nameProject}</h1>
                    <div className="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p className="pt-4 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                        <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/>
                        </svg>{item.direction}</p>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 line-clamp-4">
                      {item.descriptionProject}
                    </p>
                    <div className="pt-12 pb-8">
                        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                        Get In Touch
                        </button> 
                    </div>
                </div>
            </div>
                                    </>
                            )})}

        </div>
        <Footer />
    </>
    )
}

