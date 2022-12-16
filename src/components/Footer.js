import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#E98100]">
        <div className="flex items-center pt-[20px] lg:pt-[2px]">
          <img src={logo} alt="logo" />
          <p className="font-Bai-Jamjuree font-semibold text-[32px] leading-[44px] tracking-[-0.02em] text-white">We connect people looking to get their to-do list done with people looking to make extra cash.</p>
          <div className="flex justify-center">
            <p className="font-Poppins font-medium text-[18px] leading-[27px] text-[#E98100] bg-[#FAEFD7] rounded-[20px] mr-3">Post Job</p>
            <p className="font-Poppins font-medium text-[18px] leading-[27px] text-[#E98100] bg-[#FAEFD7] rounded-[20px] mr-3">Provide a Service</p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row">
          <p className="font-Mulish text-white ">Post a Task</p>
        </div>
      </div>
    </>
  )
}
