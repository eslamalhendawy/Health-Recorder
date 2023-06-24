import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./ForgetPasswordDoctor.css";

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
      });
  }

  return (
    <div className="forgot-password">
      <div className="password-container">
        <div className="password-card">
          <h2>Retrieve Password</h2>
          <p>Enter The Following Data To Login And Change Your Password</p>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} />
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordDoctor;
