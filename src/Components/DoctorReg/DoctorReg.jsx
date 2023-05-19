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
  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const [initialType, setType1] = useState("password");
  const [initialClass, setClass1] = useState("fa-solid fa-eye pass-eye");
  const [inputIntialStyle1, changeInputStyle1] = useState("main-input");
  const [inputIntialStyle2, changeInputStyle2] = useState("main-input");
  const [inputIntialStyle3, changeInputStyle3] = useState("main-input");
  const [inputIntialStyle4, changeInputStyle4] = useState("main-input");
  const [inputIntialStyle5, changeInputStyle5] = useState("main-input");
  const [inputIntialStyle6, changeInputStyle6] = useState("main-input");
  const [inputIntialStyle7, changeInputStyle7] = useState("main-input");
  const [inputIntialStyle8, changeInputStyle8] = useState("main-input");

  async function submitHandler() {
    let a = false;
    if (firstName === "") {
      alert("Please Enter First Name");
      changeInputStyle1("error");
    } else if (!regCharectars.test(firstName)) {
      alert("Please Enter Correct First Name");
      changeInputStyle1("error");
    } else {
      changeInputStyle1("main-input");
      a = true;
    }

    let b = false;
    if (lastName === "") {
      alert("Please Enter Last Name");
      changeInputStyle2("error");
    } else if (!regCharectars.test(lastName)) {
      alert("Please Enter Correct Last Name");
      changeInputStyle2("error");
    } else {
      changeInputStyle2("main-input");
      b = true;
    }

    let c = false;
    if (email === "") {
      alert("Please Enter Email");
      changeInputStyle3("error");
    } else if (!regEmail.test(email)) {
      alert("Please Enter Correct Email");
      changeInputStyle3("error");
    } else {
      changeInputStyle3("main-input");
      c = true;
    }

    let d = false;
    if (password === "") {
      alert("Please Enter Password");
      changeInputStyle4("error");
    } else if (password.length < 8) {
      alert("Password Must Be 8 Charrectars Or Longer");
      changeInputStyle4("error");
    } else {
      changeInputStyle4("main-input");
      d = true;
    }

    let e = false;
    if (department === "") {
      alert("Please Enter Department");
      changeInputStyle5("error");
    } else if (!regCharectars.test(department)) {
      alert("Enter Correct Department");
      changeInputStyle5("error");
    } else {
      changeInputStyle5("main-input");
      e = true;
    }

    let f = false;
    if (phoneNumber === "") {
      alert("Please Enter Phone Number");
      changeInputStyle6("error");
    } else if (!regNumbers.test(phoneNumber) || phoneNumber.length != 11) {
      alert("Enter Correct Phone Number");
      changeInputStyle6("error");
    } else {
      changeInputStyle6("main-input");
      f = true;
    }

    let g = false;
    if (address === "") {
      alert("Please Enter Address");
      changeInputStyle7("error");
    } else {
      changeInputStyle7("main-input");
      g = true;
    }

    let h = false;
    if (age === "") {
      alert("Please Enter Age");
      changeInputStyle8("error");
    } else if (!regNumbers.test(age)) {
      alert("Enter Correct Age");
      changeInputStyle8("error");
    } else {
      changeInputStyle8("main-input");
      h = true;
    }
    if (a && b && c && e && d && f && g && h) {
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
                  <input id="fname" onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className={inputIntialStyle1} />
                </div>
                <div className="rhs">
                  <span>Last Name :</span>
                  <input id="lname" onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className={inputIntialStyle2} />
                </div>
              </div>
              <div className="doc-second-row">
                <div className="lhs">
                  <span>Email :</span>
                  <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" value={email} className={inputIntialStyle3} />
                </div>
                <div className="rhs">
                  <span>Password :</span>
                  <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} type={initialType} className={inputIntialStyle4} />
                  <i className={initialClass} onClick={changeType}></i>
                </div>
              </div>
              <div className="doc-third-row">
                <div className="lhs">
                  <span>Department :</span>
                  <input onChange={(e) => setDepartment(e.target.value)} type="text" id="department" value={department} className={inputIntialStyle5} />
                </div>
                <div className="rhs">
                  <span>Phone Number :</span>
                  <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} id="phoneNumber" value={phoneNumber} className={inputIntialStyle6} />
                </div>
              </div>
              <div className="doc-fourth-row">
                <div className="lhs">
                  <span>Address :</span>
                  <input onChange={(e) => setAddress(e.target.value)} type="text" id="address" value={address} className={inputIntialStyle7} />
                </div>
                <div className="rhs">
                  <span>Age :</span>
                  <input value={age} type="text" onChange={(e) => setAge(e.target.value)} className={inputIntialStyle8} />
                </div>
              </div>
              <button className="doctor-submit-button" onClick={submitHandler}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorReg;
