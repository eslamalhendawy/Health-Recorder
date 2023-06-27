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
  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts";
  let x = false;
  let y = false;

  const [pSurgury, changePSurgery] = useState("no");
  const [pGenetic, changePGenetic] = useState("no");
  const [surgery, setSurgery] = useState("");
  const [surgeryDate, setSurgeryDate] = useState("");
  const [genetic, setGenetic] = useState("");
  const [geneticMed, setGeneticMed] = useState("");
  const [value, setValue] = useState("Register");
  const [loadingState, setLoadingState] = useState("patient-loading-circle");
  const [loginState, setLoginState] = useState("next-button");
  const [errorMessage, setErrorMessage] = useState("");

  if (pSurgury === "no") {
    x = true;
  }

  if (pGenetic === "no") {
    y = true;
  }

  const chronicDisease = appState.patient2.chronicDisease;
  const mChronicDisease = appState.patient2.mChronicDisease;
  const healthProblems = appState.patient2.healthProblems;
  const mHealthProblems = appState.patient2.mHealthProblems;

  let newPatient = {
    fristName: appState.patient1.firstName,
    lastName: appState.patient1.lastName,
    age: appState.patient1.age,
    bloodType: appState.patient1.bloodType,
    gender: appState.patient1.gender,
    email: appState.patient1.email,
    password: appState.patient1.password,
    phoneNumber: appState.patient1.phoneNumber,
    National_ID: appState.patient1.nationalID,
    chronic_Diseases: [{ name: chronicDisease, medicen: mChronicDisease }],
    Health_problems: [{ name: healthProblems, medicen: mHealthProblems }],
    Hereditary_diseases: [{ name: genetic, medicen: geneticMed }],
    Surgical_operations: [{ name: surgery, date: surgeryDate }],
  };

  async function submitHandler() {
    if (chronicDisease === "" || mChronicDisease === "") {
      delete newPatient.chronic_Diseases;
    }
    if (healthProblems === "" || mHealthProblems === "") {
      delete newPatient.Health_problems;
    }
    if (genetic === "" || geneticMed === "") {
      delete newPatient.Hereditary_diseases;
    }
    if (surgery === "" || surgeryDate === "") {
      delete newPatient.Surgical_operations;
    }
    setValue("");
    setLoadingState("patient-loading-circle-active");
    setLoginState("clicked-register");
    setErrorMessage("");

    await axios
      .post(url, newPatient)
      .then((res) => {
        console.log(res);
        localStorage.setItem("userFirstName", res.data.data.pationt.fristName);
        localStorage.setItem("pLastName", res.data.data.pationt.lastName);
        localStorage.setItem("pEmail", res.data.data.pationt.email);
        localStorage.setItem("pBloodType", res.data.data.pationt.bloodType);
        localStorage.setItem("pNationalID", res.data.data.pationt.National_ID);
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
        localStorage.setItem("pXrayDescreption", JSON.stringify(res.data.data.pationt.orgnis_report));
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
        navigate("/patient-page");
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage("Email ,National ID And Phone Number Must Be Unique");
        setLoadingState("patient-loading-circle");
        setLoginState("next-button");
        setValue("Register");
      });
  }

  function goSecondPage() {
    navigate("/patient-reg2");
  }

  return (
    <div className="reg">
      <div className="container">
        <div className="regis-card p3">
          <h2>Surgical History (Click Register To Skip This Page)</h2>
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
                <span>Do You Have Any Genetic Diseases ?</span>
                <div>
                  <input type="radio" name="genetic-choice" value="yes" checked={pGenetic === "yes"} onChange={(e) => changePGenetic(e.target.value)} />
                  <span>Yes</span>
                  <input type="radio" name="genetic-choice" value="no" checked={pGenetic === "no"} onChange={(e) => changePGenetic(e.target.value)} />
                  <span>No</span>
                </div>
              </div>
              <div className="rhs"></div>
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
              <button onClick={submitHandler} className={loginState}>
                {value}
              </button>
              <span className={loadingState}></span>
              <span className="patient-error-message">{errorMessage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg3;
