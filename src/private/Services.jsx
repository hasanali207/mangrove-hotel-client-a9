import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../assets/ig-1.jpg";
import img2 from "../assets/ig-2.jpg";
import img3 from "../assets/ig-3.jpg";

const Services = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-32 bg-gray-dark  rounded-2xl">
        <h1 className="text-black font-bold text-3xl animate__animated animate__fadeInBottomRight">
          Services
        </h1>
      </div>
      <section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
        <div className="container mx-auto space-y-12">
          <div data-aos="fade-right" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row data">
            <img src={img3} alt="" className="h-80 bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <span className="text-xs uppercase text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Wedding & Celebrations
              </h3>
              <p className="my-6 text-gray-400">
              Celebrate life's special moments at Mangrove Hotel, where timeless elegance meets unparalleled service. Whether you're planning a dream wedding, anniversary celebration, or milestone birthday party, 
              </p>
              <button type="button" className="self-start">
                View Details
              </button>
            </div>
          </div>
          <div  data-aos="zoom-in" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img data-aos="fade-right" src={img1} alt="" className="h-80 bg-gray-500 aspect-video" />
            <div data-aos="fade-left" className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <span className="text-xs uppercase text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Family-Friendly Amenities
              </h3>
              <p className="my-6 text-gray-400">
              Create lasting memories with your loved ones at Mangrove Hotel, where family-friendly amenities abound. From our kid's club and children's pool to family-friendly dining options and spacious accommodations,
              </p>
              <button type="button" className="self-start">
                View Details
              </button>
            </div>
          </div>
          <div data-aos="zoom-out" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img data-aos="fade-left" src={img2} alt="" className="h-80 bg-gray-500 aspect-video" />
            <div data-aos="fade-right" className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
              <span className="text-xs uppercase text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Pet-Friendly Accommodation
              </h3>
              <p className="my-6 text-gray-400">
              Traveling with your furry friend? Mangrove Hotel welcomes pets with open arms, offering pet-friendly accommodations and amenities to ensure a comfortable stay for both you and your four-legged companion.
              </p>
              <button type="button" className="self-start">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Services;
