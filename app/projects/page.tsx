"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import { Grid } from "@radix-ui/themes";

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
      src: "/hacker-news.png",
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
        <div className="container mx-auto px-4">
          <Grid columns={{ initial: "1", md: "2" }} gap="4">
            {slideData.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col items-center border p-4 text-center rounded-lg"
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-2 text-center">
                  {slide.title}
                </h3>
                <a
                  href={slide.url}
                  target="_blank"
                  className="mt-2 text-blue-500 hover:underline text-center"
                >
                  {slide.button}
                </a>
              </div>
            ))}
          </Grid>
        </div>
      </div>
      <div className="container mx-auto mt-auto px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
