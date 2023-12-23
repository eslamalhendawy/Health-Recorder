import { useEffect } from "react";
import SurgeryTable from "./SurgeryTable";
import GeneticTable from "./GeneticTable";
import DiagnosisTable from "./DiagnosisTable";

function PatientPage() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Page";
    window.scrollTo(0, 0);
  }, []);

  const chronic = JSON.parse(localStorage.getItem("pChronic"));
  const healthProblems = JSON.parse(localStorage.getItem("pHealthProblems"));
  const xray = JSON.parse(localStorage.getItem("pXray"));
  const xrayDes = JSON.parse(localStorage.getItem("pXrayDescreption"));

  return (
    <>
      <div className="flex border-t-2 border-[#e6e6e6]">
      <div className="flex flex-col items-center bg-[#0cb8b6] text-white space-y-6 p-3 sm:p-8">
        <ul className="text-xs md:text-sm flex flex-col space-y-6">
          <li className="">
            <a className="flex items-center space-x-2" href="#person">
              <i className="fa-solid fa-hospital-user"></i>
              <span className="hidden md:inline">Personal Information</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2" href="#health">
              <i className="fa-solid fa-heart"></i>
              <span className="hidden md:inline">Health Status</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2" href="#surgical">
              <i className="fa-solid fa-hospital "></i>
              <span className="hidden md:inline">Surgical History</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2" href="#genetic">
              <i className="fa-solid fa-square-virus "></i>
              <span className="hidden md:inline">Genetic Disease</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2" href="#diagnosis">
              <i className="fa-solid fa-user-doctor "></i>
              <span className="hidden md:inline">Diagnosis</span>
            </a>
          </li>
          <li>
            <a className="flex items-center space-x-2" href="#xray">
              <i className="fa-solid fa-x-ray "></i>
              <span className="hidden md:inline">X-Rays And Prescriptions</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="px-6 py-10 basis-full">
        <div className="">
          <h2 className="text-[#0cb8b6] text-xl md:text-3xl font-semibold mb-3">Profile</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="shadow-xl rounded-b-xl" id="person">
            <h2 className="bg-[#0cb8b6] text-white text-center p-2 font-semibold mb-3 rounded-t-xl">Personal Information</h2>
            <div className="rounded-b-xl">
              <div className="flex justify-between items-center py-3 px-6">
                <img className="size-[50px] sm:size-[75px] rounded-full" src={localStorage.getItem("pImage")} alt="" />
                <div className="">
                  <h3 className="text-lg font-semibold text-[#0cb8b6]">{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("pLastName")}`}</h3>
                </div>
              </div>
              <div className="py-3 px-6">
                <div className="flex justify-between">
                  <h5>Age</h5>
                  <span>{localStorage.getItem("pAge")}</span>
                </div>
                <div className="flex justify-between">
                  <h5>Blood type</h5>
                  <span>{localStorage.getItem("pBloodType")}</span>
                </div>
                <div className="flex justify-between">
                  <h5>Gender</h5>
                  <span>{localStorage.getItem("pGender") === "mail" ? "Male" : "Female"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-b-xl relative" id="health">
            <h2 className="bg-[#0cb8b6] text-white text-center p-2 font-semibold rounded-t-xl">Health Status</h2>
            <table className="w-full rounded-b-xl">
              <tbody className="text-center rounded-b-xl">
                <tr className="bg-[#d9d9d9]">
                  <th className="text-sm font-semibold py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">Chronic Disease</th>
                  <th className="text-sm font-semibold pl-2 border-b-2 border-[#d9d9d9]">Regular Medicine</th>
                </tr>
                {chronic.length === 0 ? (
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                ) : (
                  chronic.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-sm py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">{data.name}</td>
                        <td className="text-sm pl-2 border-b-2 border-[#d9d9d9]">{data.medicen}</td>
                      </tr>
                    );
                  })
                )}
                <tr className="bg-[#d9d9d9]">
                  <th className="text-sm font-semibold py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">Health Problems</th>
                  <th className="text-sm font-semibold pl-2 border-b-2 border-[#d9d9d9]">Medication</th>
                </tr>
                {healthProblems.length === 0 ? (
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                ) : (
                  healthProblems.map((data, index) => {
                    return (
                      <tr className="rounded-b-xl" key={index}>
                        <td className="text-sm py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">{data.name}</td>
                        <td className="text-sm pl-2 border-b-2 border-[#d9d9d9]">{data.medicen}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="shadow-xl rounded-b-xl relative" id="surgical">
            <h2 className="bg-[#0cb8b6] text-white text-center p-2 font-semibold rounded-t-xl">Surgical History</h2>
            <table className="w-full">
              <thead className="text-center">
                <tr className="bg-[#d9d9d9]">
                  <th className="text-sm font-semibold py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">Surgery</th>
                  <th className="text-sm font-semibold pl-2 border-b-2 border-[#d9d9d9]">Date</th>
                </tr>
              </thead>
              <tbody className="text-center rounded-b-xl">
                <SurgeryTable />
              </tbody>
            </table>
          </div>
          <div className="shadow-xl rounded-b-xl relative" id="genetic">
            <h2 className="bg-[#0cb8b6] text-white text-center p-2 font-semibold rounded-t-xl">Genetic Disease</h2>
            <table className="w-full">
              <thead className="text-center">
                <tr className="bg-[#d9d9d9]">
                  <th className="text-sm font-semibold py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">Disease</th>
                  <th className="text-sm font-semibold pl-2 border-b-2 border-[#d9d9d9]">Medicine</th>
                </tr>
              </thead>
              <tbody className="text-center rounded-b-xl">
                <GeneticTable />
              </tbody>
            </table>
          </div>
          <div className="shadow-xl rounded-b-xl relative" id="diagnosis">
            <h2 className="bg-[#0cb8b6] text-white text-center p-2 font-semibold rounded-t-xl">Diagnostic Recording History</h2>
            <table className="w-full">
              <thead className="text-center">
                <tr className="bg-[#d9d9d9]">
                  <th className="text-sm font-semibold py-4 px-2 border-r-2 border-b-2 border-[#d9d9d9]">Diagnosis</th>
                  <th className="text-sm font-semibold pl-2 border-b-2 border-[#d9d9d9]">Medicine</th>
                  <th className="text-sm font-semibold pl-2 border-b-2 border-[#d9d9d9]">Doctor Name</th>
                  <th className="text-sm font-semibold pl-2 border-b-2 border-[#d9d9d9]">Date</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <DiagnosisTable />
              </tbody>
            </table>
          </div>
          <div className="shadow-xl rounded-b-xl relative" id="xray">
            <h2 className="bg-[#0cb8b6] text-white text-center p-2 font-semibold rounded-t-xl">X-Rays And Prescriptions</h2>
            <div className="p-4 text-center rounded-b-xl">
              {xray.length === 0 ? (
                <div></div>
              ) : (
                xray.map((data, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center space-y-3">
                      <img className="w-[150px]" src={data} alt="" />
                      <span>{xrayDes[index].descrption}</span>
                      <span>{xrayDes[index].date}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default PatientPage;
