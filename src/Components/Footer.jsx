import logo from "../Images/Home/logo.png"

function Footer() {
  return (
        <div className="bg-[#212121] text-white flex flex-col justify-center items-center p-12">
          <div className="flex justify-center items-center">
            <img src={logo} className="w-[50px] lg:w-[70px]" alt="" />
            <h1 className="text-xl text-center font-semibold">Health Recorder</h1>
          </div>
          <p className="text-sm md:text-base text-center">Copyright ©2023 health recorder. <br /> All rights reserved.</p>
        </div>
  )
}

export default Footer