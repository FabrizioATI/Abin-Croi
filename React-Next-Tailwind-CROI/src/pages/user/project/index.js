import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Home() {
    const [Category, fetchCategory] = useState([])
    //Get Data


    const getDataCategory = () => {
        const config = {
            headers: { Authorization: `Bearer ${document.cookie}` }
        };
        fetch('http://localhost:3001/api/v1/category', config)
          .then((res) => res.json())
          .then((res) => {
            fetchCategory(res)
          })
    }

    useEffect(() => {
        getDataCategory()
    }, [])
  

    return (
        <>
            <h1>Category</h1>
            {Category.map((item, i) => {
                            return (
                                
  
                                <div className="p-2 w-1/2 lg:w-1/4 font-medium">
                                    <div className="h-16 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden py-4">
                                      {/*Mediante el onClick llamamos a la props child que hace referencia a la funcion handleSearchChangeName y 
                                         se encarga de pasar el value que es el id, de esta vista a la principal que es project*/}
                                      <button  type="submit" value={item.name}>{item.name}</button>
                                    </div>
                                </div>
                    
                        
            )})}
        </>
    );
}
