import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
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

      <div className="flex justify-between">
        <div className="flex-1">Left side</div>

        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={image_url}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {estate_title}
              </a>
              <p className="text-xs text-gray-400">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  {segment_name}
                </a>
              </p>
            </div>
            <div className="text-gray-100">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex-1">
        right side
      </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Details;
