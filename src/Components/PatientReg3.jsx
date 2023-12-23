import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import StateContext from "../StateContext";
import "react-toastify/dist/ReactToastify.css";

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
    toast.info("Attempting Registration")
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

    await axios
      .post(url, newPatient)
      .then((res) => {
        console.log(res);
        toast.success("Registration Successful");
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
        toast.error("Email ,National ID And Phone Number Must Be Unique");
      });
  }

  function goSecondPage() {
    navigate("/patient-reg2");
  }

  return (
      <div className="flex justify-center items-center bg-[#0cb8b6] px-0 lg:px-12 py-20 h-screen">
        <div className="bg-white login-card rounded-xl relative w-[80%] xl:w-[60%]">
          <h2 className="text-lg lg:text-2xl font-bold text-white bg-[#0cb8b6] rounded-t-xl p-6">Surgical History <span className="text-xs">(Click Register To Skip This Page)</span></h2>
          <div className="p-6">
            <div className="mb-3 sm:flex gap-4 lg:gap-8">
              <div className="mb-3 flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Have You Had Any Previous Surgeries ?</span>
                <div>
                  <input className="mr-2" type="radio" name="surgery-choice" value="yes" checked={pSurgury === "yes"} onChange={(e) => changePSurgery(e.target.value)} />
                  <span className="mr-2">Yes</span>
                  <input className="mr-2" type="radio" name="surgery-choice" value="no" checked={pSurgury === "no"} onChange={(e) => changePSurgery(e.target.value)} />
                  <span>No</span>
                </div>
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Surgery Type</span>
                <input className="focus:outline-none border-b-[2px] border-[#0cb8b6]" type="text" disabled={x} onChange={(e) => setSurgery(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="mb-3 lg:text-lg">Date Of Surgery :</span>
              <input className="sm:w-[50%] p-2 text-xs test-[#0cb8b6] font-semibold focus:outline-none border-[2px] border-[#0cb8b6]" type="date" disabled={x} onChange={(e) => setSurgeryDate(e.target.value)} />
            </div>
          </div>
          <h2 className="text-lg lg:text-2xl font-bold text-white bg-[#0cb8b6] p-6">Genetic Disease</h2>
          <div className="p-6">
            <div className="">
              <div className="flex flex-col mb-3">
                <span className="mb-3 lg:text-lg">Do You Have Any Genetic Diseases ?</span>
                <div>
                  <input className="mr-2" type="radio" name="genetic-choice" value="yes" checked={pGenetic === "yes"} onChange={(e) => changePGenetic(e.target.value)} />
                  <span className="mr-2">Yes</span>
                  <input className="mr-2" type="radio" name="genetic-choice" value="no" checked={pGenetic === "no"} onChange={(e) => changePGenetic(e.target.value)} />
                  <span>No</span>
                </div>
              </div>
            </div>
            <div className="mb-3 sm:flex gap-4 lg:gap-8">
              <div className="mb-3 flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Name Of Genetic Disease :</span>
                <input className="focus:outline-none border-b-[2px] border-[#0cb8b6]" type="text" disabled={y} onChange={(e) => setGenetic(e.target.value)} />
              </div>
              <div className="mb-3 flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Medication :</span>
                <input className="focus:outline-none border-b-[2px] border-[#0cb8b6]" type="text" disabled={y} onChange={(e) => setGeneticMed(e.target.value)} />
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={goSecondPage} className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl">
                Previous
              </button>
              <button onClick={submitHandler} className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default PatientReg3;
