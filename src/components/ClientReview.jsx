import React from "react";
import avatarUrl from "../assets/avatar1.png";
const ClientReview = () => {
  return (
    <div className="bg-gray-dark p-6">
      <h2  className="my-8 text-4xl font-bold leading-none text-center text-black animate__animated animate__swing">
        Client Review?
      </h2>
      <div
       
        className="flex flex-col lg:flex-row justify-between items-center gap-6"
      >
        <div  data-aos="fade-right" className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
          <img
            src={avatarUrl}
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="text-lg font-semibold mb-2">MD Hasan Ali</p>
          <p className="text-gray-600 mb-4 text-center">
            {" "}
            I had an amazing experience at the Mangrove Hotel.
          </p>
          {/* You can add additional elements like star ratings, dates, etc. */}
        </div>
        <div data-aos="zoom-in" className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
          <img
            src={avatarUrl}
           
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="text-lg font-semibold mb-2">Michael Johnson</p>
          <p className="text-gray-600 mb-4 text-center">
            {" "}
            I recently stayed at the Mangrove Hotel for a business trip, and I
            was thoroughly impressed.
          </p>
          {/* You can add additional elements like star ratings, dates, etc. */}
        </div>
        <div data-aos="fade-left" className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
          <img
            src={avatarUrl}
           
            className="w-16 h-16 rounded-full mb-4"
          />
          <p className="text-lg font-semibold mb-2">John Doe</p>
          <p className="text-gray-600 mb-4 text-center">
            My stay at the Mangrove Hotel was absolutely fantastic!{" "}
          </p>
          {/* You can add additional elements like star ratings, dates, etc. */}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
