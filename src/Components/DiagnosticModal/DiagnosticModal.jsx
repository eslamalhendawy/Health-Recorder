import axios from "axios";
import { useState } from "react";

function DiagnosticModal() {
  const [modal, setModal] = useState(false);
  const clickHandler = () => {
    if (modal === true) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const patientID = localStorage.getItem("pNationalID");
  const url = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/update/${patientID}`;
  const [Diagnose_condition, setDiagnosis] = useState("");
  const [Medicine, setMedication] = useState("");
  const [DoctorName, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const [error, setError] = useState("");

  const newDiagnosis = [
    {
      DoctorName,
      date,
      Diagnose_condition,
      Medicine,
    },
  ];

  async function submitDiagnosis() {
    if (Diagnose_condition === "") {
      setError("Enter Diagnosis");
    } else if (Medicine === "") {
      setError("Enter Medication");
    } else if (DoctorName === "") {
      setError("Enter Doctor Name");
    } else if (date === "") {
      setError("Enter Date");
    } else {
      setError("");
      await axios
        .patch(url, { diagonas: newDiagnosis })
        .then((res) => {
          localStorage.setItem("pDiagonas", JSON.stringify(res.data.data.pationt.diagonas));
          setTimeout(() => {
            window.location.reload(true);
          }, 400);
        })
        .catch((e) => console.log(e));
    }
  }

  return (
    <>
      <span className="diagnosis-edit" onClick={clickHandler}>
        <i className="fa-solid fa-pen"></i>
      </span>
      {modal && (
        <div className="modal">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content">
            <h2 className="modal-header">Enter New Diagnosis</h2>
            <div className="row first-row">
              <div className="lhs">
                <span className="edit-span">Diagnosis :</span>
                <input onChange={(e) => setDiagnosis(e.target.value)} className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Medication :</span>
                <input onChange={(e) => setMedication(e.target.value)} className="main-input" type="text" />
              </div>
            </div>
            <div className="row second-row diagnosis-second-row">
              <div className="lhs">
                <span className="edit-span">Doctor Name :</span>
                <input onChange={(e) => setDoctor(e.target.value)} className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Date :</span>
                <input onChange={(e) => setDate(e.target.value)} type="date" className="bloodtype-select" />
              </div>
            </div>
            <div className="row third-row">
              <div className="rhs">
                <span>{error}</span>
                <button className="submit-diagnosis" onClick={submitDiagnosis}>
                  Submit
                </button>
              </div>
            </div>
            <i className="fa-solid fa-xmark close-modal" onClick={clickHandler}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default DiagnosticModal;
