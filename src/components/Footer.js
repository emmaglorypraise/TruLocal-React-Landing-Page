import logo from "../assets/logo2.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#E98100] py-[60px] ">
        <div className="max-w-[986px] mx-auto">
        <div className="flex flex-col text-center justify-center pt-[20px] lg:pt-[2px]">
          <img src={logo} alt="logo" className="w-1/3  " />
          <p className="font-Bai-Jamjuree font-semibold text-[32px] leading-[44px] tracking-[-0.02em] text-white">We connect people looking to get their to-do list done with people looking to make extra cash.</p>
          <div className="flex justify-center my-3">
            <p className="font-Poppins font-medium text-[18px] leading-[27px] text-[#E98100] bg-[#FAEFD7] rounded-[20px] mr-3 p-3">Post Job</p>
            <p className="font-Poppins font-medium text-[18px] leading-[27px] text-[#E98100] bg-[#FAEFD7] rounded-[20px] mr-3 p-3 ">Provide a Service</p>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row">
          <p className="font-Mulish text-white ">Post a Task</p>
        </div>

        <p></p>
        </div>
      </div>
    </>
  )
}
