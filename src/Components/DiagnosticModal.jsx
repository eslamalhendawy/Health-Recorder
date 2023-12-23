import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


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
      toast.error("Enter Diagnosis");
    } else if (Medicine === "") {
      toast.error("Enter Medication");
    } else if (DoctorName === "") {
      toast.error("Enter Doctor Name");
    } else if (date === "") {
      toast.error("Enter Date");
    } else {
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
        <i className="fa-solid fa-pen absolute text-white right-2 top-3"></i>
      </span>
      {modal && (
        <div className="modal">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content max-w-[500px] bg-white px-6 py-4 rounded-xl text-[#212529] relative">
            <h2 className="mb-4 font-semibold sm:text-lg ">Enter New Diagnosis</h2>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="">Diagnosis :</span>
                <input onChange={(e) => setDiagnosis(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="edit-span">Medication :</span>
                <input onChange={(e) => setMedication(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
            </div>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="edit-span">Doctor Name :</span>
                <input onChange={(e) => setDoctor(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="edit-span">Date :</span>
                <input onChange={(e) => setDate(e.target.value)} type="date" className="sm:w-[50%] p-2 text-xs test-[#0cb8b6] font-semibold focus:outline-none border-[2px] border-[#0cb8b6]" />
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
