import axios from "axios";
import { useState } from "react";
import "./Modal.css";

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
      <span className="" onClick={clickHandler}>
        <i className="fa-solid fa-pen absolute text-white right-2 top-3"></i>
      </span>
      {modal && (
        <div className="modal ">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content max-w-[500px] bg-white px-6 py-4 rounded-xl text-[#212529] relative">
            <h2 className="mb-4 font-semibold sm:text-lg">Enter Chronic Disease Or Health Problem</h2>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="">Chronic Disease :</span>
                <input onChange={(e) => setChronic(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="">Medication :</span>
                <input onChange={(e) => setChronicMedicine(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
            </div>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="">Health Problem :</span>
                <input onChange={(e) => setHealth(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="">Medication :</span>
                <input onChange={(e) => setHealthM(e.target.value)} type="text" className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" />
              </div>
            </div>
            <div className="text-right">
              <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl" onClick={submitDiagnosis}>
                Submit
              </button>
            </div>
            <i className="fa-solid fa-xmark absolute top-3 right-3 text-[#e93131] text-xl" onClick={clickHandler}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default DiagnosticModal;
