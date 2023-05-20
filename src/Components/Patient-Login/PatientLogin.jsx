import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import loginImage from "../../Images/Log In/dr3.png";
import "./Log-In.css";

function PatientLogin() {
  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/login";

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
    try {
      const response = await axios.post(url, { email, password });
      if(response.data) {
        console.log(response);
        localStorage.setItem("userFirstName", response.data.data.pationt.fristName);
        localStorage.setItem("userLastName", response.data.data.pationt.lastName);
        localStorage.setItem("userEmail", response.data.data.pationt.email);
      }
    } catch (e) {
      console.log(e);
    }
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
              <h2>Welcome Back Patient !</h2>
              <p>Login To Your Account</p>
              <form>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type={passwordType} placeholder="Password" />
                <i className={passwordIcon} onClick={changeType}></i>
                <input type="submit" value="Log In" className="clickable" onClick={submitHandler} />
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
