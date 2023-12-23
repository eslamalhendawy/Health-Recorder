import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ForgetPasswordPatient() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [National_ID, setID] = useState("");
  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/forget_pass";

  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  async function submitHandler() {
    if (email === "") {
      toast.error("Enter Email");
    } else if (National_ID === "") {
      toast.error("Enter National ID");
    } else {
      await axios
        .post(url, { email, National_ID })
        .then((res) => {
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
        .catch((e) => {
          console.log(e);
          toast.error("Incorrect Email Or National ID");
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
          <input className="focus:outline-none focus:placeholder-transparent placeholder:duration-300 border-b-[2px] border-[#0cb8b6] md:w-[70%]" type="text" placeholder="National ID" onChange={(e) => setID(e.target.value)} />
          <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl mb-3" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPatient;
