import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
const Details = () => {
  const items = useLoaderData();
  const { id } = useParams();
  const item = items.find((item) => item.id == id);

  const {
    image_url,
    price,
    estate_title,
    segment_name,
    description,
    facilities,
    location,
    Area,
    Status,
  } = item;

  return (
    <>
      <Navbar></Navbar>

      <div className="flex flex-col lg:flex-row justify-between">
       <div className="flex lg:flex-row flex-col-reverse justify-between">
       <div data-aos="fade-right"  className="w-full lg:w-[200px]">
          <LeftSidebar></LeftSidebar>
        </div>

        <div data-aos="zoom-in"  className="max-w-3xl px-6 py-16 mx-auto space-y-12">
          <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
            <div className="space-y-6">
              <h1 className="text-3xl text-black font-bold md:tracking-tight md:text-4xl">
                {estate_title}
              </h1>
              <div className="flex flex-col lg:flex-row gap-5">
                <figure>
                  <img data-aos="fade-up"  src={image_url} alt="" />
                  <h2 className="text-xl mt-3">{segment_name}</h2>
                </figure>
                <div data-aos="fade-left" >
                  <h2 className="text-lg mb-2 text-black">Price: {price}</h2>
                  <h2 className="text-lg mb-2 text-black">
                    Location: {location}
                  </h2>
                  <h2 className="text-lg mb-2 text-black">Area: {Area}</h2>
                  <h2 className="text-lg mb-2 text-black">Status: {Status}</h2>
                </div>
              </div>
            </div>
            <div className="dark:text-gray-800">
              <p>{description}</p>
            </div>
          </article>
          <div>
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
              {facilities.map((item, index) => (
                <a
                  key={index}
                  rel="noopener noreferrer"
                  href="#"
                  className=" bg-blue rounded-lg px-3 py-1 text-white hover:underline dark:bg-violet-600 dark:text-gray-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
       </div>

        <div data-aos="fade-left" className="w-full lg:w-[200px] p-4">
          <RightSidebar></RightSidebar>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Details;
