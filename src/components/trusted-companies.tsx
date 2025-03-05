"use client";
import { companySettings } from "@/helpers/slick-slider";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const heroImages = [
  {
    id: 1,
    src: "/smartfinder.svg",
    alt: "Fanta Orange Flavor Ad",
  },
  {
    id: 2,
    src: "/SHELLS.svg",
    alt: "Sprite Fresh Ad",
  },
  {
    id: 3,
    src: "/Zoomer.svg",
    alt: "Technology Concept Ad",
  },
  {
    id: 4,
    src: "/SHELLS.svg",
    alt: "Cosmetic Product Ad",
  },
  {
    id: 5,
    src: "/waves.svg",
    alt: "Landscape Concept Ad",
  },
  {
    id: 6,
    src: "/artvenue.svg",
    alt: "Food Product Ad",
  },
];

const TrustedCompanies = () => {
  return (
    <div className="px-4 bg-[#FAFAFA]  relative w-full  flex flex-col items-center justify-between  overflow-hidden animate-in slide-in-from-top duration-700">
      <div className="absolute inset-0 z-0  opacity-50"></div>

      <div className="relative z-10 max-w-4xl w-full text-center my-10">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-tight mb-4">
          Trusted by 1,000+ Companies
        </h1>
      </div>

      <div className="w-full  px-4 slider-container ">
        <Slider {...companySettings}>
          {heroImages.map((image) => (
            <div
              key={image.id}
              className="outline-none flex items-center justify-center h-[100px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain"
                quality={100}
                width={100}
                height={100}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrustedCompanies;
