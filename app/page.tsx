import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
const RootPage = () => {
  return (
    <>
      <div className="flex flex-col items-stretch">
        <div className="container p-75 mx-auto sticky py-6">
          <NavBar />
        </div>
        <div className="bg-red-500 h-48"></div>
        <div className="container p-75 mx-auto sticky py-6">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default RootPage