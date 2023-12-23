import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import loginImage from "../Images/Log In/dr3.png";

function PatientLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const changeType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
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
          toast.success("Login Succesful");
          console.log(res);
          localStorage.setItem("userFirstName", res.data.data.pationt.fristName);
          localStorage.setItem("pLastName", res.data.data.pationt.lastName);
          localStorage.setItem("pEmail", res.data.data.pationt.email);
          localStorage.setItem("pBloodType", res.data.data.pationt.bloodType);
          localStorage.setItem("pNationalID", res.data.data.pationt.National_ID);
          localStorage.setItem("pID", res.data.data.pationt._id);
          localStorage.setItem("pAge", res.data.data.pationt.age);
          localStorage.setItem("pGender", res.data.data.pationt.gender);
          localStorage.setItem("pImage", res.data.data.pationt.image);
          localStorage.setItem("pPhoneNumber", res.data.data.pationt.phoneNumber);
          localStorage.setItem("pHealthProblems", JSON.stringify(res.data.data.pationt.Health_problems));
          localStorage.setItem("pGenetic", JSON.stringify(res.data.data.pationt.Hereditary_diseases));
          localStorage.setItem("pSurgery", JSON.stringify(res.data.data.pationt.Surgical_operations));
          localStorage.setItem("pChronic", JSON.stringify(res.data.data.pationt.chronic_Diseases));
          localStorage.setItem("pDiagonas", JSON.stringify(res.data.data.pationt.diagonas));
          localStorage.setItem("pXray", JSON.stringify(res.data.data.pationt.x_ray));
          localStorage.setItem("pXrayDescreption", JSON.stringify(res.data.data.pationt.orgnis_report));
          setTimeout(() => {
            window.location.reload(true);
          }, 400);
          navigate("/patient-page");
        })
        .catch((error) => {
          toast.error("Login Failed Enter Correct Email & Password");
          console.log(error);
        });
    }
  }
  return (
    <div className="bg-[#0cb8b6] login flex justify-center items-center px-6">
      <div className="flex items-center rounded-l-xl login-card ">
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
          <Link className="block text-[#0cb8b6] text-xs mb-12" to="/patient-reg1">
            Create Account
          </Link>
          <Link className="text-[#0cb8b6] text-sm" to="/patient-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
