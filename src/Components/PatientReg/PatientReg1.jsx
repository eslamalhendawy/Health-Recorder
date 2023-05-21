import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientReg1() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [bloodtype, setBloodtype] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const regCharectars = /^[A-Za-z]+$/;
  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [initialType, setType1] = useState("password");
  const [initialClass, setClass1] = useState("fa-solid fa-eye pass-eye");
  const [gender, setGender] = useState("male");

  const changeType = () => {
    if (initialType === "password") {
      setType1("text");
      setClass1("fa-solid fa-eye-slash pass-eye");
    } else {
      setType1("password");
      setClass1("fa-solid fa-eye pass-eye");
    }
  };

  function goSecondPage() {
    if (firstName === "") {
      setErrorMessage("Enter First Name");
    } else if (!regCharectars.test(firstName)) {
      setErrorMessage("Enter Correct First Name");
    } else if (lastName === "") {
      setErrorMessage("Enter Last Name");
    } else if (!regCharectars.test(lastName)) {
      setErrorMessage("Enter Correct Last Name");
    } else if (email === "") {
      setErrorMessage("Enter Email");
    } else if (!regEmail.test(email)) {
      setErrorMessage("Enter Correct Email");
    } else if (password === "") {
      setErrorMessage("Enter Password");
    } else if (password.length < 8) {
      setErrorMessage("Password Must Be 8 Charrecters Or Longer");
    } else if (phoneNumber === "") {
      setErrorMessage("Enter Phone Number");
    } else if (phoneNumber.length != 11 || !regNumbers.test(phoneNumber)) {
      setErrorMessage("Enter Correct Phone Number");
    } else if (age === "") {
      setErrorMessage("Enter Age");
    } else {
      setErrorMessage("");
      navigate("/patient-reg/patient-reg2");
    }
  }

  return (
    <div className="reg">
      <div className="container">
        <div className="regis-card p1">
          <h2>Personal Information</h2>
          <div className="page-body">
            <div className="p1-first-row">
              <div className="lhs">
                <span>First Name :</span>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="main-input" />
              </div>
              <div className="rhs">
                <span>Last Name :</span>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="main-input" />
              </div>
            </div>
            <div className="p1-second-row">
              <span>Email :</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="main-input" />
            </div>
            <div className="p1-third-row">
              <span>Password</span>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type={initialType} className="main-input" />
              <i className={initialClass} onClick={changeType}></i>
            </div>
            <div className="p1-forth-row">
              <div className="lhs">
                <span>Phone Number :</span>
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="main-input" />
              </div>
              <div className="rhs">
                <span>Gender :</span>
                <div>
                  <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
                  <span>Male</span>
                  <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
                  <span>Female</span>
                </div>
              </div>
            </div>
            <div className="p1-fifth-row">
              <div className="lhs">
                <span>Age :</span>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="number" className="main-input" />
              </div>
              <div className="rhs">
                <span>Blood Type:</span>
                <select className="bloodtype-select" onChange={(e) => setBloodtype(e.target.value)} name="bloodtype">
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div className="sixth-row">
              <span>{errorMessage}</span>
              <button onClick={goSecondPage} className="first-button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg1;
