//Libraries
import { useEffect } from "react";

//Images
import doctor from "../Images/Home/doctor.png";
import feature1 from "../Images/Home/feature1.jpg";
import feature2 from "../Images/Home/feature2.jpg";
import feature3 from "../Images/Home/feature3.jpg";

function HomePage() {
  useEffect(() => {
    document.title = "Health Recorder";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Main Landing */}
      <div className="bg-[#0cb8b6] flex px-12 lg:px-20 py-12  justify-between items-center">
        <div className="text-white text-center sm:text-left">
          <h2 className="font-semibold text-xl lg:text-3xl mb-6">Your Health Recorder</h2>
          <p className="text-sm lg:text-lg mb-6 sm:w-[70%] xl:w-[50%]">When you register on the site, your information and the care you receive are recorded and stored in the health care record.</p>
          <p className="text-sm lg:text-lg sm:w-[70%] xl:w-[50%]">This is so people caring for you can make the best decisions about your care.</p>
        </div>
        <div className="hidden sm:block">
          <img src={doctor} className="w-[150px] md:w-[200px] xl:w-[250px]" alt="" />
        </div>
      </div>
      {/* Features */}
      <div className="container mx-auto bg-white px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-20 items-center">
        <div className="h-[450px] realtive group hover:-translate-y-4 hover:shadow-lg duration-300 text-center flex flex-col items-center space-y-5 px-8 py-12 border-[1px] border-t-4 border-t-[#0cb8b6] border-[#e6e6e6]">
          <h2 className="font-semibold text-[#212529] text-lg xl:text-2xl">Patient Advantages</h2>
          <img className="size-[180px] rounded-full" src={feature1} alt="" />
          <p className="text-[#777777] group-hover:text-[#212529] duration-300 text-sm lg:text-base xl:text-lg">Help Patients Obtain The Best Medical Care By Keeping Track Of Their Medication, Operation History And Chronic Diseases.</p>
        </div>
        <div className="h-[450px] realtive group hover:-translate-y-4 hover:shadow-lg duration-300 text-center flex flex-col items-center space-y-5 px-8 py-12 border-[1px] border-t-4 border-t-[#0cb8b6] border-[#e6e6e6]">
          <h2 className="font-semibold text-[#212529] text-lg xl:text-2xl">Doctor Advantages</h2>
          <img className="size-[180px] rounded-full" src={feature2} alt="" />
          <p className="text-[#777777] group-hover:text-[#212529] duration-300  text-sm lg:text-base xl:text-lg">Help Doctors Provide Patients With The Best Medical Care By Giving Them All The Information Needed To Reach A Correct Diagnosis</p>
        </div>
        <div className="h-[450px] realtive group hover:-translate-y-4 hover:shadow-lg duration-300 text-center flex flex-col items-center space-y-5 px-8 py-12 border-[1px] border-t-4 border-t-[#0cb8b6] border-[#e6e6e6]">
          <h2 className="font-semibold text-[#212529] text-lg xl:text-2xl">Work Mechanism</h2>
          <img className="size-[180px] rounded-full" src={feature3} alt="" />
          <p className="text-[#777777] group-hover:text-[#212529] duration-300  text-sm lg:text-base xl:text-lg">We Store Patient's Health Data And Arrange It In Easy To Understand Tables That Help Both Doctors And Patients To Keep Track Of The Patient's Health.</p>
        </div>
      </div>
      {/* About */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-24 py-24 px-12 lg:px-20 bg-[#0cb8b6] justify-between text-center text-white">
        <div className="">
          <h2 className="font-semibold text-3xl lg:text-4xl mb-3">About Us</h2>
          <p className="lg:text-lg lg:w-[70%] mx-auto">Health Recorder Is The Biggest Health Website In Egypt With More Than 20 Million Visits Every Month.</p>
        </div>
        <div className="">
          <h2 className="font-semibold text-3xl lg:text-4xl mb-3">Contact Us</h2>
          <p className="mb-3 lg:text-lg">healthrecorder@gmail.com</p>
          <div className="space-x-3 lg:text-lg">
            <a href="https://www.facebook.com/" className="hover:text-[#294d61] duration-300">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" className="hover:text-[#294d61] duration-300">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/" className="hover:text-[#294d61] duration-300">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
