import React, { Component } from "react";
import Slider from "react-slick";

import card1 from "../assets/images/sliderp2.svg";

export default class Slider2 extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 1,
      speed: 500,
      // responsive: [
      //   {
      //     breakpoint: 768,
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 1
        
      //   },
      //   {
      //     breakpoint: 480,
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 1
          
      //   }
      // ]
    };
    return (
      <div>
        <Slider {...settings} className="my-[30px] p-5">
          <div>
          <div className="w-full rounded-[35px] lg:h-[475px] flex py-3 gap-4 items-end lg:w-[494px] h-full bg-no-repeat bg-cover " style={{ backgroundImage: `url(${card1})` }}>
            <div className=" px-5 text-left mb-6">
              <p className="text-[#ffffff] font-Bai-Jamjuree font-semibold text-[40px] leading-[44px]">IT Services</p>
              <p className="flex font-Mulish font-medium text-[20px] leading-[28px] tracking-[-0.01em] text-[#ffffff] mt-2">For software, web development, networking, programming, etc.</p>

            </div>
          </div>
          </div>
          <div>
          <div className="w-full rounded-[35px] lg:h-[475px] flex py-3 items-end lg:w-[494px] h-full bg-no-repeat bg-cover " style={{ backgroundImage: `url(${card1})` }}>
            <div className=" px-5 text-left mb-6">
              <p className="text-[#ffffff] font-Bai-Jamjuree font-semibold text-[40px] leading-[44px]">IT Services</p>
              <p className="flex font-Mulish font-medium text-[20px] leading-[28px] tracking-[-0.01em] text-[#ffffff] mt-2">For software, web development, networking, programming, etc.</p>

            </div>
          </div>
          </div>
          <div>
          <div className="w-full rounded-[35px] lg:h-[475px] flex py-3 items-end lg:w-[494px] h-full bg-no-repeat bg-cover " style={{ backgroundImage: `url(${card1})` }}>
            <div className=" px-5 text-left mb-6">
              <p className="text-[#ffffff] font-Bai-Jamjuree font-semibold text-[40px] leading-[44px]">IT Services</p>
              <p className="flex font-Mulish font-medium text-[20px] leading-[28px] tracking-[-0.01em] text-[#ffffff] mt-2">For software, web development, networking, programming, etc.</p>

            </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}