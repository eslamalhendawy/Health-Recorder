import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientReg2() {
  let navigate = useNavigate();

  const [thisCD, changePCD] = useState("no");
  const [chronicDisease, setChronicDisease] = useState("");
  const [mChronicDisease, setMChronicDisease] = useState("");
  const [healthProblems, setHealthProblems] = useState("");
  const [mHealthProblems, setMHealthProblems] = useState("");

  let cdInput1 = false;
  let cdInput2 = false;

  let x = false;
  if (thisCD === "no") {
    x = true;
    cdInput1 = true;
    cdInput2 = true;
  }

  function goFirstPage() {
    navigate("/patient-reg/patient-reg1");
  }

  function goThirdPage() {
    navigate("/patient-reg/patient-reg3");
  }

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
                <select className="bloodtype-select" value={chronicDisease} onChange={(e) => setChronicDisease(e.target.value)} name="chronic" disabled={x}>
                  <option value="">None Of These</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Heart Disease">Heart Disease</option>
                  <option value="High Blood Pressure">High Blood Pressure</option>
                  <option value="Low Blood Pressure">Low Blood Pressure</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Asthma">Asthma</option>
                  <option value="Kidney Failure">Kidney Failure</option>
                </select>
              </div>
            </div>
            <div className="p2-second-row">
              <div className="lhs">
                <span>Your Chronic Disease If Not Listed :</span>
                <input onChange={(e) => setChronicDisease(e.target.value)} type="text" className="main-input" disabled={cdInput1 === true} />
              </div>
              <div className="rhs">
                <span>Medication For Your Chronic Disease :</span>
                <input type="text" onChange={(e) => setMChronicDisease(e.target.value)} className="main-input" disabled={cdInput2 === true} />
              </div>
            </div>
            <div className="p2-third-row">
              <span>Any Other Health Problems : </span>
              <input onChange={(e) => setHealthProblems(e.target.value)} type="text" className="main-input" />
            </div>
            <div className="p2-forth-row">
              <span>Medication For Health Problems : </span>
              <input onChange={(e) => setMHealthProblems(e.target.value)} type="text" className="main-input" />
            </div>
            <div className="controls">
              <button onClick={goFirstPage} className="previous-button">
                Previous
              </button>
              <button onClick={goThirdPage} className="next-button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg2;
