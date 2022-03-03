import React from "react";
import Bono from "../../../components/user/Bono";
import Footer from "../../../components/footer";
// import Header from "../../components/header";
import Sidebar from "../../../components/user/sidebaruser";
// import Profile from "../../components/user/profile";
export default function bono() {
  return (
    <div className='bg-white'>
      <Sidebar />
      <div className='flex flex-wrap mt-10 ml-96'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0'>
          <div className='text-center mb-7'>
            <h1 className='text-2xl md:text-4xl text-gray-900 leading-relaxed'>
              Mis proyectos
            </h1>
          </div>
          <Bono />
        </div>
      </div>
      <div className='mt-36'>
        <Footer />
      </div>
    </div>
  );
}