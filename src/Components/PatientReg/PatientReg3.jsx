import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function PatientReg3() {
  let navigate = useNavigate();
  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts";

  const [inputStyle10, changeStyle10] = useState("main-input");
  const [inputStyle11, changeStyle11] = useState("main-input");
  const [inputStyle12, changeStyle12] = useState("main-input");
  const [inputStyle13, changeStyle13] = useState("main-input");
  const [pSurgury, changePSurgery] = useState("no");
  const [pGenetic, changePGenetic] = useState("no");

  const pSurgery = useRef();
  const relativeRelation = useRef();
  const geneticName = useRef();
  const geneticMedication = useRef();

  async function submitHandler() {
    try {
      await axios.post(url, { fristName: "Test", lastName: "Test", password: "test0123456789", age: 22, bloodType: "O+", gender: "mail", email: "test2@test.com", phoneNumber: "01012609955", National_ID: "30109193400190" });
      console.log("Success");
    } catch (e) {
      console.log(e.response.data);
    }
  }

  function goSecondPage(){
    navigate("/patient-reg/patient-reg2");
  }

  return (
    <div className="reg">
      <div className="container">
        <div className="regis-card p3">
          <h2>Surgical History</h2>
          <div className="special-page-body">
            <div className="p3-first-row">
              <div className="lhs">
                <span>Have You Had Any Previous Surgeries ?</span>
                <div>
                  <input type="radio" name="surgery-choice" value="yes" checked={pSurgury === "yes"} onChange={(e) => changePSurgery(e.target.value)} />
                  <span>Yes</span>
                  <input type="radio" name="surgery-choice" value="no" checked={pSurgury === "no"} onChange={(e) => changePSurgery(e.target.value)} />
                  <span>No</span>
                </div>
              </div>
              <div className="rhs">
                <span>Surgery Type</span>
                <input type="text" className={inputStyle10} ref={pSurgery} />
              </div>
            </div>
            <div className="p3-second-row">
              <span>Date Of Surgery :</span>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker className="test" disabled={surgeryControl} />
                </DemoContainer>
              </LocalizationProvider> */}
            </div>
          </div>
          <h2 className="special-h2">Genetic Disease</h2>
          <div className="page-body">
            <div className="p3-third-row">
              <div className="lhs">
                <span>Any Genetic Diseases In Your Family ?</span>
                <div>
                  <input type="radio" name="genetic-choice" value="yes" checked={pGenetic === "yes"} onChange={(e) => changePGenetic(e.target.value)} />
                  <span>Yes</span>
                  <input type="radio" name="genetic-choice" value="no" checked={pGenetic === "no"} onChange={(e) => changePGenetic(e.target.value)} />
                  <span>No</span>
                </div>
              </div>
              <div className="rhs">
                <span>Relative Relation :</span>
                <input type="text" className={inputStyle11} ref={relativeRelation} />
              </div>
            </div>
            <div className="p3-fourth-row">
              <div className="lhs">
                <span>Name Of Genetic Disease :</span>
                <input type="text" className={inputStyle12} ref={geneticName} />
              </div>
              <div className="rhs">
                <span>Medication :</span>
                <input type="text" className={inputStyle13} d ref={geneticMedication} />
              </div>
            </div>
            <div className="controls">
              <button onClick={goSecondPage} className="previous-button">Previous</button>
              <button onClick={submitHandler} className="next-button">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg3;
