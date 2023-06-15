import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import loginImage from "../../Images/Log In/dr3.png";
import "./Log-In.css";

function PatientLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  const url = "https://nice-rose-yak-ring.cyclic.app/api/v1/pationts/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState("fa-solid fa-eye pass-eye");

  const changeType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon("fa-solid fa-eye-slash pass-eye");
    } else {
      setPasswordType("password");
      setPasswordIcon("fa-solid fa-eye pass-eye");
    }
  };
  async function submitHandler(e) {
    e.preventDefault();
    await axios
      .post(url, { email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userFirstName", res.data.data.pationt.fristName);
        localStorage.setItem("userLastName", res.data.data.pationt.lastName);
        localStorage.setItem("userEmail", res.data.data.pationt.email);
        localStorage.setItem("patientBloodtype", res.data.data.pationt.bloodType);
        localStorage.setItem("patientNationalID", res.data.data.pationt.National_ID);
        localStorage.setItem("patientAge", res.data.data.pationt.age);
        localStorage.setItem("patientGender", res.data.data.pationt.gender);
        localStorage.setItem("patientImg", res.data.data.pationt.image);
        localStorage.setItem("patientPhone", res.data.data.pationt.phoneNumber);
        localStorage.setItem("patientID", res.data.data.pationt._id);
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
        navigate("/patient-page");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="log-in">
        <div className="container">
          <div className="card">
            <div className="lhs">
              <img src={loginImage} alt="Healh Care" />
            </div>
            <div className="rhs">
              <h2>Welcome Back Patient!</h2>
              <p>Login To Your Account</p>
              <form>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type={passwordType} placeholder="Password" />
                <i className={passwordIcon} onClick={changeType}></i>
                <input type="submit" value="Log In" className="clickable login-button" onClick={submitHandler} />
              </form>
              <Link className="clickable" to="/patient-reg/patient-reg1">
                Create Account
              </Link>
              <a>Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientLogin;
