import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slide-bg.jpg";
import slide2 from "../assets/slide-bg-03.jpg";
import slide3 from "../assets/slide-bg-02.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        className="rounded-2xl"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          
          <img src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="relative lg:absolute  top-[50%] left-[50%]  -translate-x-[50%] z-10  flex justify-center items-center ">
        <div className=" text-center">
          <h1 className="text-3xl text-black font-bold">Mangrove Hotel</h1>
          <h1 className="text-3xl text-black font-bold">World Best Hospitality Services for Client</h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
