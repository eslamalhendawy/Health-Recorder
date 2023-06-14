import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./PatientReg.css";

import StateContext from "../../StateContext";

function PatientReg3() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Sign Up";
    window.scrollTo(0, 0);
  }, []);

  const appState = useContext(StateContext);
  let navigate = useNavigate();
  const url = "https://nice-rose-yak-ring.cyclic.app/api/v1/pationts";
  let x = false;
  let y = false;

  const [pSurgury, changePSurgery] = useState("no");
  const [pGenetic, changePGenetic] = useState("no");
  const [surgery, setSurgery] = useState("");
  const [surgeryDate, setSurgeryDate] = useState("");
  const [relative, setRelative] = useState("");
  const [genetic, setGenetic] = useState("");
  const [geneticMed, setGeneticMed] = useState("");

  if (pSurgury === "no") {
    x = true;
  }

  if (pGenetic === "no") {
    y = true;
  }

  async function submitHandler() {
    await axios.post(url, { 
      fristName: appState.patient1.firstName, 
      lastName: appState.patient1.lastName, 
      password: appState.patient1.password, 
      age: appState.patient1.age, 
      bloodType: appState.patient1.bloodType, 
      gender: appState.patient1.gender, 
      email: appState.patient1.email, 
      phoneNumber: appState.patient1.phoneNumber, 
      National_ID: appState.patient1.nationalID,
      chronicDisease: appState.patient2.chronicDisease,
      mChronicDisease: appState.patient2.mChronicDisease,
      healthProblems: appState.patient2.healthProblems,
      mHealthProblems: appState.patient2.mHealthProblems,
      surgery,
      surgeryDate,
      relative,
      genetic,
      geneticMed,
     }).then((res) => {
      console.log(res);
    });
  }

  function goSecondPage() {
    navigate("/patient-reg2");
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
                <input type="text" className="main-input" disabled={x} onChange={(e) => setSurgery(e.target.value)} />
              </div>
            </div>
            <div className="p3-second-row">
              <span>Date Of Surgery :</span>
              <input type="date" className="bloodtype-select" disabled={x} onChange={(e) => setSurgeryDate(e.target.value)} />
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
                <select className="bloodtype-select" value={relative} onChange={(e) => setRelative(e.target.value)} name="relative" disabled={y}>
                  <option value="Sibling">Sibling</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Cousin">Cousin</option>
                  <option value="Aunt">Aunt</option>
                  <option value="Uncle">Uncle</option>
                  <option value="Grandparent">Grandparent</option>
                </select>
              </div>
            </div>
            <div className="p3-fourth-row">
              <div className="lhs">
                <span>Name Of Genetic Disease :</span>
                <input type="text" className="main-input" disabled={y} onChange={(e) => setGenetic(e.target.value)} />
              </div>
              <div className="rhs">
                <span>Medication :</span>
                <input type="text" className="main-input" disabled={y} onChange={(e) => setGeneticMed(e.target.value)} />
              </div>
            </div>
            <div className="controls">
              <button onClick={goSecondPage} className="previous-button">
                Previous
              </button>
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
