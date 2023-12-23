import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import DispatchContext from "../DispatchContext";

function PatientReg2() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Sign Up";
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();
  const appDispatch = useContext(DispatchContext);

  const [thisCD, changePCD] = useState("no");
  const [chronicDisease, setChronicDisease] = useState("");
  const [mChronicDisease, setMChronicDisease] = useState("");
  const [healthProblems, setHealthProblems] = useState("");
  const [mHealthProblems, setMHealthProblems] = useState("");

  let cdInput1 = false;
  let cdInput2 = false;

  let x = false;
  if (thisCD === "no") {
    x = true;
    cdInput1 = true;
    cdInput2 = true;
  }

  function goFirstPage() {
    navigate("/patient-reg1");
  }

  function goThirdPage() {
    appDispatch({type: "patient2", data: {chronicDisease, mChronicDisease, healthProblems, mHealthProblems}})
    navigate("/patient-reg3");
  }

  return (
      <div className="flex justify-center items-center bg-[#0cb8b6] px-0 lg:px-12 py-20 h-screen">
        <div className="bg-white login-card rounded-xl relative w-[80%] xl:w-[60%]">
          <h2 className="text-lg lg:text-2xl font-bold text-white bg-[#0cb8b6] rounded-t-xl p-6">Health Status <span className="text-xs">(Click Next To Skip This Page)</span></h2>
          <div className="p-6">
            <div className="mb-3 sm:flex gap-4 lg:gap-8">
              <div className="mb-3 flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Do You Have Any Chronic Diseases ?</span>
                <div>
                  <input className="mr-2" type="radio" name="choice" value="yes" checked={thisCD === "yes"} onChange={(e) => changePCD(e.target.value)} />
                  <span className="mr-2">Yes</span>
                  <input className="mr-2" type="radio" name="choice" value="no" checked={thisCD === "no"} onChange={(e) => changePCD(e.target.value)} />
                  <span>No</span>
                </div>
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Chronic Disease :</span>
                <select className="sm:w-[50%] p-2 text-xs test-[#0cb8b6] font-semibold focus:outline-none border-[2px] border-[#0cb8b6]" value={chronicDisease} onChange={(e) => setChronicDisease(e.target.value)} name="chronic" disabled={x}>
                  <option value="">None Of These</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Heart Disease">Heart Disease</option>
                  <option value="High Blood Pressure">High Blood Pressure</option>
                  <option value="Low Blood Pressure">Low Blood Pressure</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Asthma">Asthma</option>
                  <option value="Kidney Failure">Kidney Failure</option>
                </select>
              </div>
            </div>
            <div className="mb-3 sm:flex gap-4 lg:gap-8">
              <div className="mb-3 flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Your Chronic Disease If Not Listed :</span>
                <input onChange={(e) => setChronicDisease(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" disabled={cdInput1 === true} />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="mb-3 lg:text-lg">Medication For Your Chronic Disease :</span>
                <input type="text" onChange={(e) => setMChronicDisease(e.target.value)} className="focus:outline-none border-b-[2px] border-[#0cb8b6]" disabled={cdInput2 === true} />
              </div>
            </div>
            <div className="mb-3 flex flex-col relative">
              <span className="mb-3 lg:text-lg">Any Other Health Problems : </span>
              <input onChange={(e) => setHealthProblems(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            </div>
            <div className="mb-3 flex flex-col relative">
              <span className="mb-3 lg:text-lg">Medication For Health Problems : </span>
              <input onChange={(e) => setMHealthProblems(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            </div>
            <div className="flex justify-between">
              <button onClick={goFirstPage} className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl">
                Previous
              </button>
              <button onClick={goThirdPage} className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default PatientReg2;
