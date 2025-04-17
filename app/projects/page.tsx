import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import React from 'react'

const Projects = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto py-6 sm:py-10">
        <NavBar />
      </div>

      <div></div>

      <div className="container mx-auto mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Projects