import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function PatientReg1() {
  const [inputStyle1, changeStyle1] = useState("main-input");
  const [inputStyle2, changeStyle2] = useState("main-input");
  const [inputStyle3, changeStyle3] = useState("main-input");
  const [inputStyle4, changeStyle4] = useState("main-input");
  const [inputStyle5, changeStyle5] = useState("main-input");
  const [initialType, setType1] = useState("password");
  const [initialClass, setClass1] = useState("fa-solid fa-eye pass-eye");
  const [gender, changeGender] = useState("male");

  const pFirstName = useRef();
  const pLastName = useRef();
  const pEmail = useRef();
  const pPassword = useRef();
  const pPhone = useRef();

  const changeType = () => {
    if (initialType === "password") {
      setType1("text");
      setClass1("fa-solid fa-eye-slash pass-eye");
    } else {
      setType1("password");
      setClass1("fa-solid fa-eye pass-eye");
    }
  };

  const onGenderChange = (e) => {
    changeGender(e.target.value);
  };

  return (
    <div className="reg">
      <div className="container">
        <div className="regis-card p1">
          <h2>Personal Information</h2>
          <div className="page-body">
            <div className="p1-first-row">
              <div className="lhs">
                <span>First Name :</span>
                <input type="text" className={inputStyle1} ref={pFirstName} />
              </div>
              <div className="rhs">
                <span>Last Name :</span>
                <input type="text" className={inputStyle2} ref={pLastName} />
              </div>
            </div>
            <div className="p1-second-row">
              <span>Email :</span>
              <input type="email" className={inputStyle3} ref={pEmail} />
            </div>
            <div className="p1-third-row">
              <span>Password</span>
              <input type={initialType} className={inputStyle4} ref={pPassword} />
              <i className={initialClass} onClick={changeType}></i>
            </div>
            <div className="p1-forth-row">
              <div className="lhs">
                <span>Phone Number :</span>
                <input type="text" className={inputStyle5} ref={pPhone} />
              </div>
              <div className="rhs">
                <span>Gender :</span>
                <div>
                  <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={onGenderChange} />
                  <span>Male</span>
                  <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={onGenderChange} />
                  <span>Female</span>
                </div>
              </div>
            </div>
            <div className="p1-fifth-row">
              <div className="lhs">
                <span>Age :</span>
                <input type="number" className="main-input" />
              </div>
              <div className="rhs">
                <span>Blood Type:</span>
                {/* <Box>
              <FormControl fullWidth>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={bloodType} onChange={handleChange1}>
                  <MenuItem value={"A+"}>A+</MenuItem>
                  <MenuItem value={"A-"}>A-</MenuItem>
                  <MenuItem value={"B+"}>B+</MenuItem>
                  <MenuItem value={"B-"}>B-</MenuItem>
                  <MenuItem value={"O+"}>O+</MenuItem>
                  <MenuItem value={"O-"}>O-</MenuItem>
                  <MenuItem value={"AB+"}>AB+</MenuItem>
                  <MenuItem value={"AB-"}>AB-</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
              </div>
            </div>
            <Link to="/patient-reg/patient-reg2">
              <button className="first-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg1;
