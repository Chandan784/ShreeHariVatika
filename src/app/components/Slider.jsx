"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Slider = () => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs for the slider
  const images = [
    "https://media.gettyimages.com/id/114907650/photo/procession-of-naga-sadhus-at-kumbh-fair.jpg?s=612x612&w=0&k=20&c=PSoL1mz6ysKj0rVAEerYaGzCSLu2RT2psbr9Ajq_2Sw=",
    "https://media.gettyimages.com/id/2188722520/photo/prayagraj-india-the-state-govt-is-setting-up-a-luxury-tent-city-with-more-than-2-000-swiss.jpg?s=612x612&w=0&k=20&c=RSCC9m17do0Fqc5hLQ2rdp-fDcQfa4tcATLzKNPAxS4=",
    "https://media.gettyimages.com/id/2188722879/photo/prayagraj-india-vip-bamboo-cottage-set-up-near-arail-tent-city-for-the-upcoming-maha-kumbh.jpg?s=612x612&w=0&k=20&c=gXPp25sqz6XOO_daTCNMr3IxwHEFe9mErZtvMPImIpE=",
    "https://media.gettyimages.com/id/1246407286/photo/prayagraj-india-hindu-devotees-gather-to-take-a-holy-dip-at-the-sangam-the-confluence-of-the.jpg?s=612x612&w=0&k=20&c=CBlJAIEN7QjCSRDrjVLj4IeGB4A5c0uET7m-OKg-5IY=",
    " https://media.gettyimages.com/id/1246407247/photo/prayagraj-india-hindu-devotees-gather-cross-pontoon-bridge-over-the-ganga-river-take-a-holy.jpg?s=612x612&w=0&k=20&c=roJ4mEy_x8bNl2oMnV3eK207jJ1L2rCLUdnYdgFn19c=",
    "https://media.gettyimages.com/id/2191811042/photo/a-sadhu-or-hindu-holy-man-gestures-during-a-religious-procession-of-the-niranjani-akhara.jpg?s=612x612&w=0&k=20&c=LRy6grV18ZMYy8WC42CL8VFSzvMM4h5RrABook5X-t8=",
  ];

  // Auto-slide functionality using useEffect and setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
      {/* Slider Image */}
      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black opacity-50"></div>

      {/* Slider Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
        onClick={nextSlide}
      >
        &#8250;
      </button>

      {/* Optional: Call-to-Action */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Luxury Stays</h1>
        <p className="text-lg mb-6">Book your stay with ease and comfort.</p>
      </div>
    </div>
  );
};

export default Slider;
