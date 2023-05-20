import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import loginImage from "../../Images/Log In/dr3.png";
import "./Doctor-Log-In.css";

function DoctorLogin(props) {
  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password")
  const [passwordIcon, setPasswordIcon] = useState("fa-solid fa-eye pass-eye");

  async function submitHandler(e) {
    e.preventDefault();
    try{
      const response = await axios.post(url, { email, password });
      if(response.data) {
        console.log(response);
        localStorage.setItem("userFirstName", response.data.data.doctor.firstName);
        localStorage.setItem("userLastName", response.data.data.doctor.lastName);
        localStorage.setItem("userEmail", response.data.data.doctor.email);
        // eslint-disable-next-line react/prop-types
        props.setLoggedIn(true);
      }
    }catch(e){
      console.log(e);
    }
  }

  const changeType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon("fa-solid fa-eye-slash pass-eye");
    } else {
      setPasswordType("password");
      setPasswordIcon("fa-solid fa-eye pass-eye");
    }
  };

  return (
    <>
      <div className="log-in">
        <div className="container">
          <div className="card">
            <div className="lhs">
              <img src={loginImage} alt="Healh Care" />
            </div>
            <div className="rhs">
              <h2>Welcome Back Doctor!</h2>
              <p>Login To Your Account</p>
              <form>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type={passwordType} placeholder="Password" />
                <i className={passwordIcon} onClick={changeType}></i>
                <input type="submit" value="Log In" className="clickable" onClick={submitHandler}/>
              </form>
              <Link className="clickable" to="/doctor-reg">Create Account</Link>
              <a >Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorLogin