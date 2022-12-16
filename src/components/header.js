import img from "../assets/header-img.svg";
import email from "../assets/email-icon.svg";
import play from "../assets/play-icon.svg";

export default function Header() {
  return (
    <div className="bg-[#EEEEEE]">
      <div className="flex flex-col md:flex-row">
        <div className="max-w-[570px] lg:ml-[30px] mx-auto px-6 text-left text-[#222222]">
          <h1 className="lg:mt-[120px] mt-[60px] font-Bai-Jamjuree font-medium text-[46px] leading-[46px] tracking-[-0.03em]">Get <span className="text-[#E98100]">Plumbing</span> done on your own terms</h1>
          <p className="font-Poppins font-normal text-[18px] lg:text-[20px] leading-[36px] tracking-[-0.02em]  mt-[20px] lg:pr-[50px] pr-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui convallis fusce nulla tincidunt sem iaculis. Amet velit etiam nisi.</p>
          <form class=" w-full my-[20px] shadow-[0px 30px 30px rgba(131, 9, 0, 0.05)] max-w-lg">
            <div class="flex items-center font-Poppins lg:text-[18px] text-[12px] leading-[27px] bg-white p-3 rounded-[25px] mt-[30px] py-2">
              <img className="p-1 lg:p-4" src={email} alt="email icon" />
              <input class="appearance-none bg-transparent border-none w-full text-[#777777] mr-1 lg:mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your email address" aria-label="Full name" />
              <button class="flex-shrink-0  bg-[#E98100] hover:bg-[#E98100] hover:border-[#E98100] text-normal  text-white py-[10px] px-[25px] lg:py-[21px] lg:px-[35px] rounded-[20px]" type="button">
                Get Started
              </button>
            </div>
          </form>
          <div className="flex pb-[60px] lg:pb-0">
            <img className="pr-1 lg:pr-4 pt-4" src={play} alt="video play icon" />
            <p className="font-Mulish font-bold text-[16px] pt-6 leading-[20px] text-[#444444]">See how it works</p>
          </div>

        </div>
        <div>
          <img src={img} className="max-w-full" alt="header-image" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:ml-[30px] px-6 py-[55px] text-left">
        <p className="font-Inter font-medium text-[20px]  leading-[36px] text-[#E98100] mr-8 pb-4 lg:pb-0 lg:pt-4">Everything is easy!</p>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex place-items-center py-2"><span className="font-Bia-Jamjuree font-medium text-[20px] text-white bg-[#E98100] leading-[22px] rounded-full px-5 py-4  mx-0 lg:mx-4">1</span><p className="pl-2 font-Inter font-normal text-[#222222] text-[16px] leading-[29px] pr-4">Post a Task</p> </div>
          <div className="flex place-items-center py-2"><span className="font-Bia-Jamjuree font-medium text-[20px] text-white bg-[#E98100] leading-[22px] rounded-full px-5 py-4 mx-0 lg:mx-4">2</span><p className="pl-2 font-Inter font-normal text-[#222222] text-[16px] leading-[29px] pr-4">Set your budget or not</p> </div>
          <div className="flex place-items-center py-2"><span className="font-Bia-Jamjuree font-medium text-[20px] text-white bg-[#E98100] leading-[22px] rounded-full px-5 py-4  mx-0 lg:mx-4">3  </span><p className="pl-2 font-Inter font-normal text-[#222222] text-[16px] leading-[29px] pr-4">Receive quotes & pick the best provider</p> </div>

        </div>
      </div>
    </div>
  )
}
