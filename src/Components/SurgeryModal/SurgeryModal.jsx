import axios from "axios";
import { useState } from "react";
import "./SurgeryModal.css"

function GeneticModal() {
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

  const [error, setError] = useState("");

  return (
    <>
      <span className="genetic-edit" onClick={clickHandler}>
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
                <input  className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Medication :</span>
                <input  className="main-input" type="text" />
              </div>
            </div>
            <div className="row second-row diagnosis-second-row">
              <div className="lhs">
                <span className="edit-span">Doctor Name :</span>
                <input  className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Date :</span>
                <input  type="date" className="bloodtype-select" />
              </div>
            </div>
            <div className="row third-row">
              <div className="rhs">
                <span>{error}</span>
                <button className="submit-diagnosis">
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

export default GeneticModal;
