import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PatientCard from "./PatientCard";
import DoctorModal from "./DoctorModal";

function DoctorPage() {
  let patients = JSON.parse(localStorage.getItem("patientList"));
  const [patientID, setPatientID] = useState("");
  const [patientList, setPatientList] = useState(patients.slice(-6).reverse());
  const navigate = useNavigate();

  async function clickHandler() {
    await axios
      .patch(`https://eslamsaber8-healthrecorder.onrender.com/api/v1/pId/${localStorage.getItem("doctorID")}`, { pId: [patientID] })
      .then((res) => {
        setPatientList(localStorage.setItem("patientList", JSON.stringify(res.data.data.doctor.pId)));
      })
      .catch((error) => {
        console.log(error);
      });
    await axios
      .get(`https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/${patientID}`)
      .then((res) => {
        localStorage.setItem("pFirstName", res.data.data.pationt.fristName);
        localStorage.setItem("pLastName", res.data.data.pationt.lastName);
        localStorage.setItem("pAge", res.data.data.pationt.age);
        localStorage.setItem("pBloodType", res.data.data.pationt.bloodType);
        localStorage.setItem("pGender", res.data.data.pationt.gender);
        localStorage.setItem("pImage", res.data.data.pationt.image);
        localStorage.setItem("pNationalID", res.data.data.pationt.National_ID);
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
        navigate("/patient-edit");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    document.title = "Health Recorder | Doctor Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex border-t-2 border-[#e6e6e6]">
      <div className="flex flex-col items-center bg-[#0cb8b6] text-white space-y-6 p-3 sm:p-8">
        <div className="relative">
          <img className="size-[50px] sm:size-[75px] rounded-full" src={localStorage.getItem("doctorImage")} alt="Doctor's Photo" />
          <DoctorModal />
        </div>
        <h3 className="text-xs sm:text-lg font-semibold text-center">{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("userLastName")}`}</h3>
        <span className="text-xs sm:text-lg">{localStorage.getItem("doctorDepartment")}</span>
        <span className="text-xs sm:text-lg">{`+${localStorage.getItem("doctorPhone")}`}</span>
        <a className="text-xs sm:text-lg text-center" href="">
          <i className="fa-solid fa-location-dot"></i>
          {localStorage.getItem("doctorAddress")}
        </a>
      </div>
      <div className="px-6 py-10 basis-full">
        <div className="sm:flex justify-between">
          <h2 className="text-[#0cb8b6] text-xl md:text-3xl font-semibold mb-3">My Profile</h2>
          <div className="mb-3 bg-[#d9d9d9] w-fit rounded-lg flex items-center">
            <input className="text-sm bg-[#d9d9d9] px-2 py-1 rounded-l-lg focus:outline-none focus:placeholder-transparent placeholder:duration-300 " onChange={(e) => setPatientID(e.target.value)} type="text" name="search" placeholder="Enter Patient Code" />
            <button onClick={clickHandler} className="text-white bg-[#0cb8b6] px-2 py-1 rounded-r-lg">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {patientList.map((id, index) => {
            return <PatientCard id={id} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DoctorPage;
