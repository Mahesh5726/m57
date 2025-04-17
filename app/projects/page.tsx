"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Carousel } from "@/components/ui/carousel";
import React from "react";

const Projects = () => {
  const slideData = [
    {
      title: "Frost & Found Bakery Web App 🍞",
      button: "Explore Project",
      src: "/Frost-and-Found.png",
      url: "https://frosted-cookie-haven.vercel.app/",
    },
    {
      title: "HackerNews Server 🌐",
      button: "Explore Project",
      src: "hacker-news.png",
      url: "https://hackernews.lemonisland-20d31e0a.centralindia.azurecontainerapps.io/ui",
    },
    {
      title: "Early Disease Detection in Potato Plant 🥔🌱",
      button: "Explore Project",
      src: "/mini.png",
      url: "https://app.box.com/s/smbxswg6e52ca6bw008rxwtvowyt673x",
    },
    {
      title: "LPG Leakage Detection 🚨",
      button: "Explore Project",
      src: "/major.jpg",
      url: "https://app.box.com/s/ngfpfvh1j7iblgrgxwhmvb1otojsxy1i",
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
