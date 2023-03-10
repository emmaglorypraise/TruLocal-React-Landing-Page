import backdrop from "../assets/images/backdrop.svg";

export default function SignUpForm() {
  return (
    <>
      <div className="bg-[#EEEEEE] pb-[90px]">
        <div className="flex flex-col md:flex-row py-[20px] lg:pt-[2px] pb-[40px]">
          <div className=" lg:ml-[30px] mx-auto px-6 md:mt-[30px] mt-[10px] text-left text-[#222222]">
            <p className="text-[#1D1D1D] font-Bai-Jamjuree font-semibold text-[18px] lg:text-[40px] leading-[55px] tracking-[-0.02em]  md:mt-[180px] mt-[20px] lg:pr-[50px] pr-[10px]">Have a question? <br></br>
              We are ready to assist</p>
            <form class="w-full max-w-lg">
              <div class="flex flex-col  py-10">
                <input class="appearance-none bg-transparent border-b border-[#AAAAAA] w-full text-[#1D1D1D] mr-3 py-4 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your email" aria-label="Full name" />
                <br></br>
                <input class="appearance-none bg-transparent border-b border-[#AAAAAA] w-full text-[#1D1D1D] mr-3 py-4 px-2 leading-tight focus:outline-none" type="text" placeholder="Type your message" aria-label="Message" /> 
              </div>
            </form>
          </div>
          <div>
            <img src={backdrop} className="max-w-full pt-[-190px] h-full" alt="header-image" />
          </div>

        </div>
      </div>
    </>
  )
}
