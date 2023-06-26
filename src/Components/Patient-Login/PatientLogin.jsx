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

  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState("fa-solid fa-eye pass-eye");
  const [value, setValue] = useState("Log In");
  const [loadingState, setLoadingState] = useState("loading-circle");
  const [loginState, setLoginState] = useState("clickable login-button");
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrorMessage("");
    setValue("");
    setLoadingState("loading-circle loading-circle-active");
    setLoginState("clickable login-button clicked");
    await axios
      .post(url, { email, password })
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
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
        navigate("/patient-page");
      })
      .catch((error) => {
        console.log(error);
        setLoadingState("loading-circle");
        setLoginState("clickable login-button");
        setValue("Log In");
        setErrorMessage("Incorrect Email Or Password");
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
                <input type="submit" value={value} className={loginState} onClick={submitHandler} />
                <span className={loadingState}></span>
                <span className="error-message">{errorMessage}</span>
              </form>
              <Link className="clickable" to="/patient-reg1">
                Create Account
              </Link>
              <Link to="/patient-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientLogin;
