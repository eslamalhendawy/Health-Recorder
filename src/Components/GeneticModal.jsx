import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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


  async function submitGenetic() {
    if (disease === "") {
      toast.error("Enter Name Of Disease");
    } else if (medication === "") {
      toast.error("Enter Medication");
    } else {
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
        <i className="fa-solid fa-pen absolute text-white right-2 top-3"></i>
      </span>
      {modal && (
        <div className="modal">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content max-w-[500px] bg-white px-6 py-4 rounded-xl text-[#212529] relative">
            <h2 className="mb-4 font-semibold sm:text-lg">Enter New Genetic Disease</h2>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="">Disease :</span>
                <input onChange={(e) => setDisease(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="">Medication :</span>
                <input onChange={(e) => setMedication(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
            </div>
            <div className="text-right">
              <button onClick={submitGenetic} className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl">
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

export default GeneticModal;
