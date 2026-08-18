"use client";

import React, { useState, useEffect } from "react";

const images = [
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-navy-dark">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-navy-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/40" />
    </div>
  );
};
