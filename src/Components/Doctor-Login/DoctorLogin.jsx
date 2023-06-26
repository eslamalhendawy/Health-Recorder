import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import loginImage from "../../Images/Log In/dr3.png";

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
  const [passwordIcon, setPasswordIcon] = useState("fa-solid fa-eye pass-eye");
  const [value, setValue] = useState("Log In");
  const [loadingState, setLoadingState] = useState("loading-circle");
  const [loginState, setLoginState] = useState("clickable login-button");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    setErrorMessage("");
    setValue("");
    setLoadingState("loading-circle loading-circle-active");
    setLoginState("clickable login-button clicked");
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
        setLoadingState("loading-circle");
        setLoginState("clickable login-button");
        setValue("Log In");
        setErrorMessage("Incorrect Email Or Password");
      });
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
                <input type="submit" value={value} className={loginState} onClick={submitHandler} />
                <span className={loadingState}></span>
                <span className="error-message">{errorMessage}</span>
              </form>
              <Link className="clickable" to="/doctor-reg">
                Create Account
              </Link>
              <Link to="/doctor-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorLogin;
