"use client";
import { settings } from "@/helpers/slick-slider";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const heroImages = [
  {
    id: 1,
    src: "/fanta-ad.png",
    alt: "Fanta Orange Flavor Ad",
  },
  {
    id: 2,
    src: "/sprite-ad.png",
    alt: "Sprite Fresh Ad",
  },
  {
    id: 3,
    src: "/tech-ad.png",
    alt: "Technology Concept Ad",
  },
  {
    id: 4,
    src: "/cosmetic-ad.png",
    alt: "Cosmetic Product Ad",
  },
  {
    id: 5,
    src: "/landscape-ad.png",
    alt: "Landscape Concept Ad",
  },
  {
    id: 6,
    src: "/cokead.png",
    alt: "Food Product Ad",
  },
];

const HeroSection = () => {
  return (
    <div
      className="  p-6 bg-cover bg-center bg-no-repeat relative w-full min-h-[800px] flex flex-col items-center justify-between  overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.svg')",
        backgroundColor: "#FAFAFA",
        backgroundBlendMode: "multiply",
        minHeight: "200px",
      }}
    >
      <div className="absolute inset-0 z-0  opacity-50"></div>

      <div className="relative z-10 max-w-4xl w-full px-4 mt-20 text-center mb-14 animate-in fade-in zoom-in duration-700">
        <h1 className="text-4xl md:text-5xl font-medium text-[#5F5F5F] tracking-tight mb-4">
          Generate High-converting, Smarter Adverts in minutes
          <span className="text-[#520052] ml-2">with AI</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Create compelling, high-converting ads to maximize ROI
        </p>
        <button className="bg-[#B800B8] cursor-pointer text-white px-6 py-3 rounded-sm hover:bg-purple-700 transition-colors animate-in delay-150 duration-300">
          Generate New Ad →
        </button>
      </div>

      <div className="w-full  px-4 slider-container -mb-8 mt-10">
        <Slider {...settings}>
          {heroImages.map((image) => (
            <div
              key={image.id}
              className="outline-none flex items-center justify-center h-[450px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain"
                quality={100}
                width={1000}
                height={500}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
