// import img from "../assets/header-img.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";

import stars from "../assets/stars.svg";
import img from "../assets/images/header-img2.svg";

import hand from "../assets/images/hand.svg";

import person1 from "../assets/images/person1.svg";

import person2 from "../assets/images/person2.svg";

import person3 from "../assets/images/person1.svg";

import person4 from "../assets/images/person2.svg";
import Slider1 from "./slider1"

export default function Workers() {
  return (
    <>
      <div className="bg-[#EEE4D7]">
        <h1 className="lg:pt-[120px] pt-[60px] pb-10 text-[#222222] text-center font-Bai-Jamjuree font-semibold text-[36px] leading-[40px] tracking-[-0.02em]">See what  <span className="text-[#E98100]">people </span>are getting done</h1>
        <Slider1 />
        <div className="flex flex-col md:flex-row mt-[20px] lg:mt-[50px]">
          <div className="max-w-[570px] lg:ml-[30px] mx-auto px-6 text-left text-[#222222]">
            <h1 className="lg:mt-[120px] mt-[60px] font-Bai-Jamjuree font-semibold text-[48px] leading-[53px] tracking-[-0.03em]">Become a Service Provider and start <span className="text-[#E98100]">earning </span> today!</h1>
            <p className="font-Mulish font-normal text-[18px] lg:text-[20px] leading-[36px] tracking-[-0.015em]  mt-[20px] lg:pr-[50px] pr-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
            <button className="my-6 text-center font-Poppins font-medium text-[18px] leading-[27px] text-white bg-[#E98100] py-5 px-7  rounded-[20px]">Start Earning</button>
          </div>
          <div>
            <img src={img} className="max-w-full mt-[30px] h-full" alt="header-image" />
          </div>

        </div>
      </div>
      <div className="bg-[#EEEEEE] py-[70px] p-[20px]">
        <div className="bg-[#ffffff] max-w-[982px] w-full h-full max-h-[410px] mx-auto px-10  text-left rounded-[36px] flex justify-between flex-col md:flex-row mt-[50px]">
          <div className="md:py-[30px] py-[15px]">
            <p className="text-[#222222] font-Bai-Jamjuree font-semibold text-[22px] md:text-[48px]  md:leading-[59px] leading-[29px] tracking-[-0.03em] my-4">Try the mobile App</p>
            <p className="text-[#3B3D3B] font-Mulish font-normal text-[20px] lg:text-[20px] leading-[31px] tracking-[-0.015em]">TrueLocal is available on Andriod and Iphones,<br></br> download to have it at your fingertip.</p>
            <div className="flex justify-start flex-col md:flex-row">
              <div className="mt-2 md:mt-10 flex flex-row bg-[#E98100] border border-[rgba(255, 255, 255, 0.2)] rounded-[24px] md:w-2/3 w-full text-center justify-center p-2 mr-3">
                <img src={apple} alt="apple-icon" className="pr-2" />
                <div className="flex-col flex">
                  <p className="text-[#FAEFD7] font-Mulish font-normal text-[14px] lg:text-[14px] leading-[18px] tracking-[-0.02em]">Available on</p>
                  <p className="text-[#FFFFFF] font-Mulish font-normal text-[16px] lg:text-[16px] leading-[24px] tracking-[-0.02em]">App Store</p>
                </div>
              </div>
              <div className="mt-2 md:mt-10 flex md:flex-row  bg-[#E98100] border border-[rgba(255, 255, 255, 0.2)] rounded-[24px] md:w-2/3 w-full text-center justify-center p-2 mr-3">
                <img src={google} alt="apple-icon" className="mr-3" />
                <div className="flex-col flex">
                  <p className="text-[#FAEFD7] font-Mulish font-normal text-[14px] lg:text-[14px] leading-[18px] tracking-[-0.02em]">Available on</p>
                  <p className="text-[#FFFFFF] font-Mulish font-normal text-[16px] lg:text-[16px] leading-[24px] tracking-[-0.02em]">Google Play</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={hand} alt="hand holding phone" className="mt-[-90px] pt-[30px] invisible md:visible" />
          </div>
        </div>

        <div>
          <h1 className="lg:pt-[120px] pt-[60px] pb-10 text-[#222222] text-center font-Bai-Jamjuree font-semibold text-[48px] leading-[53px] tracking-[-0.02em]">Our Customers love what we do.</h1>
          <div className="grid grid-col-3 grid-flow-row gap-4 text-left max-w-[1200px] w-full mx-auto h-full ">
            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-1 row-end-2 ">
              <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person1} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Eze Chinedu</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>
            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-1 row-end-4 ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person1} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Jibike Alarape</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>
            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-1  row-end-1 ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person1} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Eze Chinedu</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>

            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-2 row-span-4 ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person1} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Damilare Usman</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>
            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-4 row-span-2 ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person1} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Nneka Chukwu</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>
            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-3 row-span-3 ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person1} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Adebanji Bolaji</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>

            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-6 row-span-1 ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person2} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Adegboyoga Precious</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>
            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-6 row-span-1 invisible ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person3} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">Nneka Chukwu</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>

            <div className="bg-white rounded-[24px] max-w-[375px] w-full p-5 mr-2 col-span-2 row-start-6 row-span-1 ...">
            <div>
                <div className="flex pb-[60px] lg:pb-0">
                  <img className="pr-1 lg:pr-4 pt-4" src={person4} alt="person" />
                  <p className="font-Bai-Jamjuree font-medium text-[20px] pt-6 leading-[22px] text-[#000000]">VIctor Adebisi</p>
                </div>

                <img className="pr-1 lg:pr-4 pt-4" src={stars} alt="stars" />
                <p className="font-Mulish font-normal text-[16px] pt-6 leading-[29px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
              </div>
            </div>

          </div>

        </div>
      </div>


    </>
  )
}
