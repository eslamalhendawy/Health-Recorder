import axios from "axios";
import { useState } from "react";
import "./GeneticModal.css";

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

  const [disease, setDisease] = useState("");
  const [medication, setMedication] = useState("");
  const newGenetic = [
    {
      name: disease,
      medicen: medication,
    },
  ];

  const [error, setError] = useState("");

  async function submitGenetic() {
    if (disease === "") {
      setError("Enter Name Of Disease");
    } else if (medication === "") {
      setError("Enter Medication");
    } else {
      setError("");
      await axios
        .patch(url, { Hereditary_diseases: newGenetic })
        .then((res) => {
          localStorage.setItem("pGenetic", JSON.stringify(res.data.data.pationt.Hereditary_diseases));
          setTimeout(() => {
            window.location.reload(true);
          }, 400);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  return (
    <>
      <span className="genetic-edit" onClick={clickHandler}>
        <i className="fa-solid fa-pen"></i>
      </span>
      {modal && (
        <div className="modal">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content">
            <h2 className="modal-header">Enter New Genetic Disease</h2>
            <div className="row first-row">
              <div className="lhs">
                <span className="edit-span">Disease :</span>
                <input onChange={(e) => setDisease(e.target.value)} className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Medication :</span>
                <input onChange={(e) => setMedication(e.target.value)} className="main-input" type="text" />
              </div>
            </div>
            <div className="row third-row">
              <div className="rhs">
                <span>{error}</span>
                <button onClick={submitGenetic} className="submit-diagnosis">
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
