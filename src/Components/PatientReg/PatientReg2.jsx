import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function PatientReg2() {
  const [thisCD, changePCD] = useState("no");
  const [inputStyle6, changeStyle6] = useState("main-input");
  const [inputStyle7, changeStyle7] = useState("main-input");
  const [inputStyle8, changeStyle8] = useState("main-input");
  const [inputStyle9, changeStyle9] = useState("main-input");

  const pCD = useRef();
  const pCDM = useRef();
  const otherHealthProblems = useRef();
  const mForOtherHealthProblems = useRef();

  let cdInput1 = false;
  let cdInput2 = false;

  return (
    <div className="reg">
      <div className="container">
        <div className="regis-card p2">
          <h2>Health Status</h2>
          <div className="page-body">
            <div className="p2-first-row">
              <div className="lhs">
                <span className="main-span">Do You Have Any Chronic Diseases ?</span>
                <div>
                  <input type="radio" name="choice" value="yes" checked={thisCD === "yes"} onChange={(e) => changePCD(e.target.value)} />
                  <span>Yes</span>
                  <input type="radio" name="choice" value="no" checked={thisCD === "no"} onChange={(e) => changePCD(e.target.value)} />
                  <span>No</span>
                </div>
              </div>
              <div className="rhs">
                <span className="main-span">Chronic Disease :</span>
                {/* <Box>
                  <FormControl fullWidth>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={chronicDisease} onChange={handleChange2} disabled={CDControl}>
                      <MenuItem value={"High Blood Pressure"}>High Blood Pressure</MenuItem>
                      <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                      <MenuItem value={"Alzheimer's"}>Alzheimer's</MenuItem>
                      <MenuItem value={"Heart failure"}>Heart Failure</MenuItem>
                    </Select>
                  </FormControl>
                </Box> */}
              </div>
            </div>
            <div className="p2-second-row">
              <div className="lhs">
                <span>Your Chronic Disease If Not Listed :</span>
                <input type="text" className={inputStyle6} disabled={cdInput1 === true} ref={pCD} />
              </div>
              <div className="rhs">
                <span>Medication For Your Chronic Disease :</span>
                <input type="text" className={inputStyle7} disabled={cdInput2 === true} ref={pCDM} />
              </div>
            </div>
            <div className="p2-third-row">
              <span>Any Other Health Problems : </span>
              <input type="text" className={inputStyle8} ref={otherHealthProblems} />
            </div>
            <div className="p2-forth-row">
              <span>Medication For Health Problems : </span>
              <input type="text" className={inputStyle9} ref={mForOtherHealthProblems} />
            </div>
            <div className="controls">
              <Link to="/patient-reg/patient-reg1">
                <button className="previous-button">Previous</button>
              </Link>
              <Link to="/patient-reg/patient-reg3">
                <button className="next-button">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg2;
