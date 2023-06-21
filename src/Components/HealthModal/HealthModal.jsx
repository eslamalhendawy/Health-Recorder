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
  const [chronic, setChronic] = useState("");
  const [chronicMedicine, setChronicMedicine] = useState("");
  const [health, setHealth] = useState("");
  const [healthMedicine, setHealthM] = useState("");

  const newChronic = [
    {
      name: chronic,
      medicen: chronicMedicine,
    },
  ];

  const newHealth = [
    {
      name: health,
      medicen: healthMedicine,
    },
  ];

  const newData = {
    chronic_Diseases: newChronic,
    Health_problems: newHealth,
  };

  async function submitDiagnosis() {
    if (chronic === "" || chronicMedicine === "") {
      delete newData.chronic_Diseases;
    }
    if (health === "" || healthMedicine === "") {
      delete newData.Health_problems;
    }
    await axios
      .patch(url, newData)
      .then((res) => {
        localStorage.setItem("pChronic", JSON.stringify(res.data.data.pationt.chronic_Diseases));
        localStorage.setItem("pHealthProblems", JSON.stringify(res.data.data.pationt.Health_problems));
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
      })
      .catch((e) => console.log(e));
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
            <h2 className="modal-header">Enter Chronic Disease Or Health Problem</h2>
            <div className="row first-row">
              <div className="lhs">
                <span className="edit-span">Chronic Disease :</span>
                <input onChange={(e) => setChronic(e.target.value)} className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Medication :</span>
                <input onChange={(e) => setChronicMedicine(e.target.value)} className="main-input" type="text" />
              </div>
            </div>
            <div className="row second-row diagnosis-second-row">
              <div className="lhs">
                <span className="edit-span">Health Problem :</span>
                <input onChange={(e) => setHealth(e.target.value)} className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Medication :</span>
                <input onChange={(e) => setHealthM(e.target.value)} type="text" className="main-input" />
              </div>
            </div>
            <div className="row third-row">
              <div className="rhs">
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
