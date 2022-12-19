import logo from "../assets/logo2.svg";
const style = {
  borderTopLeftRadius: "50% 20%",
  borderTopRightRadius: "50% 20%",
  height: "100",
  backgroundImage: "#E98100",
  position: "relative",
}
export default function Footer() {
  return (
    <>
      {/* <svg className="h-[100vh] w-[100vh]" width="1440" height="587" viewBox="0 0 1440 587" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 37.6442C0 37.6442 438.689 -0.20244 725 0.000815766C1007.45 0.20133 1440 37.6442 1440 37.6442V587H0V37.6442Z" fill="#E98100" />
      </svg> */}
      <div className="bg-[#E98100] py-[100px] p-4" style={{ style }}>
        <div className="max-w-[986px] mx-auto">
          <div className="md:py-[30px] py-[10px] flex flex-col text-center justify-center place-content-center pt-[20px] lg:pt-[2px]">
            <div className="mx-auto w-[252px] py-5">
              <img src={logo} alt="logo" className="w-full  " />
            </div>
            <p className="font-Bai-Jamjuree font-semibold md:text-[32px] text-[24px] leading-[44px] tracking-[-0.02em] text-white py-[20px]">We connect people looking to get their to-do list done with people looking to make extra cash.</p>
            <div className="flex justify-center my-3">
              <p className="font-Poppins font-medium text-[18px] leading-[27px] text-[#E98100] bg-[#FAEFD7] rounded-[20px] mr-3 p-3">Post Job</p>
              <p className="font-Poppins font-medium text-[18px] leading-[27px] text-[#E98100] bg-[#FAEFD7] rounded-[20px] mr-3 p-3 ">Provide a Service</p>
            </div>
          </div>

          <div className="flex pt-4 pb-[40px] flex-col md:flex-row justify-between">
            <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Post a Task</p>
            <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Browse Jobs</p>
            <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Services</p>
            <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Find Talent</p>
            <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Contact us</p>
          </div>

          <hr className="w-[90%] mx-auto py-[40px] text-[rgba(255, 255, 255, 0.2)] "></hr>

          <div className="flex pt-[40px] pb-[10px] flex-col md:flex-row justify-between">
            <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Ⓒ 2022 Truelocal</p>
            <div className="flex flex-col md:flex-row">
              <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Privacy & Cookies</p>
              <p className="font-Mulish text-white text-[18px] font-medium leading-[22px] py-3">Terms & Conditions</p>
            </div>
          </div>


          <p></p>
        </div>
      </div>
    </>
  )
}
