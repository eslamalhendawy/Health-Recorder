import { useState, useEffect } from "react";
import "./DoctorReg.css";
import "../PatientReg/PatientReg.css";
import axios from "axios";

function DoctorReg() {
  useEffect(() => {
    document.title = "Health Recorder | Doctor Sign Up";
    window.scrollTo(0, 0);
  }, []);

  const regCharectars = /^[A-Za-z\s]*$/;
  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const url = "https://nice-rose-yak-ring.cyclic.app/api/v1/doctors";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [initialType, setType1] = useState("password");
  const [initialClass, setClass1] = useState("fa-solid fa-eye pass-eye");
  async function submitHandler() {
    if (firstName === "") {
      setErrorMessage("Enter First Name");
    } else if (!regCharectars.test(firstName)) {
      setErrorMessage("Enter Correct First Name");
    } else if (lastName === "") {
      setErrorMessage("Enter Last Name")
    } else if (!regCharectars.test(lastName)) {
      setErrorMessage("Enter Correct Last Name")
    } else if (email === "") {
      setErrorMessage("Enter Email")
    } else if (!regEmail.test(email)) {
      setErrorMessage("Enter Correct Email")
    } else if (password === "") {
      setErrorMessage("Enter Password")
    } else if (password.length < 8) {
      setErrorMessage("Password Must Be 8 Charrectars Or Longer")
    } else if (department === "") {
      setErrorMessage("Enter Department");
    } else if (!regCharectars.test(department)) {
      setErrorMessage("Enter Correct Department");
    } else if (phoneNumber === "") {
      setErrorMessage("Enter Phone Number");
    } else if (!regNumbers.test(phoneNumber) || phoneNumber.length != 11) {
      setErrorMessage("Enter Correct Phone Number")
    } else if (address === "") {
      setErrorMessage("Enter Address")
    } else if (age === "") {
      setErrorMessage("Enter Age")
    }else {
      setErrorMessage("");
      try {
        await axios.post(url, { firstName, lastName, email, password, department, phoneNumber, address, age });
        console.log("Success");
      } catch (e) {
        console.log(e.response.data);
      }
    }
  }

  const changeType = () => {
    if (initialType === "password") {
      setType1("text");
      setClass1("fa-solid fa-eye-slash pass-eye");
    } else {
      setType1("password");
      setClass1("fa-solid fa-eye pass-eye");
    }
  };

  return (
    <>
      <div className="reg">
        <div className="container">
          <div className="regis-card">
            <h2>Doctor Registration</h2>
            <div className="page-body">
              <div className="doc-first-row">
                <div className="lhs">
                  <span>First Name :</span>
                  <input id="fname" onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="main-input" />
                </div>
                <div className="rhs">
                  <span>Last Name :</span>
                  <input id="lname" onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="main-input" />
                </div>
              </div>
              <div className="doc-second-row">
                <div className="lhs">
                  <span>Email :</span>
                  <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" value={email} className="main-input" />
                </div>
                <div className="rhs">
                  <span>Password :</span>
                  <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} type={initialType} className="main-input" />
                  <i className={initialClass} onClick={changeType}></i>
                </div>
              </div>
              <div className="doc-third-row">
                <div className="lhs">
                  <span>Department :</span>
                  <input onChange={(e) => setDepartment(e.target.value)} type="text" id="department" value={department} className="main-input" />
                </div>
                <div className="rhs">
                  <span>Phone Number :</span>
                  <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} id="phoneNumber" value={phoneNumber} className="main-input" />
                </div>
              </div>
              <div className="doc-fourth-row">
                <div className="lhs">
                  <span>Address :</span>
                  <input onChange={(e) => setAddress(e.target.value)} type="text" id="address" value={address} className="main-input" />
                </div>
                <div className="rhs">
                  <span>Age :</span>
                  <input value={age} type="number" onChange={(e) => setAge(e.target.value)} className="main-input" />
                </div>
              </div>
              <div className="fifth-row">
                <span>{errorMessage}</span>
                <button className="doctor-submit-button" onClick={submitHandler}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorReg;
