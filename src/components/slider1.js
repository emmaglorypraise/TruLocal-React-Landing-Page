import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../styles.css"

import { Pagination } from "swiper";

import map from "../assets/map.svg";

import clock from "../assets/clock.svg";

import star from "../assets/star.svg";

import arrow from "../assets/arrow-right.svg";

import card1 from "../assets/images/card1.svg";

import card2 from "../assets/images/card2.svg";

import card3 from "../assets/images/card3.svg";


export default function Slider1() {

  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 3,
          },
        }}
        // slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="pb-[60px] px-5">
          <div className="w-full px-3 pt-5 pb-1 rounded-[35px] lg:h-[465px] lg:w-[375px] h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${card1})` }}>
            <p className="font-Mulish font-medium  text-[14px] leading-[25px] text-[#222222] rounded-[50px] bg-white justify-start p-2 w-1/3 mb-[150px]">Open</p>
            <div className="bg-[white] py-3 px-5 text-left mb-6 rounded-[25px]">
              <p className="text-[#E98100] font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em]">Repairs & Maintenance</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[28px]">Fix my faucet and mixers</p>
              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={map} alt="map-icon" className="pr-4" /></span>Physical - Ketu, Lagos</p>

              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={clock} alt="clock-icon" className="pr-4" /></span>Sun, 20th Feb 2022 - Anytime</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[36px]">₦‎50,000</p>
              <div className="flex justify-between mt-3">
                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]"><span><img src={star} alt="star-icon" className="pr-1" /></span>4.0</p>

                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]">Details<span><img src={arrow} alt="arrow-right-icon" className="pr-2" /></span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-5">
          <div className="w-full px-3 pt-5 pb-1 rounded-[35px] lg:h-[465px] lg:w-[375px] h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${card2})` }}>
            <p className="font-Mulish font-medium  text-[14px] leading-[25px] text-[#222222] rounded-[50px] bg-white justify-start p-2 w-1/3 mb-[150px]">Open</p>
            <div className="bg-[white] py-3 px-5 text-left mb-6 rounded-[25px]">
              <p className="text-[#E98100] font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em]">IT Services</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[28px]">Landing page for my product</p>
              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={map} alt="map-icon" className="pr-4" /></span>Remote</p>

              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={clock} alt="clock-icon" className="pr-4" /></span>Flexible</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[36px]">No budget yet</p>
              <div className="flex justify-between mt-3">
                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]"><span><img src={star} alt="star-icon" className="pr-1" /></span>4.0</p>

                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]">Details<span><img src={arrow} alt="arrow-right-icon" className="pr-2" /></span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-5">
          <div className="w-full px-3 pt-5 pb-1 rounded-[35px] lg:h-[465px] lg:w-[375px] h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${card3})` }}>
            <p className="font-Mulish font-medium  text-[14px] leading-[25px] text-white rounded-[50px] bg-[#E98100] justify-start p-2 w-1/3 mb-[150px]">Engaged</p>
            <div className="bg-[white] py-3 px-5 text-left mb-6 rounded-[25px]">
              <p className="text-[#E98100] font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em]">IT Services</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[28px]">Experienced toyota mechanic</p>
              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={map} alt="map-icon" className="pr-4" /></span>Physical - VI, Lagos</p>

              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={clock} alt="clock-icon" className="pr-4" /></span>Sun, 20th Feb 2022 - Anytime</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[36px]">No budget yet</p>
              <div className="flex justify-between mt-3">
                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]"><span><img src={star} alt="star-icon" className="pr-1" /></span>4.0</p>

                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]">Details<span><img src={arrow} alt="arrow-right-icon" className="pr-2" /></span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-5">
          <div className="w-full px-3 pt-5 pb-1 rounded-[35px] lg:h-[465px] lg:w-[375px] h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${card1})` }}>
            <p className="font-Mulish font-medium  text-[14px] leading-[25px] text-[#222222] rounded-[50px] bg-white justify-start p-2 w-1/3 mb-[150px]">Open</p>
            <div className="bg-[white] py-3 px-5 text-left mb-6 rounded-[25px]">
              <p className="text-[#E98100] font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em]">IT Services</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[28px]">
                Happy Ending Massage</p>
              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={map} alt="map-icon" className="pr-4" /></span>Physical - VI, Lagos</p>

              <p className="flex font-Mulish font-medium text-[14px] leading-[25px] tracking-[-0.01em] text-[#444444] mt-2"><span><img src={clock} alt="clock-icon" className="pr-4" /></span>Sun, 20th Feb 2022 - Anytime</p>
              <p className="text-[#444444] font-Bai-Jamjuree font-semibold text-[20px] leading-[36px]">No budget yet</p>
              <div className="flex justify-between mt-3">
                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]"><span><img src={star} alt="star-icon" className="pr-1" /></span>4.0</p>

                <p className="flex text-[#E98100] font-Mulish font-normal text-[14px] leading-[18px] tracking-[-0.01em]">Details<span><img src={arrow} alt="arrow-right-icon" className="pr-2" /></span></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="my-4 text-center font-Poppins font-medium text-[18px] leading-[27px] tracking-[-0.02em] text-white bg-[#E98100] py-5 px-7  rounded-[20px]">Post your own task</button>
    </>
  );
}