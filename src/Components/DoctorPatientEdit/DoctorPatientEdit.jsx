import { useEffect } from "react";
import SurgeryTable from "../SurgeryTable/SurgeryTable";
import GeneticTable from "../GeneticTable/GeneticTable";
import DiagnosisTable from "../DiagnosisTable/DiagnosisTable";
import DiagnosticModal from "../DiagnosticModal/DiagnosticModal";
import GeneticModal from "../GeneticModal/GeneticModal";
import SurgeryModal from "../SurgeryModal/SurgeryModal";
import HealthModal from "../HealthModal/HealthModal";
import XrayModal from "../XrayModal/XrayModal"

import "../DiagnosticModal/DiagnosticModal.css";

function PatientPage() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Page";
    window.scrollTo(0, 0);
  }, []);

  const chronic = JSON.parse(localStorage.getItem("pChronic"));
  const healthProblems = JSON.parse(localStorage.getItem("pHealthProblems"));
  const xray = JSON.parse(localStorage.getItem("pXray"));

  return (
    <div className="page">
      <div className="patient-sidebar">
        <div className="user-information">
          <img src={localStorage.getItem("pImage")} alt="" />
          <h3>{`${localStorage.getItem("pFirstName")} ${localStorage.getItem("pLastName")}`}</h3>
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
          <h2 className="main-head">Personal Information</h2>
          <div className="box">
            <div className="profile">
              <img src={localStorage.getItem("pImage")} alt="" />

              <div className="text">
                <h3>{`${localStorage.getItem("pFirstName")} ${localStorage.getItem("pLastName")}`}</h3>
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
          <HealthModal />
          <h2 className="main-head">Health Status</h2>
          <table className="table">
            <tbody>
              <tr>
                <th>Chronic Disease</th>
                <th>Regular Medicine</th>
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
                      <td>{data.name}</td>
                      <td>{data.medicen}</td>
                    </tr>
                  );
                })
              )}
              <tr>
                <th>Health Problems</th>
                <th>Medication</th>
              </tr>
              {healthProblems.length === 0 ? (
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                healthProblems.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.medicen}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="surgical" id="surgical">
          <SurgeryModal />
          <h2 className="main-head">Surgical History</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Surgery</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <SurgeryTable />
            </tbody>
          </table>
        </div>
        <div className="genetic" id="genetic">
          <GeneticModal />
          <h2 className="main-head">Genetic Disease</h2>
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
          <DiagnosticModal />
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
        <div className="xray">
          <XrayModal />
          <h2 className="main-head">X-Rays And Prescriptions</h2>
          <div className="table">
            {xray.map((data, index) => {
              return (
                <div key={index} className="xray-element">
                  <img src={data} alt="" />
                  <span>Hand Palms X-Ray</span>
                  <span>10/5/2020</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientPage;
