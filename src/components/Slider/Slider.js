import React from "react";
import sliderData from "./slider-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Slider() {
  const slider = sliderData.map((items) => {
    return (
      <div className="slider-container lg:space-x-10">
        {/* img */}
        <div className="lg:w-1/2">
          <img src={items.image} className="" alt="img" />
        </div>
        {/* texts */}
        <div className="lg:w-1/2">
          <div className="space-y-4 lg:w-[65%]">
            <h3 className="text-lg font-semibold">{items.title}</h3>
            <p className="text-md font-light pb-8">{items.content}</p>
            <Link to="/register">
              <button className="bg-[#1F66D0] font-medium text-white text-sm border-none px-4 py-1.5">
                Sign up for free
              </button>
            </Link>
            <a
              className="text-[#1F66D0] block pb-8 lg:pb-24 cursor-pointer"
              href="/about"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="py-9">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{slider[0]}</SwiperSlide>
        <SwiperSlide>{slider[1]}</SwiperSlide>
        <SwiperSlide>{slider[2]}</SwiperSlide>
        <SwiperSlide>{slider[3]}</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
