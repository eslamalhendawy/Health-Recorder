import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ForgetPasswordDoctor() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors/forget_pass";

  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  async function submitHandler() {
    if (email === "") {
      toast.error("Enter Email");
    } else if (phoneNumber === "") {
      toast.error("Enter Phone Number");
    } else {
      await axios
        .post(url, { email, phoneNumber })
        .then((res) => {
          localStorage.setItem("userFirstName", res.data.data.doctor.firstName);
          localStorage.setItem("userLastName", res.data.data.doctor.lastName);
          localStorage.setItem("userEmail", res.data.data.doctor.email);
          localStorage.setItem("doctorDepartment", res.data.data.doctor.department);
          localStorage.setItem("doctorPhone", res.data.data.doctor.phoneNumber);
          localStorage.setItem("doctorAddress", res.data.data.doctor.address);
          localStorage.setItem("doctorImage", res.data.data.doctor.image);
          localStorage.setItem("doctorID", res.data.data.doctor._id);
          localStorage.setItem("patientList", JSON.stringify(res.data.data.doctor.pId));
          setTimeout(() => {
            window.location.reload(true);
          }, 400);
          navigate("/doctor-page");
        })
        .catch((e) => {
          console.log(e);
          toast.error("Incorrect Email Or Phone Number");
        });
    }
  }

  return (
    <div className="bg-[#0cb8b6] login flex justify-center items-center px-6">
      <div className="bg-white px-3 py-6 rounded-lg">
        <h2 className="text-center bg-[#0cb8b6] w-fit mx-auto text-white py-2 px-4 rounded-xl font-semibold text-lg lg:text-2xl mb-3">Retrieve Password</h2>
        <p className="text-[#212529] text-center mb-3 font-medium lg:text-lg md:w-[70%] md:mx-auto">Enter The Following Data To Login And Change Your Password</p>
        <div className="flex flex-col items-center justify-center space-y-6">
          <input className="focus:outline-none focus:placeholder-transparent placeholder:duration-300 border-b-[2px] border-[#0cb8b6] md:w-[70%]" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input className="focus:outline-none focus:placeholder-transparent placeholder:duration-300 border-b-[2px] border-[#0cb8b6] md:w-[70%]" type="text" placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} />
          <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl mb-3" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordDoctor;
