import axios from "axios";
import { useState } from "react";


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

  const [surgery, setSurgery] = useState("");
  const [date, setDate] = useState("");
  const newSurgery = [
    {
      name: surgery,
      date
    },
  ];

  const [error, setError] = useState("");

  async function submitGenetic() {
    if (surgery === "") {
      setError("Enter Name Of Surgery");
    } else if (date === "") {
      setError("Enter Surgery Date");
    } else {
      setError("");
      await axios
        .patch(url, { Surgical_operations: newSurgery })
        .then((res) => {
          localStorage.setItem("pSurgery", JSON.stringify(res.data.data.pationt.Surgical_operations));
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
            <h2 className="modal-header">Enter New Surgery Data</h2>
            <div className="row first-row">
              <div className="lhs">
                <span className="edit-span">Surgery Type :</span>
                <input onChange={(e) => setSurgery(e.target.value)} className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Date Of Surgery :</span>
                <input onChange={(e) => setDate(e.target.value)} type="date" className="bloodtype-select" />
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
