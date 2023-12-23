import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import loginImage from "../Images/Log In/dr3.png";

function DoctorLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  async function submitHandler() {
    if (email === "") {
      toast.error("Enter Email");
    } else if (password === "") {
      toast.error("Enter Password");
    } else {
      toast.info("Attempting Login");
      await axios
      .post(url, { email, password })
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
      .catch((error) => {
        console.log(error);
        toast.error("Login Failed Enter Correct Email & Password")
      });
    }
  }

  const changeType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div className="bg-[#0cb8b6] login flex justify-center items-center px-6">
      <div className="flex items-center rounded-l-xl login-card">
        <div className="hidden md:block p-4">
          <img className=" w-[350px]" src={loginImage} alt="Healh Care" />
        </div>
        <div className="login-card text-center bg-white p-8 rounded-xl md:rounded-none md:rounded-r-xl">
          <h2 className="text-xl xl:text-2xl font-semibold w-fit mx-auto py-2 px-4 bg-[#0cb8b6] text-white rounded-xl mb-3">Welcome Back!</h2>
          <p className="text-[#212529] xl:text-lg font-medium mb-3">Login To Your Account</p>
          <div>
            <div className="mb-3">
              <input className="focus:outline-none focus:placeholder-transparent placeholder:duration-300 border-b-[2px] border-[#0cb8b6]" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
            </div>
            <div className="relative mb-3">
              <input className="focus:outline-none focus:placeholder-transparent placeholder:duration-300  border-b-[2px] border-[#0cb8b6]" onChange={(e) => setPassword(e.target.value)} type={passwordType} placeholder="Password" />
              <i className="fa-solid fa-eye absolute bottom-2 right-2 cursor-pointer" onClick={changeType}></i>
            </div>
            <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl mb-3" type="submit" onClick={submitHandler}>
              Login
            </button>
          </div>
          <Link className="block text-[#0cb8b6] text-xs mb-12" to="/doctor-reg">
            Create Account
          </Link>
          <Link className="text-[#0cb8b6] text-sm" to="/doctor-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
