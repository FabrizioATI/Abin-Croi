import { useEffect, useState } from 'react'
import axios from 'axios';

//declaraciones de variables de estado para almacenar informacion
export default function Formulario() {
  const [Request, fetchRequest] = useState([])
  const [NamtePrject,setNameProejct] = useState()
  const [Description,setDescription] = useState()
  const [Direction,setDirection] = useState()
  const [FileURL,setFileURL] = useState()
  const [NameEnterprise,setNameEnterprise] = useState()
  const [Image,setImage] = useState()
  const [Video,setVideo] = useState()
  const [CategoryID,setCategoryID] = useState()
  //const [UserID,setUserID] = useState()
  const [TypeID,setTypeID] = useState()
  

  const cambioNameProject =(e) =>{
  setNameProejct(e.target.value)
  }
  const cambioDescription =(e) =>{
  setDescription(e.target.value)
  }
  const cambioAddress =(e) =>{
  setDirection(e.target.value)
  }
  const cambioFile =(e) =>{
  setFileURL(e.target.value)
  }
  const cambioImage =(e) =>{
    setImage(e.target.value)
  }
  const cambioNameEnterprise =(e) =>{
  setNameEnterprise(e.target.value)
  }
  const cambioVideo =(e) =>{
  setVideo(e.target.value)
  }
  const cambioCategory =(e) =>{
  setCategoryID(e.target.value)
  }
  const cambioType =(e) =>{
  setTypeID(e.target.value)
  } 

  var now = new Date();
  var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();

  const addRequest = async(e) => { 
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    } 
    e.preventDefault();
    let datos = {
        nameProject: NamtePrject,
        descriptionProject: Description,
        direction: Direction,
        fileURL: FileURL,
        nameEnterprise: NameEnterprise,
        imgURL: Image,
        videURL: Video,
        categoryId: 1,
        userId: 10,
        typeId: 1,
    }
    console.log(datos)
    await axios.post('http://localhost:3001/api/v1/project',datos, config)
      .then(res => {
      Request.push(datos);
      setNameProejct('')
      setDescription('')
      setAddress('')
      setImage('')
      setFile('')
      setNameEnterprise('')
      console.log("----------------")
      console.log(Request)
      //Array.from(document.getElementById("proyectForm").reset())
      //toggleModal('myModal', false);
      }).catch((error)=> {
        console.log('Salio un error');
      });
    }
  return (
    <div className="m-12 mt-16 ">
      <div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioNameProject} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NameProject</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioDescription} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioAddress} type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adress</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioFile} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">File</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioNameEnterprise} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioImage} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioVideo} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Video</label>
            </div>
            {/*<div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioCategory} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input onChange={cambioType} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
            </div>*/}
        </div>
        <button onClick={addRequest} type="submit" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </div>
    </div>
  )
}