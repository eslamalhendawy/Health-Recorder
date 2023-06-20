import { useEffect } from "react";
import "./PatientPage.css";
import CHTable from "../CHTable/CHTable";
import SurgeryTable from "../SurgeryTable/SurgeryTable";
import GeneticTable from "../GeneticTable/GeneticTable"
import DiagnosisTable from "../DiagnosisTable/DiagnosisTable";

function PatientPage() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <div className="patient-sidebar">
        <div className="user-information">
          <img src={localStorage.getItem("pImage")} alt="" />
          <span className="edit-button">
            <i className="fa-solid fa-pen"></i>
          </span>
          <h3>{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("pLastName")}`}</h3>
          <span>{localStorage.getItem("pEmail")}</span>
        </div>
        <ul>
          <li>
            <a href="#person">
              <i className="fa-solid fa-hospital-user"></i>
              Personal Information
            </a>
          </li>
          <li>
            <a href="#health">
              <i className="fa-solid fa-heart"></i>
              Health status
            </a>
          </li>
          <li>
            <a href="#surgical">
              <i className="fa-solid fa-hospital"></i>
              Surgical history
            </a>
          </li>
          <li>
            <a href="#genetic">
              <i className="fa-solid fa-square-virus"></i>
              Genetic disease
            </a>
          </li>
          <li>
            <a href="#diagnosis">
              <i className="fa-solid fa-user-doctor"></i>
              Diagnosis
            </a>
          </li>
        </ul>
      </div>
      <div className="patient-content">
        <div className="header">
          <h2>Profile</h2>
        </div>
        <div className="person" id="person">
          <h2 className="main-head">Personal information</h2>
          <div className="box">
            <div className="profile">
              <img src={localStorage.getItem("pImage")} alt="" />

              <div className="text">
                <h3>{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("pLastName")}`}</h3>
                <span>{localStorage.getItem("pEmail")}</span>
              </div>
            </div>
            <div className="information">
              <h5>Age</h5>
              <span>{localStorage.getItem("pAge")}</span>
              <h5>Blood type</h5>
              <span>{localStorage.getItem("pBloodType")}</span>
            </div>
            <div className="information">
              <h5>Gender</h5>
              <span>{localStorage.getItem("pGender") === "mail" ? "Male" : "Female"}</span>
              <h5>Contact Number</h5>
              <span>{`+${localStorage.getItem("pPhoneNumber")}`}</span>
            </div>
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <span>123</span>
            </div>
          </div>
        </div>
        <div className="health" id="health">
          <h2 className="main-head">Health status</h2>
          <div className="table">
            <div className="table-header">
              <span>Chronic Disease</span>
              <span>Regular Medicine</span>
              <span>Any Health Problem</span>
              <span>Regular Medicine</span>
            </div>
            <CHTable />
          </div>
            
        </div>
        <div className="surgical" id="surgical">
          <h2 className="main-head">Surgical history</h2>
          <table className="table">
            <thead>
              <tr>
                <th >Surgery</th>
                <th >Date</th>
              </tr>
            </thead>
            <tbody>
              <SurgeryTable />
            </tbody>
          </table>
        </div>
        <div className="genetic" id="genetic">
          <h2 className="main-head">Genetic disease</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Disease</th>
                <th>Medicine</th>
              </tr>
            </thead>
            <tbody>
              <GeneticTable />
            </tbody>
          </table>
        </div>
        <div className="diagnosis" id="diagnosis">
          <h2 className="main-head">Diagnostic Recording History</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Diagnosis</th>
                <th>Medicine</th>
                <th>Doctor Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <DiagnosisTable />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientPage;
