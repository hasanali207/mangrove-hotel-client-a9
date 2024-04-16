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
    <div className="z-0">
      <Swiper
        className="rounded-2xl"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay 
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
     
    </div>
  );
};

export default Slider;
