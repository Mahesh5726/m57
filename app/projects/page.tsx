"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Carousel } from "@/components/ui/carousel";
import React from "react";

const Projects = () => {
  const slideData = [
    {
      title: "Early Disease Detection in Potato Plant 🥔🌱",
      button: "Explore Project",
      src: "https://images.unsplash.com/photo-1616582548093-74854ef7b9b2?q=80&w=1500&auto=format&fit=crop",
      url: "/projects/potato-disease-detection",
    },
    {
      title: "HackerNews Server 🌐",
      button: "Explore Project",
      src: "https://images.unsplash.com/photo-1506748686217-c3dbb33c91b2?q=80&w=1500&auto=format&fit=crop",
      url: "/projects/hackernews-server",
    },
    {
      title: "LPG Leakage Detection 🚨",
      button: "Explore Project",
      src: "https://images.unsplash.com/photo-1574169216264-d1fa8f43e5a6?q=80&w=1500&auto=format&fit=crop",
      url: "/projects/lpg-leakage-detection",
    },
    {
      title: "Frost & Found Bakery Web App 🍞",
      button: "Explore Project",
      src: "/Frost-and-Found.png",
      url: "https://frosted-cookie-haven.vercel.app/",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8 lg:py-10">
        <NavBar />
      </div>
      <div className="relative overflow-hidden w-full h-full py-20 sm:py-12 md:py-16 lg:py-0 lg:pb-22">
        <div className="max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] mx-auto">
          <Carousel slides={slideData} />
        </div>
      </div>
      <div className="container mx-auto mt-auto px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
