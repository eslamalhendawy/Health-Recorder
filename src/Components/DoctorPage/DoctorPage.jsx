import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PatientCard from "../PatientCard/PatientCard";
import DoctorModal from "../DoctorModal/DoctorModal";
import "./DoctorPage.css";

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
        localStorage.setItem("pEmail", res.data.data.pationt.email);
        localStorage.setItem("pImage", res.data.data.pationt.image);
        localStorage.setItem("pPhoneNumber", res.data.data.pationt.phoneNumber);
        localStorage.setItem("pNationalID", res.data.data.pationt.National_ID);
        localStorage.setItem("pHealthProblems", JSON.stringify(res.data.data.pationt.Health_problems));
        localStorage.setItem("pGenetic", JSON.stringify(res.data.data.pationt.Hereditary_diseases));
        localStorage.setItem("pSurgery", JSON.stringify(res.data.data.pationt.Surgical_operations));
        localStorage.setItem("pChronic", JSON.stringify(res.data.data.pationt.chronic_Diseases));
        localStorage.setItem("pDiagonas", JSON.stringify(res.data.data.pationt.diagonas));
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
    <div className="page">
      <div className="sidebar">
        <div className="doc-information">
          <img src={localStorage.getItem("doctorImage")} alt="Doctor's Photo" />
          <DoctorModal />
          <h3>{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("userLastName")}`}</h3>
          <span>{localStorage.getItem("doctorDepartment")}</span>
          <span>{`+${localStorage.getItem("doctorPhone")}`}</span>
          <a href="">
            <i className="fa-solid fa-location-dot"></i>
            {localStorage.getItem("doctorAddress")}
          </a>
        </div>
      </div>
      <div className="content">
        <div className="doctor-header">
          <h2>My Profile</h2>
          <div className="search">
            <input onChange={(e) => setPatientID(e.target.value)} type="text" name="search" placeholder="Enter Patient Code" />
            <button onClick={clickHandler} className="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="doctor-page-container">
          {patientList.map((id, index) => {
            return <PatientCard id={id} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DoctorPage;
